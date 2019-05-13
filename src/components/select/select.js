import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { SELECT } from '../../actionCreators/select/select';
import { LEAGUE } from '../../actionCreators/league/league'

class SelectComponent extends Component {


  options = [
    { value: 'PD', label: 'La League (Primera Division)' },
    { value: 'PL', label: 'Premier League' },
    { value: 'BL1', label: 'Bundesliga' },
    { value: 'SA', label: 'Serie A' }
  ];

  handleChange = (info) => {
    this.props.SELECT(info.value, info.label);
    this.props.LEAGUE(info.value);
  };

  render() {
    const { label, value} = this.props;
    return(
      <Select
        options={this.options}
        onChange={this.handleChange}
        value={{label,value}}
      />
    )
  }
}

const props = (state) =>({
  value: state.select.value,
  label: state.select.label
});

export default connect(props, { SELECT, LEAGUE })(SelectComponent);
