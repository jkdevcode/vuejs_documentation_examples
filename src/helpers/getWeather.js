import axios from "axios";
const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=2.9273&longitude=-75.2819&current=temperature_2m&timezone=auto&forecast_days=1";
async function getTemperatura() {
  try {
    const response = await axios.get(API_URL);
    const nuevaTemperatura = response.data.current.temperature_2m;
    return nuevaTemperatura;
  } catch (error) {
    console.error(error);
  }
}
export default getTemperatura;
