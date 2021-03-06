import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ButtonDelete from './components/ButtonDelete';
import InputSearch from './components/InputSearch';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      bookOfCards: [],
      valueInputSearch: '',
    };
  }

  onInputChange = (event) => {
    const { name, type } = event.target;
    const eventValue = (type === 'checkbox')
      ? event.target.checked : event.target.value;
    this.setState({
      [name]: eventValue,
    }, this.buttonValidation);
  };

  buttonValidation = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const arrayInputText = [cardName, cardDescription, cardImage, cardRare];
    const testArrayInputText = arrayInputText
      .every((inputText) => inputText !== '');

    const numberAttr1 = parseFloat(cardAttr1);
    const numberAttr2 = parseFloat(cardAttr2);
    const numberAttr3 = parseFloat(cardAttr3);
    const minValue = 0;
    const maxValue = 90;
    const sumMaxAttrValues = 210;
    const validatedSumMax = numberAttr1 + numberAttr2 + numberAttr3 <= sumMaxAttrValues;

    const arrayInputNumber = [numberAttr1, numberAttr2, numberAttr3];
    const testArrayInputNumber = arrayInputNumber
      .every((inputNumber) => inputNumber >= minValue && inputNumber <= maxValue);

    const validated = testArrayInputText && testArrayInputNumber && validatedSumMax;

    if (validated) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const cardBook = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((prevState) => ({
      bookOfCards: [...prevState.bookOfCards, cardBook],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    }), this.handleHasTrunfo);
  };

  handleHasTrunfo = () => {
    const { bookOfCards } = this.state;
    const testHasTrunfo = bookOfCards
      .some((cardInBook) => cardInBook.cardTrunfo === true);
    if (testHasTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  };

  handleOnclickDelete = (event) => {
    const { bookOfCards } = this.state;
    const cardInBookClicked = event.target.parentNode;

    const findElementForDelete = bookOfCards
      .filter((cardInBook) => (
        cardInBook.cardName !== cardInBookClicked.id
      ));
    this.setState({
      bookOfCards: findElementForDelete,
    }, this.handleHasTrunfo);

    // console.log(cardInBookClicked);
    // console.log(findElementForDelete);
  };

  handleOnInputSearch = (event) => {
    const valueOnInputSearch = event.target.value;
    this.setState({
      valueInputSearch: valueOnInputSearch,
    });
  };

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
      isSaveButtonDisabled,
      hasTrunfo,
      bookOfCards,
      valueInputSearch,
    } = this.state;

    return (
      <div className="bodyContent">
        <header className="headerContent">
          <h1>Tryunfo</h1>
        </header>
        <main className="mainContent">

          <section className="boxCreationCards">
            <section className="formSection">
              <Form
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                hasTrunfo={ hasTrunfo }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
                { ...this.state }
              />
            </section>
            <section className="cardSection">
              <h2>
                Pr??-Visualiza????o:
              </h2>

              <Card
                { ...this.state }
                className="boxCard"
              />
              {/* { // ajuda do Cassius turma C (atrav??s do emerson turma c), ideia de  fazer um spread no this.state } */}
            </section>
          </section>

          <section className="cardBookContent">
            <header>
              <h2 className="cardBookTitle">
                CardBook Tryunfo
              </h2>
              <InputSearch
                handleOnInputSearch={ this.handleOnInputSearch }
                value={ valueInputSearch }
              />
            </header>
            <div className="cardBookList">
              { bookOfCards.filter((card) => card.cardName.includes(valueInputSearch))
                .map((cardInBook) => (
                  <div id={ cardInBook.cardName } key={ cardInBook.cardName }>
                    <Card
                      className="cardInBoxContent"
                      cardInBook={ cardInBook }
                      key={ cardInBook.cardName }
                      cardName={ cardInBook.cardName }
                      cardDescription={ cardInBook.cardDescription }
                      cardAttr1={ cardInBook.cardAttr1 }
                      cardAttr2={ cardInBook.cardAttr2 }
                      cardAttr3={ cardInBook.cardAttr3 }
                      cardImage={ cardInBook.cardImage }
                      cardRare={ cardInBook.cardRare }
                      cardTrunfo={ cardInBook.cardTrunfo }
                    />
                    <ButtonDelete handleOnclickDelete={ this.handleOnclickDelete } />
                  </div>
                ))}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
