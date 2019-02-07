import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import Typography from "@material-ui/core/Typography";
//import './video.css';


const styles = {
    heading: {
      "padding-left": "3%",
      "padding-top": "0.2%",
      // 'margin-bottom': '-1%',
      //color: "rgba(0, 0, 0, 0.74)",
      "font-size": "1.89rem",
      "font-weight": "440",
      color: "rgb(0, 148, 148)"
    },
    root: {
      "margin-bottom": "-2%"
    },
    subheading: {
      "margin-top": "-1%",
      "margin-bottom": "-1%",
      "padding-left": "3%",
      "padding-right": "3%",
      color: "rgba(0, 0, 0, 0.69)",
      "font-weight": "400",
      "line-height": "1.36667em"
    }
  };
  const stylestheme = theme => ({
    fab: {
      "margin-bottom": "-8%",
      "font-size": "25px",
      "text-transform": "capitalize",
      "border-radius": "25px",
      "background-color": "#23a250c2",
      // color: 'white',
      // backgroundColor: green[500],
      color: theme.palette.common.white,
      "@media (max-width:600px)": {
        marginLeft: "150px",
        "background-color": "#23a250c2",
        // color: 'white',
        // backgroundColor: green[500],
        color: theme.palette.common.white,
        "text-transform": "capitalize"
        //"border-radius": "10px",
      },
      "@media (max-width:320px)": {
        marginLeft: "100px",
        // "font-size": "15px",
        "text-transform": "capitalize"
        //"border-radius": "10px",
      }
    },
  });
  
class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log("state value is " + this.state.value);
    
        var searchValue = this.movieName.value;
        console.log("ref value is "+ searchValue)
    
        event.preventDefault();
      }
    
    
  render() {
    return (
        <div >
     <Paper style={styles.root} elevation={0}>
          <Grid container spacing={0} alignItems="center" direction="row">
            <Grid item xs={3}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={300}height={300}
          playing />
            </Grid>

            

          </Grid>
        </Paper>
   
      </div>
     
    );
  }
}
export default withStyles(stylestheme, { withTheme: true })(SearchScreen);