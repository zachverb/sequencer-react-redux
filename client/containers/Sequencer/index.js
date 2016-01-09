import React, {Component} from 'react';
import './styles.less';

export class Sequencer extends Component {
  static propTypes = {
    children: React.PropTypes.any 
  }

  render() {
    return (
      <div className="grid">
        {this.props.children}
      </div>
    );
  }
}
