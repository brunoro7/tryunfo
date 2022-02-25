import React from 'react';
import PropTypes from 'prop-types';

class SelectCardRare extends React.Component {
  render() {
    const { valor, quandoMudar } = this.props;
    return (
      <label htmlFor="cardRare">
        Raridade
        <select
          data-testid="rare-input"
          type="select"
          name="cardRare"
          id="insertCardRare"
          value={ valor }
          onChange={ quandoMudar }
        >
          <option name="cardRare" value="normal">Normal</option>
          <option name="cardRare" value="raro">Raro</option>
          <option name="cardRare" value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}
SelectCardRare.propTypes = {
  valor: PropTypes.string.isRequired,
  quandoMudar: PropTypes.func.isRequired,
};

export default SelectCardRare;
