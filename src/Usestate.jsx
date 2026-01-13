import { useState } from 'react'
import './index.css'

function UseState() {

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("guest@example.com");
  const [occupation, setOccupation] = useState("N/A");

  const updateName = () => {
    setName("Adrian Tabiolo");
  }

  const increaseAge = () => {
    setAge(age + 1);
  }

  const decreaseAge = () => {
    if (age > 0) {
      setAge(age - 1);
    }
  }

  const updateEmail = () => {
    setEmail("qaotabiolo@tip.edu.ph");
  }

  const updateOccupation = () => {
    setOccupation("Student");
  }

  return (
    <div className="container">

      <p>Your name is: {name}</p>
      <button onClick={updateName}>Set Name</button>
    
      <hr />

      <p>Age: {age}</p>
      <button onClick={increaseAge}>Age Up</button>
      <button onClick={decreaseAge}>Age Down</button>

      <hr />

      <p>Email: {email}</p>
      <button onClick={updateEmail}>Set Email</button>

      <hr />

      <p>Occupation: {occupation}</p>
      <button onClick={updateOccupation}>Set Occupation</button>

      <hr />

      <p>Welcome, <strong>{name}</strong>. You are <strong>{age}</strong> years old, currently as a <strong>{occupation}</strong> and your email is <strong>{email}</strong>.</p>
    </div>
  );
}

export default UseState;
