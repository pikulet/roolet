function toData(state) {
  return {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
      {
        label: 'Plan',
        data: [30, 70, 200, 300, 500, 800, 1500, 2900]
      },
      {
        label: 'Reality',
        data: [0, 1, 30, 70, 80, 100, 50, 80]
      }
    ]
  }
}

export default toData
