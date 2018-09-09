import React from 'react'
import { Component } from 'react'
import './App.css';
//import { resolve } from 'url';

class App extends Component {
  render() {
    return (
      <FileInput />
    );
  }
}

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - https://storage.googleapis.com/partner-aikon.appspot.com/partner-hadron-transferLearning-v1-deepspace.jpg`
    );
    run("https://storage.googleapis.com/partner-aikon.appspot.com/partner-hadron-transferLearning-v1-deepspace.jpg");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
const { ApiMarketClient } = require('@apimarket/apimarket')
const config = require("./apimarket_config.json");



const run = async (jsse) => { 
  try {
        //Config to apimarketClient and connect to ORE blockchain
        let apimarketClient = new ApiMarketClient(config);
        alert("Test");
        await apimarketClient.connect()

        //specify the api to call using it's unique name registered on the ORE blockchain
        const apiName = "cloud.hadron.imageRecognize"

        //call api - passing in the data it needs
        const params = {
            "imageurl": jsse
            }
        const response = await apimarketClient.fetch(apiName, params);
        alert(JSON.stringify(response, null, 2));
    } 
    catch(error) {
        console.error(error)
    }
}

export default App;