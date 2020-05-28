import React from 'react';
import './App.css';

import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import MyHeader from '../header/Header';
import MyFooter from '../footer/Footer';
import Items from '../items/Items';

function App() {
  return (
    <React.Fragment>
      <CssBaseLine/>
      <MyHeader/>
      <Container>
        <Items/>
      </Container>
      <MyFooter/>
    </React.Fragment>
  );
}

export default App;
