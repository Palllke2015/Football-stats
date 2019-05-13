import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { SELECT } from '../../actionCreators/select/select';
import { LEAGUE } from '../../actionCreators/league/league'

class SelectComponent extends Component {

  state = {
    selectedOption: {
      value: 'PL',
      label: 'Premier League'
    }
  };

  options = [
    { value: 'PD', label: 'La League (Primera Division)' },
    { value: 'PL', label: 'Premier League' },
    { value: 'BL1', label: 'Bundesliga' },
    { value: 'SA', label: 'Serie A' }
  ];

  handleChange = (info) => {

    this.setState({
      selectedOption: {
        value: info.value,
        label: info.label
      }
    });
    this.props.SELECT(info.value);
    this.props.LEAGUE(info.value);

  };

  render() {
    return(
      <Select
        options={this.options}
        onChange={this.handleChange}
        value={this.state.selectedOption}
      />
    )
  }
}

const props = (state) =>({
  value: state.select.value
});

export default connect(props, { SELECT, LEAGUE })(SelectComponent);
