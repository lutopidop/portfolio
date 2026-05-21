import { NextResponse } from "next/server";

const SINGAPORE = { lat: 1.3521, lon: 103.8198 };

export const revalidate = 1800;

const FALLBACK = {
  location: "Singapore",
  temperature: 31,
  feelsLike: 34,
  humidity: 78,
  windKmh: 12,
  pressure: 1008,
  aqi: 42,
  aqiLabel: "Good",
  healthStatus: "Healthy",
} as const;

async function fetchWithTimeout(
  url: string,
  ms: number,
  revalidateSeconds: number
): Promise<Response | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, {
      signal: controller.signal,
      next: { revalidate: revalidateSeconds },
    });
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

function aqiLabelFromValue(aqi: number | null): string {
  if (aqi == null) return "—";
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Moderate";
  if (aqi <= 150) return "Unhealthy";
  return "Poor";
}

export async function GET() {
  const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
  weatherUrl.searchParams.set("latitude", String(SINGAPORE.lat));
  weatherUrl.searchParams.set("longitude", String(SINGAPORE.lon));
  weatherUrl.searchParams.set(
    "current",
    "temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,surface_pressure,weather_code"
  );
  weatherUrl.searchParams.set("wind_speed_unit", "kmh");

  const airUrl = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
  airUrl.searchParams.set("latitude", String(SINGAPORE.lat));
  airUrl.searchParams.set("longitude", String(SINGAPORE.lon));
  airUrl.searchParams.set("current", "us_aqi");

  const [weatherRes, airRes] = await Promise.all([
    fetchWithTimeout(weatherUrl.toString(), 8000, revalidate),
    fetchWithTimeout(airUrl.toString(), 5000, revalidate),
  ]);

  if (!weatherRes?.ok) {
    return NextResponse.json(FALLBACK);
  }

  try {
    const weatherJson = await weatherRes.json();
    const current = weatherJson.current;
    if (!current) {
      return NextResponse.json(FALLBACK);
    }

    let aqi: number | null = null;
    if (airRes?.ok) {
      try {
        const airJson = await airRes.json();
        const raw = airJson?.current?.us_aqi;
        aqi = typeof raw === "number" ? raw : null;
      } catch {
        aqi = null;
      }
    }

    const aqiLabel = aqiLabelFromValue(aqi);

    return NextResponse.json({
      location: "Singapore",
      temperature: Math.round(current.temperature_2m),
      feelsLike: Math.round(current.apparent_temperature),
      humidity: Math.round(current.relative_humidity_2m),
      windKmh: Math.round(current.wind_speed_10m),
      pressure: Math.round(current.surface_pressure),
      aqi,
      aqiLabel,
      healthStatus:
        aqiLabel === "Good" || aqiLabel === "Moderate" ? "Healthy" : "Caution",
    });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
