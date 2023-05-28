import { useState } from 'react'

export const useGptModelSwitch = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleOnClick = (index: number) => {
    setActiveIndex(index)
  }

  return { activeIndex, handleOnClick }
}
