import React, { useState, useEffect } from 'react';

function RandomQuote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div>
      <h1>Random Quote</h1>
      <blockquote>
        <p>{quote}</p>
        <footer>{author}</footer>
      </blockquote>
    </div>
  );
}

export default RandomQuote;
