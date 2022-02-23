import React from 'react';

class InputAttr1 extends React.Component {
  render() {
    return (
      <label htmlFor="cardAttr1">
        Attr01
        <input
          data-testid="attr1-input"
          type="number"
          name="cardAttr1"
          id="insertCardAttr1"
        />
      </label>
    );
  }
}

export default InputAttr1;
