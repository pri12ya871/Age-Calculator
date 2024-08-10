import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;
    
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge();
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dob">Enter your date of birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <button type="submit">Calculate Age</button>
      </form>
      {age && (
        <div className="result">
          <h2>Your Age:</h2>
          <p>{age.years} years, {age.months} months, {age.days} days</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;