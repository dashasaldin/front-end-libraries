import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [quote, setQuote] = useState(null);

  useEffect(()=> {
    if(!quote) {
      getQuote();
    }
  }, [quote]);

  const getQuote = async () => {
    const json = await fetch("https://api.quotable.io/random");
    const result = await json.json();
    setQuote(result);
  }

  return (
    <div className="quote-page-container"> 
      <div id="quote-box">
        {quote && (
          <>
      <div id="text">
        <i class="fa fa-quote-left"> </i>
        <span className="quote-text">{quote.content}</span>
      </div>
      <div id="author">
        {quote.author}
      </div></>)}
        <div className="buttons">
          <a className="button" id="tweet-quote" href="https://twitter.com/intent/tweet" >
            <i className="fa fa-twitter"></i>
          </a>
          <a className="button" onClick={getQuote} href="#" id="new-quote">New quote</a>
        </div>
      </div>
    </div>
  );
}

export default App;
