import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Pad} from 'components/Pad'
import {connect} from 'react-redux';
import * as actionCreators from 'actions/sequencer';
import './styles.less';

@connect(
  state => state.sequencer.toJS(),
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Sequencer extends Component {
  static propTypes = {
    children: React.PropTypes.any 
  };

  generateRow(row, rowNum) {
    return (
      <div 
        className="row"
        key={rowNum}
      >
        {row.map((pad) => this.generatePad(pad))}
      </div>
    );
  }

  generatePad(pad) {
    return (
      <Pad
        {...pad}
        key={`${pad.column}-${pad.row}`}
        toggleStep={this.props.toggleStep}
      />
    );
  }

  render() {
    const {grid} = this.props;
    return (
      <div className="ui equal width grid sequencer container">
        {grid.map((row, rowNum) => this.generateRow(row, rowNum))} 
      </div>
    );
  }
}
