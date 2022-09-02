function toData(state) {
   return {
        labels: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10'
        ],
        datasets: [
            {
                label: 'Plan',
                data: [
                    30, 70, 200, 300, 500, 800, 1500, 2900,
                    5000, 8000
                ]
            },
            {
                label: 'Reality',
                data: [0, 1, 30, 70, 80, 100, 50, 80, 40, 150]
            }
        ]
    }
}

export default toData