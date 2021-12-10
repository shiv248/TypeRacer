import React from 'react';
import './LoadingBar.css';

class LoadingBar extends React.Component{

    render() {
        return(
          <div className="LoadingBar">
              <div className='Percentage'>0%</div>
          </div>
        )
    }
}

export default LoadingBar;
