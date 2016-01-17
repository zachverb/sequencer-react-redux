import React, {Component} from 'react';
import './styles.less';

export class Pad extends Component {
  render() {
    console.log('hi');
    console.log(this.props);
    return (
      <div 
        className="pad col-sm-1"
        
      >

      </div> 
    );
  }
}
