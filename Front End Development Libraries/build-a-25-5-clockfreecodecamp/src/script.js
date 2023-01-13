import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      minutes: 5,
      seconds: 0,
      play: false,
      session: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  

  componentDidMount() {
    
    const timer = setInterval(() => {
      
      if (this.state.play === true) {
        if (this.state.minutes === 0 && this.state.seconds === 1) {
          document.getElementById("beep").play();
        }
        
        if (this.state.minutes === 0 && this.state.seconds === 0) {
          if (this.state.session) {
            document.getElementById("timer-label").innerHTML = "Break";
            this.setState({ minutes: this.state.breakLength, seconds: 0, session: false});
          } else {
            document.getElementById("timer-label").innerHTML = "Session";
            this.setState({ minutes: this.state.sessionLength, seconds: 0, session: true});
          }
        } else if (this.state.seconds === 0) {
          this.setState({ minutes: (this.state.minutes - 1)});
          this.setState({ seconds: 59});
        } else {
          this.setState({ seconds: (this.state.seconds - 1)});
        };
      }
      console.log(this.state.minutes)
      console.log(this.state.seconds)
    } , 1000);
  }
  
  
  handleClick(event) {    
    
    
    switch(event.target.id) {
      case "break-decrement":
        this.setState({ seconds: 0, play: false});
        if (this.state.breakLength === 1) {
          
        } else {
          this.setState({ breakLength: (this.state.breakLength - 1)});
        };
        break;
        
      case "break-increment":
        this.setState({ seconds: 0, play: false});
        if (this.state.breakLength >= 60) {
          
        } else {
          this.setState({ breakLength: (this.state.breakLength + 1)});
        };
        break;
        
      case "session-decrement":
        this.setState({ seconds: 0, play: false});
        if (this.state.sessionLength === 1) {
          
        } else {
          this.setState({ sessionLength: (this.state.sessionLength - 1)});
          this.setState({ minutes: (this.state.sessionLength - 1)});
        };
        break;
        
      case "session-increment":
        this.setState({ seconds: 0, play: false});
        if (this.state.sessionLength === 60) {
          
        } else {
          this.setState({ sessionLength: (this.state.sessionLength + 1)});
          this.setState({ minutes: (this.state.sessionLength + 1)});
        };
        break;
        
      case "start_stop":
        if (this.state.play) {
          this.setState({ play: false });
        } else {
          this.setState({ play: true });
        }
        break;
        
      case "reset":
        this.setState({ sessionLength: 25, breakLength: 5, minutes: 25, seconds: 0, play: false, session: true});
        document.getElementById("timer-label").innerHTML = "Session"
        document.getElementById("beep").pause();
        document.getElementById("beep").load();
        break;
        
      default:
        return event.target.id;
    }
  }
  
  render() {
    return (
      <div id="clock-container" class="container text-center border border-primary rounded p-5">
        <div class="row">
          <div id="break-label" class="col row align-items-start">
            <p class="fs-3">Break Length</p>
            <button id="break-decrement" onClick={this.handleClick} class="btn btn-light col ms-4 bi bi-arrow-down"></button>
            <p id="break-length" class="col fs-4">{this.state.breakLength}</p>
            <button id="break-increment" onClick={this.handleClick} class="btn btn-light col bi bi-arrow-up"></button>
          </div>
          <div id="session-label" class="col row align-items-start">
            <p class="fs-3">Session Length</p>
            <button id="session-decrement" onClick={this.handleClick} class="btn btn-light col ms-4 bi bi-arrow-down"></button>
            <p id="session-length" class="col fs-4">{this.state.sessionLength}</p>
            <button id="session-increment" onClick={this.handleClick} class="btn btn-light col me-4 bi bi-arrow-up"></button>
          </div>
        </div>
        <div>
          <p id="timer-label" class="fs-3 mb-0">Session</p>
          <p id="time-left" class="fs-1">{this.state.minutes <= 9 ? "0"+this.state.minutes+":" : this.state.minutes+":"}{this.state.seconds <= 9 ? "0"+this.state.seconds : this.state.seconds}</p>
        </div>
        <div>
          <button id="start_stop" onClick={this.handleClick} class="btn btn-light btn-lg me-2">Play/Pause</button>
          <button id="reset" onClick={this.handleClick} class="btn btn-light btn-lg ms-2 bi bi-arrow-repeat">
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" type="audio/wav" />
          </button>
        </div>
      </div>
    )
  }
}


root.render(<Clock/>)