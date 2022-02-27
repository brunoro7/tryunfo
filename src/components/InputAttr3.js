import React from 'react';
import PropTypes from 'prop-types';

class InputAttr3 extends React.Component {
  render() {
    const { valor, quandoMudar } = this.props;
    return (
      <label htmlFor="cardAttr3">
        Attr03
        <input
          data-testid="attr3-input"
          type="number"
          name="cardAttr3"
          id="insertCardAttr3"
          value={ valor }
          onChange={ quandoMudar }
        />
      </label>
    );
  }
}
InputAttr3.propTypes = {
  valor: PropTypes.string.isRequired,
  quandoMudar: PropTypes.func.isRequired,
};

export default InputAttr3;
