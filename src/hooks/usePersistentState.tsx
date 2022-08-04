import React, { useState, useEffect} from "react";

const usePersistentState = (initialValue: any, localStorageKey: string) => {
    const [value, setValue] = useState(() => {
      try {
        const valueFromLS = localStorage.getItem(localStorageKey)
  
        return valueFromLS ? JSON.parse(valueFromLS) : initialValue
      } catch (error) {
        return initialValue
      }
    })
  
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(value))
    }, [value, localStorageKey])
  
    return [value, setValue]
  }

  export default usePersistentState;