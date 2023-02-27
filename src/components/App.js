import video from "../data/video.js";
import Header from "./Header";

function App() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Header 
        data={video}
      />
    </div>
  );
}

export default App;
