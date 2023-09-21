import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function BusinessCard() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className='business-card-container'>
      <div className="grid-business-card-container">
        <div
          className={
            darkMode
              ? "dark-container text-business-card-container"
              : "light-container text-business-card-container"
          }
        ></div>
        <div className="img-business-card-container">
          <img src="/logo/fox-remonty-logo-nobg.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
