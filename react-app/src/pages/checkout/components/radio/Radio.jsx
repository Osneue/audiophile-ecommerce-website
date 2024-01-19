import styles from './radio.module.css'

const Radio = ({ label, name, checked, onChange }) => {
  return (
    <label htmlFor={label} className={styles.container}>
      <input
        type='radio'
        id={label}
        name={name}
        value={label}
        className={styles.input}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
      <div className={styles.radio}></div>
      <p className={styles.text}>{label}</p>
    </label>
  )
}
export default Radio
