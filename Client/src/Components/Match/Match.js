import React from 'react';
import './Match.css';

class Match extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: this.props.matchData.matchDate,
            time: this.props.matchData.matchTime,
            wpm: this.props.matchData.score
        }
    }

    render(){
        const data = this.state;
        return(
          <div className="Match">
              <div className="container">
                  <div className="date">{data.date}</div>
                  <div className="time">{data.time}</div>
                  <div className="wpm">{data.wpm}</div>
              </div>
          </div>
        )
    }
}

export default Match;
