import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';

import whiskeyPic from './whiskey.jpg';
import dukePic from './duke.jpg';
import perryPic from './perry.jpg';
import tubbyPic from './tubby.jpg';

function App() {
  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskeyPic,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: dukePic,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perryPic,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubbyPic,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

  return (
    <div className="App">
      <Nav dogs={dogs} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </div>
  );
}

export default App;
