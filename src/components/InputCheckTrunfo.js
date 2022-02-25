import React from 'react';
import PropTypes from 'prop-types';

class InputCheckTrunfo extends React.Component {
  render() {
    const { valor, quandoMudar } = this.props;
    return (
      <label htmlFor="cardTrunfo">
        Super Trybe Trunfo
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          id="definedCardTrunfo"
          checked={ valor }
          onChange={ quandoMudar }
        />
      </label>
    );
  }
}
InputCheckTrunfo.propTypes = {
  valor: PropTypes.bool.isRequired,
  quandoMudar: PropTypes.func.isRequired,
};

export default InputCheckTrunfo;
