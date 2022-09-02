# :game_die: roolet :game_die:

<p align="center">
  <img src="https://github.com/pikulet/roolet/blob/master/src/images/roolet.png" width="600">
</p>

A discrete event visualiser with xkcd graphics. Inspired by Roulette betting routines and risk-spreading techniques.

## Functional Improvements

- Reduce the number of data points in simulations with a large number of rounds. The chart.xkcd library did not allow the x-axis ticks to be configured. One workaround is to compact the number of datapoints into histogram buckets.
- Support multiple bet strategies in one visualisation. A weighted visualisation can be provided, with the bet amount being the weight.
- Support default configuration patterns. The application is not trivial to configure, so some default options like 'Roulette', '1 to 24', 'Red' can be provided.
- Data validation.

## Credits

Main Logo: [Font](https://www.dafont.com/d-sketch.font), [Dice Image](https://favpng.com/png_view/dice-drawing-dice-sketch-png/piYjC5qg)

[ChartXkcd (React wrapper)](https://github.com/obiwankenoobi/chart.xkcd-react)

[xkcd font](https://github.com/ipython/xkcd-font/blob/master/xkcd-script/font/xkcd-script.woff)
