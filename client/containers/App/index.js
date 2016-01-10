import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.less';

export class App extends Component {
  render() {
    console.log('hi');
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }
}
