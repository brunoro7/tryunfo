import React from 'react';
import PropTypes from 'prop-types';

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

ButtonDelete.propTypes = {
  handleOnclickDelete: PropTypes.func.isRequired,
};

export default ButtonDelete;
