import styles from './num-adjust.module.css'

const NumAdjust = ({ name, setNum, getNum }) => {
  const addAmount = () => {
    let num = getNum(name)
    if (num < 99) num++
    setNum(name, num)
  }

  const subAmount = () => {
    let num = getNum(name)
    if (num > 1) num--
    setNum(name, num)
  }

  const handleInput = (input) => {
    if (!/^\d*$/.test(input.value)) return
    setNum(name, input.value)
  }

  const handleInputLoseFocus = () => {
    let num = getNum(name)
    if (num > 99) num = 99
    if (num < 1) num = 1
    setNum(name, num)
  }

  return (
    <div className={styles.price__adjust}>
      <p className={styles.price__minus} onClick={() => subAmount()}>
        -
      </p>
      <input
        type='text'
        className={styles.price__num}
        value={getNum(name)}
        onChange={(e) => handleInput(e.target)}
        onBlur={() => handleInputLoseFocus()}
      />
      <p className={styles.price__plus} onClick={() => addAmount()}>
        +
      </p>
    </div>
  )
}
export default NumAdjust
