import React from 'react';

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
    return (
      <form>
        <InputCardName />
        <InputCardDescription />
        <InputAttr1 />
        <InputAttr2 />
        <InputAttr3 />
        <InputCardImage />
        <SelectCardRare />
        <InputCheckTrunfo />
        <SaveButton />
      </form>
    );
  }
}

export default Form;
