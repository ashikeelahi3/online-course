import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Data from './Data/data.json';
import Course from './components/Course/Course';

function App() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCourses(Data);
  });

  const addToCart = addedCourse => {

    if (cart.indexOf(addedCourse) === -1) {
      setCart([...cart, addedCourse]);
    } else {
      cart.splice(cart.indexOf(addedCourse), 1);
      setCart([...cart]);
    }
  }

  return (
    <div className="App">
      <NavBar cart={cart}/>
      <main className="main d-flex justify-content-center">
        {
          courses.map(course =>
            <Course
              course={course}
              addToCart={addToCart}
              key={course.id}
            />)
        }
      </main>
    </div>
  );
}

export default App;
