import binomcoef from '@stdlib/math-base-special-binomcoef'

function generateHistogram(num_rounds_s, num_events, bet) {
  const bet_probability = bet.num_events / parseInt(num_events)
  const bet_winnings = bet.payout * bet.amt

  const probabilities = []
  const winnings = []

  const num_rounds = parseInt(num_rounds_s)
  for (let num_wins = 0; num_wins <= num_rounds; num_wins++) {
    const probability =
      binomcoef(num_rounds, num_wins) *
      bet_probability ** num_wins *
      (1 - bet_probability) ** (num_rounds - num_wins)

    const percentage = probability * 100
    const percentageRounded = Math.round(percentage * 10000) / 10000
    probabilities.push(percentageRounded)
    winnings.push(num_wins * bet_winnings)
  }

  return {
    probabilities: probabilities,
    winnings: winnings
  }
}

export default generateHistogram
