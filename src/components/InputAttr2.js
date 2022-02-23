import React from 'react';

class InputAttr2 extends React.Component {
  render() {
    return (
      <label htmlFor="cardAttr2">
        Attr02
        <input
          data-testid="attr2-input"
          type="number"
          name="cardAttr2"
          id="insertCardAttr2"
        />
      </label>
    );
  }
}

export default InputAttr2;
