import { useEffect } from 'react'
import { useWindowScroll, useWindowWidth } from 'src/utilities'

const useModalScroll = (usrHandle) => {
  const width = useWindowWidth()
  const scrollY = useWindowScroll()

  useEffect(() => {
    // console.log(width, scrollY)
    usrHandle(width, scrollY)
  }, [width, scrollY])
}

export default useModalScroll
