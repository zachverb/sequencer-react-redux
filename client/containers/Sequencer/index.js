import React, {Component} from 'react';

export class Sequencer extends Component {
  static propTypes = {
    children: React.PropTypes.any 
  }

  render() {
   return (
     <div class="grid">
       {this.props.children}
     </div>
   );
  }
}
