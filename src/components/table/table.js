import React, { Component } from 'react'
import TableItem from './table-item'
import { connect } from "react-redux";

class Table extends Component {
  render() {
    const { table } = this.props;
    if (table === null) {
      return (<div>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>)
    }
    const { standings } = table;
    const filter = standings.find((elem)=> elem.type === 'TOTAL');
    const { table: list } = filter;
    const res = list.map((elem)=> {
      return <TableItem key={elem.team.id} info={elem} />
    });
    return(
      <table>
        <tbody>
        <tr>
          <td>Место</td>
          <td>Название</td>
          <td>Очки</td>
          <td>Игр сыграно</td>
          <td>Побед</td>
          <td>Поражений</td>
          <td>Ничьих</td>
        </tr>
          {res}
        </tbody>

      </table>
    )
  }
}

const props = (state) => ({
  table: state.table.data
});

export default connect(props)(Table);
