import React from 'react';
import PropTypes from 'prop-types';

class InputCardImage extends React.Component {
  render() {
    const { valor, quandoMudar } = this.props;
    return (
      <label htmlFor="cardImage">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="cardImage"
          id="insertCardImage"
          value={ valor }
          onChange={ quandoMudar }
        />
      </label>
    );
  }
}
InputCardImage.propTypes = {
  valor: PropTypes.string.isRequired,
  quandoMudar: PropTypes.func.isRequired,
};

export default InputCardImage;
