import { useEffect, useState } from 'react'
import axios from 'axios'


interface ApiData {
  location: {
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

const useFetch = () => {
  const [apiData, setApiData] = useState<ApiData>()
  const [query, setQuery] = useState<string>('Taiwan')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=5ce661d8a3ec404d8b271405230803&q=${query}`)
        const { data } = res
        setApiData(data)
      } catch (err) {
        throw err
      }
      setIsLoading(false)
    }
    getData()
  }, [query])

  return { apiData, setQuery, isLoading }
}

export default useFetch