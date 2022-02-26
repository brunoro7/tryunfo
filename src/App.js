import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = (event) => {
    const { name, type } = event.target;
    const eventValue = (type === 'checkbox')
      ? event.target.checked : event.target.value;
    this.setState({
      [name]: eventValue,
    });

    // isSaveButtonDisabled = () => ();
  };

  // onSaveButtonDisabled = () => ();

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
      onSaveButtonClick,
      hasTrunfo,
    } = this.state;
    return (
      <body className="bodyContent">

        <header className="headerContent">
          <h1>Tryunfo</h1>
        </header>

        <main className="mainContent">

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
              onInputChange={ this.onInputChange }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ onSaveButtonClick }
            />
          </section>

          <section className="cardSection">

            <h2>
              Pré-Visualização:
            </h2>

            <div>
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
            </div>

          </section>

        </main>

      </body>
    );
  }
}

export default App;
