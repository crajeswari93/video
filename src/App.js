import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import VideoPlayer from './VideoPlayer';
import SearchScreen from "./SearchScreen";
//import Search from './Search';

const styles = {
  root: {
    marginTop: "5%",
    "margin-bottom": "-2%",
    marginLeft: "5%"
    //paddingRight:"3%",
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Paper style={styles.root} elevation={0}>
          <Grid container spacing={40} alignItems="center" direction="row">
            {/* <Grid item xs={6} sm={6}>
                 
                 <Search/>
              
              
                          </Grid> */}
            {/* <Grid item xs={3} sm={3}>
                 
   <VideoPlayer/>


            </Grid> */}
            <Grid item xs={3} sm={3}>
              <SearchScreen />
            </Grid>
            <Grid item xs={3} sm={3}>
              <SearchScreen />
            </Grid>
            <Grid item xs={3} sm={3}>
              <SearchScreen />
            </Grid>
            <br />

            <br />
            <br />
            {/* <Grid item xs={12} sm={6}>
            <SearchScreen/>
            </Grid> */}
          </Grid>
          <Grid container spacing={40} alignItems="center" direction="row">
            {/* <Grid item xs={6} sm={6}>
                 
                 <Search/>
              
              
                          </Grid> */}
            {/* <Grid item xs={3} sm={3}>
                 
   <VideoPlayer/>


            </Grid> */}
            <Grid item xs={3} sm={3}>
              <SearchScreen />
            </Grid>
            <Grid item xs={3} sm={3}>
              <SearchScreen />
            </Grid>
            <Grid item xs={3} sm={3}>
              <SearchScreen />
            </Grid>
          </Grid>
        </Paper>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a/>/
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;