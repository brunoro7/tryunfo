import React from 'react';

class InputCardImage extends React.Component {
  render() {
    return (
      <label htmlFor="cardImage">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="cardImage"
          id="insertCardImage"
        />
      </label>
    );
  }
}

export default InputCardImage;
