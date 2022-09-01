import binomcoef from '@stdlib/math-base-special-binomcoef'

function generateHistograms(num_rounds, num_events, bets) {
    // array of histograms
    const result = []

    bets.forEach((bet, _) => {
        const bet_probability = bet.num_events / parseInt(num_events)
        const bet_winnings = bet.payout * bet.amt
        const h = generateHistogram(num_rounds, bet_probability, bet_winnings)
        result.push(h)

        return
    })

    return { result }
}

function generateHistogram(num_rounds_s, bet_probability, bet_winnings) {
    const num_rounds = parseInt(num_rounds_s)
    const histogram = []

    for (let num_wins = 0; num_wins <= num_rounds; num_wins++) {
        const probability =
            binomcoef(num_rounds, num_wins) *
            bet_probability ** num_wins *
            (1 - bet_probability) ** (num_rounds - num_wins)
        const net_winnings = num_wins * bet_winnings

        histogram.push([probability, net_winnings])
    }

    return { histogram }
}

export default generateHistograms
