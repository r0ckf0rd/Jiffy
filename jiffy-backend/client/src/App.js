import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      title: "",
      gif: "",
      loading: true
    };

    this.getGif = this.getGif.bind(this);
  }  

  getGif() {
    this.setState({loading: true}, () => {
      fetch('/gifs')
        .then(res => res.json())
        .then(gif => this.setState({ gif: gif.data.image_url, title: gif.data.title }, 
          () => this.setState({loading: false})))
        .catch(err => console.log(err));
    })
  }

  componentDidMount() {
    this.getGif();
  }

  render() {
    let content;

    if (this.state.loading === true) {
      content = 
        <section className="Gif-Section">
        </section>
    } else {
      content = 
        <section className="Gif-Section">
          <h3>{this.state.title}</h3>
          <img src={this.state.gif} alt="your random gif!" />
          <button className="get-gif" onClick={this.getGif}> Next! </button>
        </section>
    }

    return(
      <div className="App">
        <header className="App-header">
          <h1>  Your Amazing Gif! </h1>
        </header>
        {content}
      </div>
    );
  }
}

export default App;
