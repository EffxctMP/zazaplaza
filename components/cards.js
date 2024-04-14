import PropTypes from 'prop-types';
import { Card, Cards } from 'fumadocs-ui/components/card';


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

export const Cards = ({ children }) => {
  return (
    <div className="cards-container">
      {children}
    </div>
  );
};

Cards.propTypes = {
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


<MDX
  components={{
    Card: (props) => <Card {...props} />,
    Cards: (props) => <Cards {...props} />,
  }}
/>