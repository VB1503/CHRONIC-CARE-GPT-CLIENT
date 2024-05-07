import React from 'react';
import './Home.css'; // Import CSS for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="section">
        <h2 className='welcome-text'>Welcome To ChronicCare Chatbot !</h2>
        <div className='tsd-img-cont'>
        <img src="https://res.cloudinary.com/dkcjexntj/image/upload/v1712380912/COPD_logo_neru3u.png" alt="Twitter Spam Detection" className='tsd-img' />
        </div>
        <div className="content">
          <h3 className='cont-head'>Methodology</h3>
          <p className='content-text'>
          Predicting Chronic Obstructive Pulmonary Disease (COPD) involves collecting patient data including demographics, medical history, and respiratory symptoms. This data undergoes preprocessing, feature selection, and engineering. Machine learning models like logistic regression, decision trees, or artificial neural networks are trained and evaluated using metrics like accuracy and AUC-ROC. Hyperparameter tuning optimizes model performance, followed by validation on a separate test set. Successful models are deployed in clinical settings, continuously monitored, and improved based on feedback, aiming to aid in early diagnosis and effective management of COPD
          </p>
          <h2 className='cont-head'>How It Works</h2>
<p className='content-text'>A chatbot for Chronic Obstructive Pulmonary Disease (COPD) functions as a virtual assistant designed to assist users in various aspects related to COPD management. Utilizing natural language understanding (NLU) techniques, the chatbot interacts with users, gathering relevant information about their symptoms, medical history, and lifestyle habits. This data enables the chatbot to assess the user's risk of developing COPD and provide personalized educational content on COPD symptoms, risk factors, and available treatments. Additionally, the chatbot offers support for self-management, including guidance on lifestyle modifications, medication adherence, and pulmonary rehabilitation exercises. It also facilitates symptom monitoring, allowing users to track changes in symptom severity over time. Furthermore, the chatbot may assist users in accessing healthcare services by providing referrals to healthcare professionals or scheduling appointments. Through continuous learning from user interactions and feedback, the chatbot evolves its capabilities, aiming to provide tailored support and enhance user engagement in COPD management.</p>

        </div>
      </div>
      <div className="section">
        <div className='tsd-img-cont'>
        <img src="https://res.cloudinary.com/dybwn1q6h/image/upload/v1714102048/Heatmap_tvrmtp.png" alt="Sentiment Analysis" className='tsd-img'/>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
