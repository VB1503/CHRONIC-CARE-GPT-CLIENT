import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chatbot.css'; // Import your CSS file for styling

const Chatbot = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
 
  return (
    <div className="chatbot-container relative">
      <div className="chatbot-header ">
        <div className='logo-section'>
          <img src='https://img.icons8.com/?size=96&id=4GhGzHg3nZeG&format=png'></img>
          <Link to='/'>ChronicCare GPT</Link>
        </div>
        <h1>Welcome to ChronicCare GPT</h1>
      </div>
     

      <div className='req-cont z-[-1]'>
        <iframe
    allow="microphone;"
    width="100%"
    height="660px"
    
    src="https://console.dialogflow.com/api-client/demo/embedded/3258a31c-98c1-4996-a523-b06a523117e4">
</iframe>
      </div>
    </div>
  );
};

export default Chatbot;
