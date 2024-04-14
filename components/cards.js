import PropTypes from 'prop-types';

export const Card = ({ href, title, description }) => {
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

export const LocalCards = ({ children }) => {
  return (
    <div className="cards-container">
      {children}
    </div>
  );
};

LocalCards.propTypes = {
  children: PropTypes.node.isRequired,
};

export function StyledCard({ href, title, description }) {
  const cardStyle = {
    backgroundColor: '#f8f9fa',
    border: '1px solid #e9ecef',
    borderRadius: '0.25rem',
    padding: '1rem',
    margin: '1rem',
  };

  return (
    <a href={href} style={cardStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
};

StyledCard.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};