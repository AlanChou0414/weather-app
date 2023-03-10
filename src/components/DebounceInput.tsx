import React, { useState } from "react"

interface Props {
  onDebouncedValueChange: (value: string) => void
  debounceTime?: number
};

const DebouncedInput = ({ onDebouncedValueChange, debounceTime = 1000, }: Props) => {
  const [timer, setTimer] = useState<number | undefined>(undefined)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (timer) {
      clearTimeout(timer)
    }
    setTimer(setTimeout(() => onDebouncedValueChange(value), debounceTime))
  }

  return (
    <input
      className='border rounded-lg w-40 h-8 my-3 text-xl p-3 text-center capitalize'
      id='queryText'
      type="text"
      onChange={handleOnChange}
      placeholder="Country / City"
    />
  )
};

export default DebouncedInput;
