import React, {Component} from 'react';
import {Pad} from 'components/Pad'
import './styles.less';

export class Sequencer extends Component {
  static propTypes = {
    children: React.PropTypes.any 
  };

  render() {
    console.log('wat')
    return (
      <div className="grid">
        <Pad />
        {this.props.children}
      </div>
    );
  }
}
