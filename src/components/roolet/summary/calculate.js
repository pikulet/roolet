function getStatistics(bet, data) {
  const total_bet = 1000
  const expected_winnings = 2000
  const half_chance = 40
  const double_chance = 20
  const triple_chance = 30

  return {
    total_bet: total_bet,
    expected_winnings: expected_winnings,
    half_chance: half_chance,
    double_chance: double_chance,
    triple_chance: triple_chance
  }
}

export default getStatistics
