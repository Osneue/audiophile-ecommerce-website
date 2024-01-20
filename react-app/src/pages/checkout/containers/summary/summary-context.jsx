import { createContext, useContext, useState } from 'react'

const SummaryContext = createContext()

export const useSummary = () => {
  const [grandTotal, setGrandTotal] = useContext(SummaryContext)
  return { grandTotal, setGrandTotal }
}

export const SummaryContextProvider = ({ children }) => {
  const [grandTotal, setGrandTotal] = useState({ grandTotal: 0 })

  return (
    <SummaryContext.Provider value={[grandTotal, setGrandTotal]}>
      {children}
    </SummaryContext.Provider>
  )
}
