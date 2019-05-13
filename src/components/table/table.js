import React, { Component } from 'react';
import TableItem from './table-item';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { TABLE } from '../../actionCreators/table/table';

class Table extends Component {

  componentWillMount() {
    this.props.TABLE('2021');
  };

  render() {
    const { loading, table, error, errorMessage } = this.props;
    if (loading) {
      return (<div>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>)
    }
    if (table === null || table.errorCode) {
      return (
        <div>
          Please select <NavLink to={'/last-matches'}> League</NavLink>
        </div>
      )
    }
    if (error) {
      return <div>
        {errorMessage}
      </div>
    }

    const { standings } = table;
    const filter = standings.find((elem)=> elem.type === 'TOTAL');
    const { table: list } = filter;
    const res = list.map((elem)=> {
      return <TableItem key={elem.team.id} info={elem} />
    });
    return(
      <div>
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
      </div>

    )
  };
}

const props = (state) => ({
  table: state.table.data,
  loading: state.table.loading,
  error: state.table.error,
  errorMessage: state.table.errorMessage
});

export default connect(props, { TABLE })(Table);
