import {useEffect, useState} from 'react'

export const useFetch = (url: string) => {
  const [data, setData] = useState<string[]>([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data =>
        setData(data.filter((word: string) => word.trim().length === 5)),
      )
      .catch(err => console.log(err))
  }, [])

  return {data}
}
