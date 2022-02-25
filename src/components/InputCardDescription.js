import React from 'react';
import PropTypes from 'prop-types';

class InputCardDescription extends React.Component {
  render() {
    const { valor, quandoMudar } = this.props;
    return (
      <label htmlFor="cardDescription">
        Descrição
        <input
          data-testid="description-input"
          type="textarea"
          name="cardDescription"
          id="insertCardDescription"
          value={ valor }
          onChange={ quandoMudar }
        />
      </label>
    );
  }
}
InputCardDescription.propTypes = {
  valor: PropTypes.string.isRequired,
  quandoMudar: PropTypes.func.isRequired,
};

export default InputCardDescription;
