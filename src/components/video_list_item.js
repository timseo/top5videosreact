import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  // const video = props.video; same as (props) up above but replace props with {video}

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  )
};

export default VideoListItem;