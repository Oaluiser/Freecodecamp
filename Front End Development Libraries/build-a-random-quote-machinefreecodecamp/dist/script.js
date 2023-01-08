// Import dependencies
import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

// Link root with div id="root"
const root = ReactDOM.createRoot(
document.getElementById('root'));


// Set quotes
const quotes = [
{ author: "Aatrox", text: "Some fight for honor, some fight for glory. It matters only that you fight." },
{ author: "Ahri", text: "Mercy is a human luxury... and responsibility." },
{ author: "Akali", text: "The Fist of Shadow strikes from the cover of death itself. Do not impede the balance." },
{ author: "Amumu", text: "Solitude can be lonelier than death." },
{ author: "Anivia", text: "I am the fury of the blizzard, the bite of the wind, and the cold of the ice. I am the Freljord." }];


// Set React component
class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    // Set state for future use
    this.state = {
      // Get a random number here to use it as index (dont know how to use quotes.lenght here so it's hard coded)
      randomIndex: Math.floor(Math.random() * 5) };


    // Need to bind HandleClick to make it work
    this.handleClick = this.handleClick.bind(this);
  }

  // Render when component mount a random quote based on the randomIndex from this.state
  componentDidMount() {
    // Converts the string to create a twitter url
    let twitterUrl = encodeURI(`https://twitter.com/intent/tweet?text=${quotes[this.state.randomIndex].text} - ${quotes[this.state.randomIndex].author}`);
    // Creates author, text and url on this.state
    this.setState({
      author: `- ${quotes[this.state.randomIndex].author}`,
      text: quotes[this.state.randomIndex].text,
      twitterURL: twitterUrl });
  }

  // Render new quotes at every click on New quote
  handleClick() {
    // Get a new random index sometimes it will be the same as last one but the odds are low as more quotes are added
    const getRandomIndex = Math.floor(Math.random() * quotes.length);
    // Converts the string to create a twitter url
    let twitterUrl = encodeURI(`https://twitter.com/intent/tweet?text=${quotes[getRandomIndex].text} - ${quotes[getRandomIndex].author}`);
    // Updates the state based on the new random index
    this.setState({
      author: `- ${quotes[getRandomIndex].author}`,
      text: quotes[getRandomIndex].text,
      randomIndex: getRandomIndex,
      twitterURL: twitterUrl });

  }

  // Content to render
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box", class: "container rounded px-5 py-4 bg-light" }, /*#__PURE__*/
      React.createElement("p", { id: "text", class: "col text-center lead" }, /*#__PURE__*/React.createElement("strong", null, this.state.text)), /*#__PURE__*/
      React.createElement("p", { id: "author", class: "col text-end lead" }, this.state.author), /*#__PURE__*/
      React.createElement("div", { class: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("a", { href: this.state.twitterURL, id: "tweet-quote" }, /*#__PURE__*/React.createElement("button", { type: "button", class: "text btn btn-primary" }, /*#__PURE__*/React.createElement("i", { class: "bi bi-twitter" }))), /*#__PURE__*/
      React.createElement("button", { type: "button", id: "new-quote", onClick: this.handleClick, class: "text btn btn-primary" }, "New quote"))));



  }}
;

// Render content on div id="root"
root.render( /*#__PURE__*/React.createElement(QuoteBox, null));