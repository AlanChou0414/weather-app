import { useState } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'

const App: React.FC = () => {
  const { apiData, setQuery, isLoading } = useFetch()
  
  return (
    <>
      <main className='container mx-auto'>
        <div className='flex items-center justify-center h-screen'>
          <div className='flex flex-col justify-center items-center border-2 rounded-lg w-96 h-96 p-8'>
            <img src={apiData?.current.condition.icon} alt="weather icon" />
            <h1 className='text-4xl'>Weather App</h1>
            <div>
              <label htmlFor="queryText">Country : </label>
              <input className='border w-40 h-8' type='text' name='queryText' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
