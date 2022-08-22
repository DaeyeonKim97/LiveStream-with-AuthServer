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
    // 이미 보고 있는 streaming이 있거나, 혹은 streaming이 없는 경우 return 한다. (streaming 최초 진입시에만 createPlayer를 하는 것임)
    if (this.flvPlayer) {
      return;
    }

    this.flvPlayer = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/test.flv`
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }
  
  render() {
    console.log(this.videoRef)

    return (
      <>
        <video ref={this.videoRef} style={{ width: '100%' }} controls/>
      </>
    )
  }
}

export default StreamShow;