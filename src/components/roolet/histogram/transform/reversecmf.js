function toReverseCmf(histogram) {
  console.log(histogram.probabilities)
  const cmf_probabilities = []
  var p = 0
  for (let i = histogram.probabilities.length - 1; i > -1; i--) {
    p += histogram.probabilities[i]

    cmf_probabilities.push(p)
  }

  return {
    labels: histogram.winnings.map(String),
    datasets: [
      {
        label: '% (at least)',
        data: cmf_probabilities.reverse()
      }
    ]
  }
}

export default toReverseCmf
