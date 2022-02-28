import React from 'react';
import PropTypes from 'prop-types';

class CardInBook extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="cardBookContent">
        <h2 className="cardBookTitle">
          { cardName }
        </h2>
        <img
          src={ cardImage }
          alt={ cardName }
          className="cardBookImage"
        />
        <p className="cardBookDescription">
          { cardDescription }
        </p>
        <p className="cardBookAttr1">
          { cardAttr1 }
        </p>
        <p className="cardBookAttr2">
          { cardAttr2 }
        </p>
        <p className="cardBookAttr3">
          { cardAttr3 }
        </p>
        <p className="cardBookRare">
          { cardRare }
        </p>
        <p className="cardBookTrunfo">
          { cardTrunfo }
        </p>
        <button type="button" className="cardBookDelete">
          delete
          {/* <img src="" alt="delete icon" /> */}
        </button>
      </div>
    );
  }
}

CardInBook.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default CardInBook;
