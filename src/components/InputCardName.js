import React from 'react';
import PropTypes from 'prop-types';

class InputCardName extends React.Component {
  render() {
    const { valor, quandoMudar } = this.props;
    return (
      <label htmlFor="cardName">
        Nome
        <input
          data-testid="name-input"
          type="text"
          name="cardName"
          id="insertCardName"
          value={ valor }
          onChange={ quandoMudar }
        />
      </label>
    );
  }
}
InputCardName.propTypes = {
  valor: PropTypes.string.isRequired,
  quandoMudar: PropTypes.func.isRequired,
};

export default InputCardName;
