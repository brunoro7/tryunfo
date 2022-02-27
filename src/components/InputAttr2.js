import React from 'react';
import PropTypes from 'prop-types';

class InputAttr2 extends React.Component {
  render() {
    const { valor, quandoMudar } = this.props;
    return (
      <label htmlFor="cardAttr2">
        Attr02
        <input
          data-testid="attr2-input"
          type="number"
          name="cardAttr2"
          id="insertCardAttr2"
          value={ valor }
          onChange={ quandoMudar }
        />
      </label>
    );
  }
}
InputAttr2.propTypes = {
  valor: PropTypes.string.isRequired,
  quandoMudar: PropTypes.func.isRequired,
};

export default InputAttr2;
