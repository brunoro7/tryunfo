import React from 'react';

class InputCardName extends React.Component {
  render() {
    return (
      <label htmlFor="cardName">
        Nome
        <input
          data-testid="name-input"
          type="text"
          name="cardName"
          id="insertCardName"
        />
      </label>
    );
  }
}

export default InputCardName;
