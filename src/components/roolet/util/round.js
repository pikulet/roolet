function round(value, dp) {
  const base = 10 ** dp
  return Math.round(value * base) / base
}

export default round
