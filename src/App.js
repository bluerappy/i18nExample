import React, { Component } from 'react';
import {t} from './locales/i18n'
import './App.css';
import en from './locales/en.json';
import fr from './locales/fr.json';
import { setLocale } from './locales/i18n';

class App extends Component {
  state = {
    locale : "fr"
  }
  render() { 
    console.log("en",en)
    console.log("fr",fr)
    console.log(this.state.locale)
    return (
      <div className="App">
      <button onClick={() => this.setState({ locale : "en"})}>
        TRANSLATE
      </button>
        <p>
        {t('test.PEOPLE', {locale : this.state.locale})}
        </p>
      </div>
    );
  }
}

export default App;
