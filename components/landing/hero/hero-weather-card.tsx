"use client";

import { useEffect, useState } from "react";
import { CloudSun, Droplets, Gauge, Leaf, Thermometer, Wind } from "lucide-react";

import styles from "./hero-weather-card.module.css";

type WeatherData = {
  location: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windKmh: number;
  pressure: number;
  aqi: number | null;
  healthStatus: string;
};

function HeroWeatherCard() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/weather");
        const json = (await res.json()) as WeatherData;
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) {
          setData({
            location: "Singapore",
            temperature: 31,
            feelsLike: 34,
            humidity: 78,
            windKmh: 12,
            pressure: 1008,
            aqi: 42,
            healthStatus: "Healthy",
          });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const w = data ?? {
    location: "Singapore",
    temperature: 31,
    feelsLike: 34,
    humidity: 78,
    windKmh: 12,
    pressure: 1008,
    aqi: 42,
    healthStatus: "Healthy",
  };

  return (
    <div className={styles.cardm} aria-label={`Weather in ${w.location}`}>
      {loading && <div className={styles.loading}>Loading weather…</div>}

      <div className={styles.card}>
        <div className={styles.weather}>
          <CloudSun size={64} strokeWidth={1.25} aria-hidden />
        </div>
        <p className={styles.main}>{w.temperature} °C</p>
        <p className={styles.mainsub}>{w.location}</p>
      </div>

      <div className={styles.card2}>
        <div className={styles.upper}>
          <div className={styles.humidityBlock}>
            <Droplets className={styles.humiditysvg} size={28} aria-hidden />
            <p className={styles.humiditytext}>
              Humidity
              <br />
              {w.humidity}%
            </p>
          </div>
          <div className={styles.windBlock}>
            <Wind className={styles.airsvg} size={28} aria-hidden />
            <p className={styles.airtext}>
              Wind
              <br />
              {w.windKmh} km/h
            </p>
          </div>
        </div>

        <div className={styles.lower}>
          <div className={styles.aqi}>
            <Leaf className={styles.miniIcon} size={20} aria-hidden />
            <span>
              AQI
              <br />
              {w.aqi ?? "—"}
            </span>
          </div>
          <div className={styles.realfeel}>
            <Thermometer className={styles.miniIcon} size={20} aria-hidden />
            <span>
              Real Feel
              <br />
              {w.feelsLike} °C
            </span>
          </div>
          <div className={styles.pressure}>
            <Gauge className={styles.miniIcon} size={20} aria-hidden />
            <span>
              Pressure
              <br />
              {w.pressure} hPa
            </span>
          </div>
        </div>

        <p
          className={`${styles.card3} ${
            w.healthStatus !== "Healthy" ? styles.caution : ""
          }`}
        >
          {w.healthStatus}
        </p>
      </div>
    </div>
  );
}

export default HeroWeatherCard;
