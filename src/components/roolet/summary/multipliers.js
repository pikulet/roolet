import React from 'react'

class MultiplierStatistic extends React.Component {
  render() {
    const { message, type, percentage } = this.props
    return (
      <div>
        <p>
          {message} <span className="desc">{type}</span>
        </p>
        <p className="value text-info">{percentage} %</p>
      </div>
    )
  }
}

export default MultiplierStatistic
