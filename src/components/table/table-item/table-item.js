import React, { Component } from 'react'

class TableItem extends Component{
  render() {
    const { info } = this.props
    return(
      <tr>
        <td>
          {info.position}
        </td>
        <td>
          <img src={info.team.crestUrl} alt="logo" style={{width: 20, height: 20}} />
          {info.team.name}
        </td>
        <td>
          {info.points}
        </td>
        <td>
          {info.playedGames}
        </td>
        <td>
          {info.won}
        </td>
        <td>
          {info.lost}
        </td>
        <td>
          {info.draw}
        </td>
      </tr>
    )
  }
}

export default TableItem;
