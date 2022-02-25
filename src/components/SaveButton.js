import React from 'react';
import PropTypes from 'prop-types';

class SaveButton extends React.Component {
  render() {
    const { valor, quandoMudar } = this.props;
    return (
      <button
        data-testid="save-button"
        type="submit"
        id="btnSaveCard"
        disabled={ valor }
        onClick={ quandoMudar }
      >
        Salvar
      </button>
    );
  }
}
SaveButton.propTypes = {
  valor: PropTypes.bool.isRequired,
  quandoMudar: PropTypes.func.isRequired,
};

export default SaveButton;
