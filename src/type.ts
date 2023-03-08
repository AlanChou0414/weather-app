export interface WeatherData {
  location: {
    name: string
    country: string
    localtime: string
  }
  current: {
    last_updated: string
    temp_c: number
    wind_kph: number
    wind_dir: string
    humidity: number
    condition: {
      text: string
      icon: string
    }
  }
}