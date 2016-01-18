import React, {Component} from 'react';
import classNames from 'classnames';
import './styles.less';

export class Pad extends Component {
  render() {
    const {active, row, column} = this.props;

    const classes = classNames('pad', {
      'active': active
    });

    return (
      <div
        className="column"
        onClick={this.props.toggleStep.bind(null, row, column)}
      >
        <div 
          className={classes}
        />
      </div> 
    );
  }
}
