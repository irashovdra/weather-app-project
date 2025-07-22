const API_KEY = "b867aa058e49a412202dec7fb6daba94";

export const fetchWeatherByCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("City not found");
  }
  return res.json();
};

console.log(fetchWeatherByCity());