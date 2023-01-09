import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialText: `# This is a React Markdown Previewer made by Aluisio Pereira using React!
      
You can check my GitHub [here.](https://github.com/Oaluiser)

## This is a example of a Sub Heading.

Heres some inline code, \`<div></div>\`.

\`\`\`
// this is multi-line code:
const portfolioLink = "https://github.com/Oaluiser/Portfolio"
if (interest === true) {
  return portfolioLink
}
\`\`\`

- This is a list example.
  - With bullets.
     - One more indentation level.
        
> This is a Block Quote.

And this is... **me!**.

![Aluisio Pereira](https://avatars.githubusercontent.com/u/109995434?s=400&u=17829bbd2634ff1093a1e8ac69523fcd9ab5f8b0&v=4)` };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.getElementById('editor').innerHTML = this.state.initialText;
    document.getElementById('preview').innerHTML = marked.parse(this.state.initialText);
  }

  handleChange(event) {
    document.getElementById('preview').innerHTML =
    marked.parse(event.target.value);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "container", class: "container" }, /*#__PURE__*/
      React.createElement("textarea", { id: "editor", onChange: this.handleChange, class: "form-control mb-5 mt-2" }), /*#__PURE__*/
      React.createElement("div", { id: "preview" })));


  }}
;


root.render( /*#__PURE__*/React.createElement(Previewer, null));