import React from 'react';

class InputAttr3 extends React.Component {
  render() {
    return (
      <label htmlFor="cardAttr3">
        Attr03
        <input
          data-testid="attr3-input"
          type="number"
          name="cardAttr3"
          id="insertCardAttr3"
        />
      </label>
    );
  }
}

export default InputAttr3;
