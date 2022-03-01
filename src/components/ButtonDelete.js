import React from 'react';

class ButtonDelete extends React.Component {
  render() {
    const { handleOnclickDelete } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-button"
        onClick={ handleOnclickDelete }
      >
        Excluir
      </button>
    );
  }
}

export default ButtonDelete;
