import React from 'react';
import PropTypes from 'prop-types';

import InputCardDescription from './InputCardDescription';
import InputCardName from './InputCardName';
import InputAttr1 from './InputAttr1';
import InputAttr2 from './InputAttr2';
import InputAttr3 from './InputAttr3';
import InputCardImage from './InputCardImage';
import SelectCardRare from './SelectCardRare';
import InputCheckTrunfo from './InputCheckTrunfo';
import SaveButton from './SaveButton';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <form onSubmit={ onSaveButtonClick }>
        <InputCardName
          valor={ cardName }
          quandoMudar={ onInputChange }
        />
        <InputCardDescription
          valor={ cardDescription }
          quandoMudar={ onInputChange }
        />
        <InputAttr1
          valor={ cardAttr1 }
          quandoMudar={ onInputChange }
        />
        <InputAttr2
          valor={ cardAttr2 }
          quandoMudar={ onInputChange }
        />
        <InputAttr3
          valor={ cardAttr3 }
          quandoMudar={ onInputChange }
        />
        <InputCardImage
          valor={ cardImage }
          quandoMudar={ onInputChange }
        />
        <SelectCardRare
          valor={ cardRare }
          quandoMudar={ onInputChange }
        />
        <InputCheckTrunfo
          valor={ cardTrunfo }
          quandoMudar={ onInputChange }
        />
        <SaveButton
          valor={ isSaveButtonDisabled }
          quandoMudar={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
