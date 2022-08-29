import React from "react";
import flv from 'flv.js';


class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  
  componentDidMount() {
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }
  
  componentWillUnmount() {
    this.flvPlayer.destroy(); // 화면을 벗어나면 streaming 다운로드를 그만둔다.
  }

  buildPlayer() {

    this.flvPlayer = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${this.props.streamKey}.flv`
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }
  
  render() {
    console.log(this.videoRef)

    return (
      <>
        <video ref={this.videoRef} style={{ width: "100%" }} controls autoPlay/>
      </>
    )
  }
}

export default StreamShow;
