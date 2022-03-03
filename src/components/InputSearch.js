import React from 'react';
import PropTypes from 'prop-types';

class InputSearch extends React.Component {
  render() {
    const { handleOnInputSearch, value } = this.props;
    return (
      <label htmlFor="inputSearch">
        Pesquise pela carta:
        {' '}
        <input
          data-testid="name-filter"
          type="text"
          name="inputSearch"
          onChange={ handleOnInputSearch }
          value={ value }
        />
      </label>
    );
  }
}

InputSearch.propTypes = {
  handleOnInputSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputSearch;
