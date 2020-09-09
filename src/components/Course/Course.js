import React, { useState } from 'react';
import '../../Data/bootstrap.min.css';
import './Course.css';
import { Image } from 'react-bootstrap';

const Course = (props) => {
  const { courseImg, courseName, instructor, price } = props.course;
  const [btnText, setBtnText] = useState('Check out');

  // a function for updating button's text
  const changeBtnText = () => (btnText === 'Check out') ? setBtnText('Cancel') : setBtnText('Check out');
  
  return (
    <div className="Course bg-light m-2 p-2">
      <div>
        <Image src={courseImg} className="img m-2" rounded />
      </div>
      <div>
        <h2>{courseName}</h2>
        <p>Instructor: {instructor}</p>
        <p><small>${price}</small></p>
      </div>
      <div
        className="btn btn-success"
        onClick={() => {
          props.addToCart(props.course)
          changeBtnText();
        }}
      >
          {btnText}
        </div>
    </div>
  );
};

export default Course;