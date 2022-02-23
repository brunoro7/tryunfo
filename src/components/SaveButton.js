import React from 'react';

class SaveButton extends React.Component {
  render() {
    return (
      <button
        data-testid="save-button"
        type="submit"
        id="btnSaveCard"
      >
        Salvar
      </button>
    );
  }
}

export default SaveButton;
