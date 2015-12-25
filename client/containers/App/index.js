import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.less';

export class App extends Component {
  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }
}
