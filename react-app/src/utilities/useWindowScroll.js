import { useEffect, useState } from 'react'

const useWindowScroll = () => {
  const [scrollY, setScrollY] = useState(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

export default useWindowScroll
