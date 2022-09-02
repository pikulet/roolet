import React from 'react'

class GlobalStatistic extends React.Component {
  render() {
    const { message, value } = this.props
    return (
      <div>
        <p> {message} </p>
        <h3> {value} </h3>
      </div>
    )
  }
}

export default GlobalStatistic
