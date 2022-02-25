import React from 'react';
import PropTypes from 'prop-types';

class InputAttr1 extends React.Component {
  render() {
    const { valor, quandoMudar } = this.props;
    return (
      <label htmlFor="cardAttr1">
        Attr01
        <input
          data-testid="attr1-input"
          type="number"
          name="cardAttr1"
          id="insertCardAttr1"
          value={ valor }
          onChange={ quandoMudar }
        />
      </label>
    );
  }
}
InputAttr1.propTypes = {
  valor: PropTypes.number.isRequired,
  quandoMudar: PropTypes.func.isRequired,
};

export default InputAttr1;
