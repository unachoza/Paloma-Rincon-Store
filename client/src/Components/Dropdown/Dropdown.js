import React from 'react';
import './Dropdown.css'

const Dropdown = () => {
  return (
    <div class="dropdown" style={{ border: '1px solid red'}}>
          <svg
            aria-hidden="true"
            focusable="false"
            class="down-arrow"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M441.9 250.1l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L250 385.4V44c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v341.4L42.9 230.3c-4.7-4.7-12.3-4.7-17 0L6.1 250.1c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
            ></path>
          </svg>
          <select name="" id="">
            <option value="product">Product</option>
            <option value="all">All</option>
          </select>
        </div>
  )
}
export default Dropdown