import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    document.getElementById("display").innerHTML = "0"
  }
  
  handleClick(event) {
    console.log(document.getElementById(event.target.id).innerHTML)
    
    const mathRegex = new RegExp('[*+\/-]');
    const mathRegexWithoutMinus = new RegExp('[*+\/]');
    
    const updateDisplay = (html) => {
      let arr = document.getElementById("display").innerHTML.split(mathRegex)
      let lastItemOfArr = arr.pop()

      if (document.getElementById("display").innerHTML === "0" && html === ".") {
        document.getElementById("display").innerHTML = "0."
      } else if (html === "." && lastItemOfArr.includes(".")) {

      } else if (document.getElementById("display").innerHTML === "0") {
        document.getElementById("display").innerHTML = html
      } else if (document.getElementById("display").innerHTML.slice(-1) === "." && html === ".") {

      } else if (mathRegexWithoutMinus.test(document.getElementById("display").innerHTML.slice(-1)) === true && html === "-") {
        document.getElementById("display").innerHTML += html
      } else if (mathRegex.test(document.getElementById("display").innerHTML.slice(-1)) === true && mathRegex.test(html) === true) {
        if (document.getElementById("display").innerHTML.slice(-1) === "-") {
          let lastCharacterRemoved = document.getElementById("display").innerHTML.slice(0, -1).slice(0, -1);
          document.getElementById("display").innerHTML = lastCharacterRemoved + html
          console.log("entrou")
        }
        let lastCharacterRemoved = document.getElementById("display").innerHTML.slice(0, -1);
        document.getElementById("display").innerHTML = lastCharacterRemoved + html
      } else {
        document.getElementById("display").innerHTML += html
      }
    }

    const clearDisplay = () => {
      document.getElementById("display").innerHTML = "0";
    }

    const equals = () => {
      document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML)
    }
    
    switch(event.target.id) {
      case "clear":
        clearDisplay();
        break;
      case "decimal":
      case "zero":
      case "one":
      case "two":
      case "three":
      case "four":
      case "five":
      case "six":
      case "seven":
      case "eight":
      case "nine":
      case "add":
      case "subtract":
      case "multiply":
      case "divide":
        updateDisplay(document.getElementById(event.target.id).innerHTML);
        break;
      case "equals":
        equals();
        break;
      default: 
        return event.target.id
    }
  }
  
  render() {
    return (
      <div id="calculator" class="container text-center bg-light p-4">
        <div id="displaycontainer" class="row bg-dark"><p id="display" class="text-end text-light mb-0"></p></div>
        <div class="row">
          <button type="button" id="clear" class="col-6 btn btn-danger" onClick={this.handleClick}>AC</button>
          <button type="button" id="divide" class="col btn btn-secondary" onClick={this.handleClick}>/</button>
          <button type="button" id="multiply" class="col btn btn-secondary" onClick={this.handleClick}>*</button>
        </div>
        <div class="row">
          <div class="col-9">
            <div class="row">
              <button type="button" id="seven" class="col btn btn-primary" onClick={this.handleClick}>7</button>
              <button type="button" id="eight" class="col btn btn-primary" onClick={this.handleClick}>8</button>
              <button type="button" id="nine" class="col btn btn-primary" onClick={this.handleClick}>9</button>
            </div>
            <div class="row">
              <button type="button" id="four" class="col btn btn-primary" onClick={this.handleClick}>4</button>
              <button type="button"id="five" class="col btn btn-primary" onClick={this.handleClick}>5</button>
              <button type="button" id="six" class="col btn btn-primary" onClick={this.handleClick}>6</button>
            </div>
            <div class="row">
              <button type="button" id="one" class="col btn btn-primary" onClick={this.handleClick}>1</button>
              <button type="button" id="two" class="col btn btn-primary" onClick={this.handleClick}>2</button>
              <button type="button" id="three" class="col btn btn-primary" onClick={this.handleClick}>3</button>
            </div>
            <div class="row">
              <button type="button" id="zero" class="col btn btn-primary" onClick={this.handleClick}>0</button>
              <button type="button" id="decimal" class="col btn btn-primary" onClick={this.handleClick}>.</button>
            </div>
          </div>
          <div class="col-3">
            <div class="row">
              <button type="button" id="subtract" class="col btn btn-secondary" onClick={this.handleClick}>-</button>
            </div>
            <div class="row">
              <button type="button" id="add" class="col btn btn-secondary" onClick={this.handleClick}>+</button>
            </div>
            <div class="row">
              <button type="button" id="equals" class="col btn btn-dark" onClick={this.handleClick}>=</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

root.render(<Calculator />)