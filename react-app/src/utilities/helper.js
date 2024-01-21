export function showPrice(price) {
  // return price.toString().split('').reduce()
  return price
    .toString()
    .split('')
    .reverse()
    .reduce((acc, e, index) => {
      if (index && index % 3 === 0) acc.push(',')
      acc.push(e)
      return acc
    }, [])
    .reverse()
    .join('')
}
