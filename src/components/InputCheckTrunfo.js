import React from 'react';

class InputCheckTrunfo extends React.Component {
  render() {
    return (
      <label htmlFor="cardTrunfo">
        Super Trybe Trunfo
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          id="definedCardTrunfo"
        />
      </label>
    );
  }
}

export default InputCheckTrunfo;
