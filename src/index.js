// create new component this component will produce html content
//
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB0wN-mO98xAS2vndtxPCQ3lht-9WXBuyM';

// tims practice  div element is jsx
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('rich chigga g yamazawa');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // above line equals ({videos: videos }) where second videos is equivalent to 'data' if function (video ) was 'data'
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
        <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
    );
  }

}

// take this components generated html and put it on page in DOM
ReactDOM.render(<App />, document.querySelector('.container'))
