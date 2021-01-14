import React, {Component} from 'react';
import axios from 'axios';

import MainVideo from './components/MainVideo';

import './style/App.css';

class App extends Component {
  state = {
    mainVideo: {},
    sideVideo: [],
  };

  componentDidMount() {
    this.getMainVideoData('1af0jruup5gu');
    this.getVideoListData();
  }

  getMainVideoData = (id) => {
      axios.get(`http://localhost:8080/videos/${id}`)
      .then((response) => {
        const data = response.data[0];
        this.setState({
            mainVideo: data,
        });
      })
      .catch((error) => console.log(error));
  }

  getVideoListData() {
      axios.get(`http://localhost:8080/videos/`)
      .then((response) => {
        const {data} = response;
        this.setState({
            sideVideo: data,
        });
      })
  }

  componentDidUpdate(prevProps, prevState) {
    const {params} = this.props.match;

    if(!params.id && prevState.mainVideo.id !== '1af0jruup5gu') {
      this.getMainVideoData('1af0jruup5gu');
    }
    else if(params.id && prevState.mainVideo.id !== params.id) {
      this.getMainVideoData(params.id);
    }
  }

  render() {
    return (
      <div className="app">
        {/* <Header /> */}
        <MainVideo 
          getMainVideoData = {this.getMainVideoData}
          mainVideo={this.state.mainVideo} 
          sideVideo={this.state.sideVideo}
          activeVideo={this.state.mainVideo.id}
        />
      </div>
    );
  }
}

export default App;
