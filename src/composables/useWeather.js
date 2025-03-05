import { useWeatherStore } from "@/stores/weatherStore";
import getTemperatura from "@/helpers/getWeather";


async function useWeather() {
  const temperatura = await getTemperatura(); /* trae la temperatura y la guarda e el store */
  const weatherStore = useWeatherStore();
  weatherStore.setTemperatura(temperatura);
}

export default useWeather;
