import styles from "./styles.module.css"
import React from 'react';
import {Header, Content, Footer} from "./components"

class App extends React.Component {

  render(): React.ReactNode {
      return (
        <>
          <Header/>
          <Content/>
          <Footer/>
        </>
      )
  }
}

export default App;