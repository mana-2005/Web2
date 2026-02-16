import React from "react";
import "./App.css";

function App() {
  const student = {
    name: "Bhoomi Pawar",
    course: "Engineering (Computer Science)",
    goal: "Software Developer in MNC",
    skills: ["Python", "Java", "HTML"],
    hobbies: ["Cooking", "Learning Programming", "Listening to Music"]
  };

  return (
    <div className="container">
      <h1>My Information</h1>
      
      <div className="card">
        <h2>Name: {student.name}</h2>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Career Goal:</strong> {student.goal}</p>

        <h3>Skills:</h3>
        <ul>
          {student.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h3>Hobbies:</h3>
        <ul>
          {student.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
