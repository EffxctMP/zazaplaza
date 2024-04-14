import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({ children }) => {
  return (
    <div className="cards-container">
      {children}
    </div>
  );
};

Cards.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cards;


import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ href, title, description }) => {
  return (
    <a href={href} className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
};

Card.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};