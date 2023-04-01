import React, { useState, useEffect, useRef } from 'react';
import './Quotes.css';

const Quote = () => {
  const [quotes, setQuotes] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    const getQuotes = async () => {
      setIsLoading(true);
      try {
        const apiKey = 'cTtH7vRYaZX/BWmnIQk7Xg==2EY7vtCk0ER4HQTo';
        fetch('https://api.api-ninjas.com/v1/quotes?category=', {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json',
        })
          .then((res) => res.json())
          .then((data) => {
            setQuotes(data[0]);
          });
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    getQuotes();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading || Number(quotes.length) === 0) return <div>Loading...</div>;

  return (
    <>
      <div className="quote-container">
        <h1>{quotes[0]}</h1>
        <p className="quote" ref={textRef}>
          {quotes.quote}
        </p>
        <p className="quote-author">
          --
          {quotes.author}
          --
        </p>
        <div />
      </div>
    </>
  );
};
export default Quote;
