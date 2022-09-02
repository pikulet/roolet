import React from 'react'

class GlobalStatistic extends React.Component {
  render() {
    const { message, value } = this.props
    return (
      <div>
        <p>{message}</p>
        <p className="value">
          <span>$</span>
          <span>{value}</span>
        </p>
      </div>
    )
  }
}

export default GlobalStatistic
