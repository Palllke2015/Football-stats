import React, { Component } from 'react'
import TableItem from './table-item'
import { connect } from "react-redux";

import { TABLE } from '../../actionCreators/table/table'

class Table extends Component {

  componentWillMount() {
    this.props.TABLE('2021')
  }

  render() {
    const { table, loading } = this.props;
    if (loading) {
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
  table: state.table.data,
  loading: state.table.loading
});

export default connect(props, { TABLE })(Table);
