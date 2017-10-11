import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';

import HeaderSection from './layouts/Header';
import Main from './layouts/Main'; 
import {Layout} from 'antd';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <HeaderSection />
          <Main />
        </Layout>        
      </div>
    );
  }
}

export default App;
