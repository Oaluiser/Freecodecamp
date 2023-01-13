import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const root = ReactDOM.createRoot(
document.getElementById('root'));


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      minutes: 25,
      seconds: 0,
      play: false,
      session: true };

    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {

    const timer = setInterval(() => {
      if (this.state.play === true) {
        if (this.state.minutes === 0 && this.state.seconds === 0) {
          if (this.state.session) {
            document.getElementById("timer-label").innerHTML = "Break";
            this.setState({ minutes: this.state.breakLength });
            this.setState({ seconds: 0 });
            document.getElementById("beep").play();
          } else {
            document.getElementById("timer-label").innerHTML = "Session";
            this.setState({ minutes: this.state.sessionLength });
            this.setState({ seconds: 0 });
            document.getElementById("beep").play();
          }
        } else if (this.state.seconds === 0) {
          this.setState({ minutes: this.state.minutes - 1 });
          this.setState({ seconds: 59 });
        } else {
          this.setState({ seconds: this.state.seconds - 1 });
        };

      }

    }, 1000);
  }


  handleClick(event) {


    switch (event.target.id) {
      case "break-decrement":
        if (this.state.breakLength === 1) {

        } else {
          this.setState({ breakLength: this.state.breakLength - 1 });
        };
        break;

      case "break-increment":
        if (this.state.breakLength >= 60) {

        } else {
          this.setState({ breakLength: this.state.breakLength + 1 });
        };
        break;

      case "session-decrement":
        this.setState({ seconds: 0, play: false });
        if (this.state.sessionLength === 1) {

        } else {
          this.setState({ sessionLength: this.state.sessionLength - 1 });
        };
        this.setState({ minutes: this.state.sessionLength - 1 });
        break;

      case "session-increment":
        if (this.state.sessionLength >= 60) {

        } else {
          this.setState({ sessionLength: this.state.sessionLength + 1 });
        };
        this.setState({ minutes: this.state.sessionLength - 1 });
        break;

      case "start_stop":
        if (this.state.play) {
          this.setState({ play: false });
        } else {
          this.setState({ play: true });
        }
        break;

      case "reset":
        this.setState({ sessionLength: 25, breakLength: 5, minutes: 25, seconds: 0, play: false });
        document.getElementById("beep").pause().load();
        break;

      default:
        return event.target.id;}

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "clock-container", class: "container text-center border border-primary rounded p-5" }, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { id: "break-label", class: "col row align-items-start" }, /*#__PURE__*/
      React.createElement("p", { class: "fs-3" }, "Break Length"), /*#__PURE__*/
      React.createElement("button", { id: "break-decrement", onClick: this.handleClick, class: "btn btn-light col ms-4 bi bi-arrow-down" }), /*#__PURE__*/
      React.createElement("p", { id: "break-length", class: "col fs-4" }, this.state.breakLength), /*#__PURE__*/
      React.createElement("button", { id: "break-increment", onClick: this.handleClick, class: "btn btn-light col bi bi-arrow-up" })), /*#__PURE__*/

      React.createElement("div", { id: "session-label", class: "col row align-items-start" }, /*#__PURE__*/
      React.createElement("p", { class: "fs-3" }, "Session Length"), /*#__PURE__*/
      React.createElement("button", { id: "session-decrement", onClick: this.handleClick, class: "btn btn-light col ms-4 bi bi-arrow-down" }), /*#__PURE__*/
      React.createElement("p", { id: "session-length", class: "col fs-4" }, this.state.sessionLength), /*#__PURE__*/
      React.createElement("button", { id: "session-increment", onClick: this.handleClick, class: "btn btn-light col me-4 bi bi-arrow-up" }))), /*#__PURE__*/


      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { id: "timer-label", class: "fs-3 mb-0" }, "Session"), /*#__PURE__*/
      React.createElement("p", { id: "time-left", class: "fs-1" }, this.state.minutes <= 9 ? "0" + this.state.minutes + ":" : this.state.minutes + ":", this.state.seconds <= 9 ? "0" + this.state.seconds : this.state.seconds)), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "start_stop", onClick: this.handleClick, class: "btn btn-light btn-lg me-2" }, "Play/Pause"), /*#__PURE__*/
      React.createElement("button", { id: "reset", onClick: this.handleClick, class: "btn btn-light btn-lg ms-2 bi bi-arrow-repeat" }, /*#__PURE__*/
      React.createElement("audio", { id: "beep", preload: "auto", src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav", type: "audio/wav" })))));




  }}



root.render( /*#__PURE__*/React.createElement(Clock, null));