import OpenWeatherMapAPI from "../libs/OpenWeatherMapAPI"

const CITIES = [
  { name: "Melbourne", id: 2158177 },
  { name: "Sydney", id: 2147714 },
  { name: "Brisbane", id: 2174003 },
  { name: "Perth", id: 2063523 }
]

const group = () => OpenWeatherMapAPI
  .get("/group", {
    params: {
      id: CITIES.map((city) => city.id).join(","),
    }
  })
  .then((response) => response.json())


export default group;