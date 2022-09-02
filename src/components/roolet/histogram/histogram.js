import binomcoef from '@stdlib/math-base-special-binomcoef'
import round from '../util/round'

function generateHistogram(num_rounds_s, num_events, bet) {
  const bet_probability = bet.num_events / parseInt(num_events)
  const bet_winnings = bet.payout * bet.amt
  const num_rounds = parseInt(num_rounds_s)

  const probabilities = []
  const winnings = []

  for (let num_wins = 0; num_wins <= num_rounds; num_wins++) {
    const num_loss = num_rounds - num_wins
    const probability =
      binomcoef(num_rounds, num_wins) *
      bet_probability ** num_wins *
      (1 - bet_probability) ** num_loss

    const percentage = probability * 100
    const percentageRounded = round(percentage, 4)
    probabilities.push(percentageRounded)
    winnings.push(num_wins * bet_winnings - num_loss * bet.amt)
  }

  return {
    probabilities: probabilities,
    winnings: winnings
  }
}

export default generateHistogram
