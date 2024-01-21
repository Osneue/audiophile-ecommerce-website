import { useEffect } from 'react'
import useWindowScroll from 'src/utilities/useWindowScroll'
import useWindowWidth from 'src/utilities/useWindowWidth'

const useModalScroll = (usrHandle) => {
  const width = useWindowWidth()
  const scrollY = useWindowScroll()

  useEffect(() => {
    // console.log(width, scrollY)
    usrHandle(width, scrollY)
  }, [width, scrollY])
}

export default useModalScroll
