"use client"
import { useEffect, useRef, useState } from "react";
import { WeatherData, ForecastdayEntity } from "../types/Weather";

const API_KEY = "3191d3258aa14a9d87a83455232904";

function forecastData(data: ForecastdayEntity, tempUnit: Number) {
  return <div className="flex gap-x-4" key={data.date}>
    {data.hour.map(hr => {
      const hour = new Date(hr.time).getHours();
      return <div style={{ minWidth: "7vw" }} className="flex m-auto flex-col rounded-md bg-glass p-4 border" key={hour}>
        <div className='text-center'>{hour < 13 ? `${hour} AM` : `${hour - 12} PM`}</div>
        <div className="mx-auto">{tempUnit === 0 ? `${hr.temp_c}°C` : `${hr.temp_f}°F`}</div>
      </div>
    })}
  </div>;
}

export default function Weather() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("bokaro");
  const [tempUnit, setTempUnit] = useState(0); // 0 -> C & 1 -> F
  const locationInput = useRef(null);

  useEffect(() => {
    if (location) {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=1&aqi=yes&alerts=no`)
        .then(res => res.json())
        .then(data => {
          setData(data);
        })
        .catch(err => {
          setData(err)
        })
    }
  }, [location])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 weather text-slate-50">
      {data && <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex flex-col " style={{ display: "none" }}>
        <div className=" bg-glass p-4 rounded-lg shadow-2xl w-full max-h-90-screen">
          <div className="flex gap-2 flex-col sm:flex-row">
            <div className="w-full">
              <input className="w-full bg-transparent border rounded-md h-8 text-center outline-none" />
            </div>
            <div className="text-center rounded-md border w-full sm:mx-auto sm:w-min">
              <button className="bg-transparent px-8 h-8" onClick={() => { setLocation(locationInput.current.value) }}>Search</button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col text-center gap-2">
          <div className="flex gap-2 p-4 flex-col lg:flex-row lg:flex-nowrap sm:flex-wrap sm:flex-row h-full">
            <div className="bg-glass border px-8 rounded text-xy-center w-full shadow-2xl capitalize sm:flex-45">
              <strong>
                {location}
              </strong>
            </div>
            <div className="bg-glass border px-8 rounded text-xy-center w-full shadow-2xl sm:flex-45">
              <strong>
                {data.current?.wind_kph}
              </strong>
            </div>
            <div className="bg-glass border px-8 rounded text-xy-center w-full shadow-2xl sm:flex-45">
              <strong>
                {data.current?.temp_c}
              </strong>
            </div>
            <div className="bg-glass border px-8 rounded text-xy-center w-full shadow-2xl sm:flex-45">
              <strong>
                {data.current?.uv}
              </strong>
            </div>
            <div className="bg-glass border px-8 rounded text-xy-center w-full shadow-2xl sm:flex-45">
              <strong>
                {data.current?.humidity}
              </strong>
            </div>
          </div>
        </div>
      </div>}
      <div className='gap-8 z-10 w-full font-mono text-sm flex flex-col lg:flex-row'>
        <div className='flex flex-col rounded-lg gap-y-4 lg:w-1/3 bg-glass p-4'>
          <div className="flex flex-col p-4 gap-2 sm:flex-row bg-glass rounded-md border">
            <div className="w-full">
              <input className="w-full bg-transparent border rounded-md h-8 text-center outline-none" ref={locationInput} />
            </div>
            <div className="text-center rounded-md w-full sm:mx-auto sm:w-min">
              <button className="bg-transparent border w-full rounded-md px-8 h-8" onClick={() => {
                setLocation(locationInput.current?.value);
              }}>Search</button>
            </div>
          </div>
          {data && <div className='flex bg-glass border rounded-md p-8 text-xy-center'>
            <div className='text-6xl'>{tempUnit === 0 ? data.current?.temp_c : data.current?.temp_f}</div>
            <div className='text-xl'>{tempUnit === 0 ? '°C' : '°F'}</div>
          </div>}
          {data && <div className='text-2xl bg-glass border rounded-md p-8 text-xy-center'>{data.current?.condition.text}</div>}
          {data && <div className='flex bg-glass rounded-md border text-xy-center'><div className='p-12 text-2xl break-words'>{data.location?.name},{data.location?.country}</div></div>}
        </div>
        <div className='flex flex-col rounded-lg lg:w-2/3 bg-glass p-4'>
          <div className='flex flex-col'>
            <div className='flex justify-between mb-2'>
              <div className='text-lg'>Hourly Forecast</div>
              <div className='flex'>
                <button onClick={() => { setTempUnit(0) }} className={`rounded-50 h-8 w-8 p-0 ${tempUnit === 0 ? 'border bg-glass' : ''}`}>C</button>
                <button onClick={() => { setTempUnit(1) }} className={`rounded-50 h-8 w-8 p-0 ${tempUnit === 1 ? 'border bg-glass' : ''}`}>F</button>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex overflow-x-scroll scrollbar-hide'>
                {(data && data.forecast) && data.forecast.forecastday.map((d: ForecastdayEntity) => (forecastData(d, tempUnit)))}
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='text-lg my-2'>Todays Highlight</div>
            {data && <div className='flex gap-4 flex-col'>
              <div className='flex gap-x-4 flex-wrap gap-y-2 md:flex-nowrap md:gap-y-0'>
                <div className='p-4 bg-glass flex-45 rounded-md border min-h-10'>
                  <div>UV</div>
                  <div className='text-4xl text-xy-center'>{data.current?.uv}</div>
                </div>
                <div className='p-4 bg-glass flex-45 rounded-md border min-h-10'>
                  <div>Wind</div>
                  <div className='flex text-xy-center'>
                    <div className='text-4xl'>{data.current?.wind_kph}</div>
                    <div>km/h</div>
                  </div>
                  <div className='text-xy-center'>{data.current?.wind_dir}</div>
                </div>
                <div className='p-4 bg-glass flex-45 rounded-md border min-h-10'>
                  <div>Feels Like</div>
                  <div className='flex text-xy-center'>
                    <div className='text-4xl'>{tempUnit === 0 ? data.current?.feelslike_c : data.current?.feelslike_f}</div>
                    <div>{tempUnit === 0 ? '°C' : '°F'}</div>
                  </div>
                </div>
              </div>
              <div className='flex gap-x-4 flex-wrap gap-y-2 md:flex-nowrap md:gap-y-0'>
                <div className='p-4 bg-glass flex-45 rounded-md border min-h-10'>
                  <div>Humidity</div>
                  <div className='flex text-xy-center'>
                    <div className='text-4xl'>{data.current?.humidity}</div>
                    <div>%</div>
                  </div>
                </div>
                <div className='p-4 bg-glass flex-45 rounded-md border min-h-10'>
                  <div>Visibility</div>
                  <div className='flex text-xy-center'>
                    <div className='text-4xl'>{data.current?.vis_km}</div>
                    <div>km</div>
                  </div>
                </div>
                <div className='p-4 bg-glass flex-45 rounded-md border min-h-10'>
                  <div>Air Quality</div>
                  <div className='flex text-xy-center'>
                    <div>CO:</div>
                    <div>{data.current?.air_quality.co.toFixed(2)}</div>
                  </div>
                  <div className='flex text-xy-center'>
                    <div>PM2:</div>
                    <div>{data.current?.air_quality.pm2_5.toFixed(2)}</div>
                  </div>
                  <div className='flex text-xy-center'>
                    <div>PM10:</div>
                    <div>{data.current?.air_quality.pm10.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </main>
  )
}
