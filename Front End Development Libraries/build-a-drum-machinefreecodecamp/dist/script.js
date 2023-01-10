import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const root = ReactDOM.createRoot(
document.getElementById('root'));


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleEvent, false);
  }

  handleEvent(event) {
    switch (event.target.id) {
      case "Heater1":
        document.getElementById("Q").play();
        document.getElementById("textDisplay").innerHTML = event.target.id;
        break;
      case "Heater2":
        document.getElementById("W").play();
        document.getElementById("textDisplay").innerHTML = event.target.id;
        break;
      case "Heater3":
        document.getElementById("E").play();
        document.getElementById("textDisplay").innerHTML = event.target.id;
        break;
      case "Heater4":
        document.getElementById("A").play();
        document.getElementById("textDisplay").innerHTML = event.target.id;
        break;
      case "Clap":
        document.getElementById("S").play();
        document.getElementById("textDisplay").innerHTML = event.target.id;
        break;
      case "Open-HH":
        document.getElementById("D").play();
        document.getElementById("textDisplay").innerHTML = event.target.id;
        break;
      case "Kick-n'-Hat":
        document.getElementById("Z").play();
        document.getElementById("textDisplay").innerHTML = event.target.id;
        break;
      case "Kick":
        document.getElementById("X").play();
        document.getElementById("textDisplay").innerHTML = event.target.id;
        break;
      case "Closed-HH":
        document.getElementById("C").play();
        document.getElementById("textDisplay").innerHTML = event.target.id;
        break;
      default:
        event.target.id;}


    switch (event.key) {
      case "q":
      case "Q":
        document.getElementById("Q").play();
        document.getElementById("textDisplay").innerHTML = document.getElementById("Heater1").id;
        break;
      case "w":
      case "W":
        document.getElementById("W").play();
        document.getElementById("textDisplay").innerHTML = document.getElementById("Heater2").id;
        break;
      case "e":
      case "E":
        document.getElementById("E").play();
        document.getElementById("textDisplay").innerHTML = document.getElementById("Heater3").id;
        break;
      case "a":
      case "A":
        document.getElementById("A").play();
        document.getElementById("textDisplay").innerHTML = document.getElementById("Heater4").id;
        break;
      case "s":
      case "S":
        document.getElementById("S").play();
        document.getElementById("textDisplay").innerHTML = document.getElementById("Clap").id;
        break;
      case "d":
      case "D":
        document.getElementById("D").play();
        document.getElementById("textDisplay").innerHTML = document.getElementById("Open-HH").id;
        break;
      case "z":
      case "Z":
        document.getElementById("Z").play();
        document.getElementById("textDisplay").innerHTML = document.getElementById("Kick-n'-Hat").id;
        break;
      case "x":
      case "X":
        document.getElementById("X").play();
        document.getElementById("textDisplay").innerHTML = document.getElementById("Kick").id;
        break;
      case "c":
      case "C":
        document.getElementById("C").play();
        document.getElementById("textDisplay").innerHTML = document.getElementById("Closed-HH").id;
        break;
      default:
        event.target.id;}

  }


  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine", class: "container text-center bg-light px-5 py-4" }, /*#__PURE__*/
      React.createElement("div", { id: "display", class: "row align-items-center" }, /*#__PURE__*/
      React.createElement("div", { class: "col-8" }, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("button", { type: "button", id: "Heater1", class: "drum-pad btn btn-dark m-1 col", onClick: this.handleEvent }, "Q", /*#__PURE__*/
      React.createElement("audio", { class: "clip", id: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", type: "audio/mpeg" })), /*#__PURE__*/


      React.createElement("button", { type: "button", id: "Heater2", class: "drum-pad btn btn-dark m-1 col", onClick: this.handleEvent }, "W", /*#__PURE__*/
      React.createElement("audio", { class: "clip", id: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", type: "audio/mpeg" })), /*#__PURE__*/


      React.createElement("button", { type: "button", id: "Heater3", class: "drum-pad btn btn-dark m-1 col", onClick: this.handleEvent }, "E", /*#__PURE__*/
      React.createElement("audio", { class: "clip", id: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", type: "audio/mpeg" }))), /*#__PURE__*/



      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("button", { type: "button", id: "Heater4", class: "drum-pad btn btn-dark m-1 col", onClick: this.handleEvent }, "A", /*#__PURE__*/
      React.createElement("audio", { class: "clip", id: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", type: "audio/mpeg" })), /*#__PURE__*/


      React.createElement("button", { type: "button", id: "Clap", class: "drum-pad btn btn-dark m-1 col", onClick: this.handleEvent }, "S", /*#__PURE__*/
      React.createElement("audio", { class: "clip", id: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", type: "audio/mpeg" })), /*#__PURE__*/


      React.createElement("button", { type: "button", id: "Open-HH", class: "drum-pad btn btn-dark m-1 col", onClick: this.handleEvent }, "D", /*#__PURE__*/
      React.createElement("audio", { class: "clip", id: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", type: "audio/mpeg" }))), /*#__PURE__*/



      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("button", { type: "button", id: "Kick-n'-Hat", class: "drum-pad btn btn-dark m-1 col", onClick: this.handleEvent }, "Z", /*#__PURE__*/
      React.createElement("audio", { class: "clip", id: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", type: "audio/mpeg" })), /*#__PURE__*/


      React.createElement("button", { type: "button", id: "Kick", class: "drum-pad btn btn-dark m-1 col", onClick: this.handleEvent }, "X", /*#__PURE__*/
      React.createElement("audio", { class: "clip", id: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", type: "audio/mpeg" })), /*#__PURE__*/


      React.createElement("button", { type: "button", id: "Closed-HH", class: "drum-pad btn btn-dark m-1 col", onClick: this.handleEvent }, "C", /*#__PURE__*/
      React.createElement("audio", { class: "clip", id: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", type: "audio/mpeg" })))), /*#__PURE__*/



      React.createElement("div", { class: "col-4" }, /*#__PURE__*/
      React.createElement("p", { class: "mb-0" }, /*#__PURE__*/React.createElement("mark", { id: "textDisplay" }, "-")))), /*#__PURE__*/


      React.createElement("p", { class: "mb-0 mt-3" }, "Made by Aluisio Pereira")));


  }}


root.render( /*#__PURE__*/React.createElement(DrumMachine, null));