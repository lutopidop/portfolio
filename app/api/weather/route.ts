import { NextResponse } from "next/server";

const SINGAPORE = { lat: 1.3521, lon: 103.8198 };

export const revalidate = 1800;

export async function GET() {
  try {
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
      fetch(weatherUrl.toString(), { next: { revalidate: 1800 } }),
      fetch(airUrl.toString(), { next: { revalidate: 1800 } }),
    ]);

    if (!weatherRes.ok) {
      throw new Error("Weather API failed");
    }

    const weatherJson = await weatherRes.json();
    const airJson = airRes.ok ? await airRes.json() : null;
    const current = weatherJson.current;

    const aqi = airJson?.current?.us_aqi ?? null;
    const aqiLabel =
      aqi == null
        ? "—"
        : aqi <= 50
          ? "Good"
          : aqi <= 100
            ? "Moderate"
            : aqi <= 150
              ? "Unhealthy"
              : "Poor";

    return NextResponse.json({
      location: "Singapore",
      temperature: Math.round(current.temperature_2m),
      feelsLike: Math.round(current.apparent_temperature),
      humidity: Math.round(current.relative_humidity_2m),
      windKmh: Math.round(current.wind_speed_10m),
      pressure: Math.round(current.surface_pressure),
      aqi,
      aqiLabel,
      healthStatus: aqiLabel === "Good" || aqiLabel === "Moderate" ? "Healthy" : "Caution",
    });
  } catch {
    return NextResponse.json(
      {
        location: "Singapore",
        temperature: 31,
        feelsLike: 34,
        humidity: 78,
        windKmh: 12,
        pressure: 1008,
        aqi: 42,
        aqiLabel: "Good",
        healthStatus: "Healthy",
      },
      { status: 200 }
    );
  }
}
