import React from 'react';

class SelectCardRare extends React.Component {
  render() {
    return (
      <label htmlFor="cardRare">
        Raridade
        <select
          data-testid="rare-input"
          type="select"
          name="cardRare"
          id="insertCardRare"
        >
          <option name="cardRare" value="normal">Normal</option>
          <option name="cardRare" value="raro">Raro</option>
          <option name="cardRare" value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

export default SelectCardRare;
