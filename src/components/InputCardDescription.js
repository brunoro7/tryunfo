import React from 'react';

class InputCardDescription extends React.Component {
  render() {
    return (
      <label htmlFor="cardDescription">
        Descrição
        <input
          data-testid="description-input"
          type="textarea"
          name="cardDescription"
          id="insertCardDescription"
        />
      </label>
    );
  }
}

export default InputCardDescription;
