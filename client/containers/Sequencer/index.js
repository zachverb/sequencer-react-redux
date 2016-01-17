import React, {Component} from 'react';
import {Pad} from 'components/Pad'
import {connect} from 'react-redux';
import './styles.less';

@connect(
  state => state.sequencer,
)
export class Sequencer extends Component {
  static propTypes = {
    children: React.PropTypes.any 
  };

  generateGrid() {
    return this.props.grid.map(this.generateRow.bind(this));
  }

  generateRow(row, rowNum) {
    return (
      <div 
        className="row"
        key={rowNum}
      >
        {row.map(this.generatePad)}
      </div>
    );
  }

  generatePad(pad) {
    return (
      <Pad
        active={pad.active}
        key={`${pad.column}-${pad.row}`}
      />
    );
  }

  render() {
    return (
      <div className="grid container-fluid">
        {this.generateGrid()} 
      </div>
    );
  }
}
