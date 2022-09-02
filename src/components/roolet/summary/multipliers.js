import React from 'react'

class MultiplierStatistic extends React.Component {
  render() {
    const { message, type, percentage } = this.props
    return (
      <div>
        <p>
          {message} <span>{type}</span>
        </p>
        <h3> {percentage} </h3>
      </div>
    )
  }
}

export default MultiplierStatistic
