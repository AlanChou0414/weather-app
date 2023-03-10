import { useState, useEffect } from 'react'
import axios from 'axios';

// components
import DebouncedInput from './components/DebounceInput';

// icon
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

//type
import { WeatherData } from './type';

const App = () => {
  const [apiData, setApiData] = useState<WeatherData>()
  const [query, setQuery] = useState('Taiwan')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getApiData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=5ce661d8a3ec404d8b271405230803&q=${query}`)
        const data = await res.data
        setApiData(data)
        setIsLoading(false)
      } catch (err) {
        setQuery('Taiwan')
        setIsLoading(false)
        throw err
      }
    }
    getApiData()
  }, [query])

  const handleOnChange = (value: string) => {
    setQuery(value);
  }

  return (
    <>
      <main className='container mx-auto'>
        <div className='flex items-center justify-center h-screen'>
          <div className='flex flex-col justify-center items-center border-2 rounded-xl w-96 h-96 p-8  bg-white'>
            {
              apiData &&
              <>
                <img
                  src={apiData?.current.condition.icon}
                  alt="weather icon" />
                <h3 className='text-3xl mt-1 font-bold'>{apiData?.current.temp_c}</h3>
                <h3 className=''>{apiData?.current.condition.text}</h3>
              </>
            }
            <h1 className='text-4xl my-3 text-center'>
              {
                apiData
                  ? `${apiData?.location.name}`
                  : `Weather App`
              }
            </h1>
            <DebouncedInput
              onDebouncedValueChange={handleOnChange}
            />
            <div>
              {
                isLoading && <AiOutlineLoading3Quarters className='animate-spin' size={25} />
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App