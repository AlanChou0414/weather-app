import { useEffect, useState } from 'react'
import axios from 'axios'

// type
import { WeatherData } from '../type'

const useFetch = () => {
  const [apiData, setApiData] = useState<WeatherData | undefined>()
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=5ce661d8a3ec404d8b271405230803&q=${query}`)
        const { data } = res
        setApiData(data)
        setIsLoading(false)
      } catch (err) {
        setQuery('Taiwan')
        setIsLoading(false)
      }
    }
    getData()
  }, [query])

  return { apiData, setQuery, isLoading }
}

export default useFetch