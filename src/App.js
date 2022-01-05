import { useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(true);

  function checkIsPalindrome(str) {
    const midpoint = Math.floor(str.length / 2);
    console.log(midpoint);
    for (let i = 0; i < midpoint; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }

  const handleChange =
  event => {
    setInputText(event.target.value);
    setIsPalindrome(checkIsPalindrome(event.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" id="input-text-id" name="input-text" size="25" value={inputText} onChange={handleChange}></input>
        <p>Input length is {inputText.length}</p>
        <p>Palindrome? {isPalindrome.toString()}</p>
      </header>
    </div>
  );
}

export default App;
