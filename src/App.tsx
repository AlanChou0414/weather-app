import { useRef } from 'react'

// hook
import useFetch from './hooks/useFetch'

// icon
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const App = () => {
  const { apiData, setQuery, isLoading } = useFetch()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleQuery = () => {
    if (!inputRef.current!.value) return ''
    setQuery(inputRef.current!.value)
    inputRef.current!.value = ''
  }

  return (
    <>
      <main className='container mx-auto'>
        <div className='flex items-center justify-center h-screen'>
          <div className='flex flex-col justify-center items-center border-2 rounded-xl w-96 h-96 p-8  bg-white'>
            {
              apiData &&
              <img
                src={apiData?.current.condition.icon}
                alt="weather icon" />
            }
            <h1 className='text-4xl my-3'>
              {
                apiData
                  ? `${apiData?.location.name} | ${apiData?.location.country}`
                  : `Weather App`
              }
            </h1>
            <label htmlFor="queryText">Country / City : </label>
            <input
              className='border rounded-lg w-40 h-8 my-3 text-xl p-3 text-center capitalize'
              type='text'
              id='queryText'
              ref={inputRef}
            />
            <div>
              {
                isLoading
                  ? <AiOutlineLoading3Quarters className='animate-spin' size={25} />
                  :
                  <button
                    className='border rounded-lg py-1 px-3 uppercase transition hover:bg-neutral-800 hover:text-white'
                    onClick={handleQuery}
                  >
                    search
                  </button>
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App