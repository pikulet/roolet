function toPmf(histogram) {
  return {
    labels: histogram.winnings.map(String),
    datasets: [
      {
        label: '%',
        data: histogram.probabilities
      }
    ]
  }
}

export default toPmf
