import React from 'react';
import './styles.scss';
import mixedbag from "../../resources/mixedbag.png"
const Loader = () => {
  return (
    <div className='loader-container'>
          <div className="loader-img">
              <img src={mixedbag} alt="" />
          </div>
    </div>
  )
}

export default Loader