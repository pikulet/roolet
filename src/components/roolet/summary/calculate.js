import round from '../util/round'

function getStatistics(num_rounds, num_events, bet, data) {
  const total_bet = num_rounds * bet.amt

  const cmf = data.reverseCmf
  const pr = cmf.datasets[0].data
  const winnings = cmf.labels.map(parseFloat)

  const expected_win = (bet.num_events / num_events) * bet.payout * bet.amt
  const expected_lose = (1 - bet.num_events / num_events) * -bet.amt
  const expected_winnings = expected_win + expected_lose

  const half_chance =
    100 - getLowCmf(num_rounds, pr, winnings, -0.5 * total_bet)
  const double_chance = getHighCmf(num_rounds, pr, winnings, 0.2 * total_bet)
  const triple_chance = getHighCmf(num_rounds, pr, winnings, 0.5 * total_bet)

  return {
    total_bet: total_bet,
    expected_winnings: round(expected_winnings, 2),
    half_chance: round(half_chance, 1),
    double_chance: round(double_chance, 1),
    triple_chance: round(triple_chance, 1)
  }
}

function getLowCmf(num_rounds, probabilities, winnings, value) {
  for (let i = 0; i < num_rounds; i++) {
    if (winnings[i] > value) {
      if (i === 0) {
        return 100
      }
      return probabilities[i - 1]
    }
  }
}

function getHighCmf(num_rounds, probabilities, winnings, value) {
  for (let i = 0; i <= num_rounds; i++) {
    if (winnings[i] >= value) {
      return probabilities[i]
    }
  }

  return 0
}

export default getStatistics
