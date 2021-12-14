import React from 'react';
import './LoadingBar.css';

class LoadingBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          percent: this.props.loadingData
        }
    }
    render() {
        return(
          <div className="LoadingBar">
              <div style={{width: this.state.percent + "%"}} className='Percentage'>{this.state.percent}</div>
          </div>
        )
    }
}

export default LoadingBar;
