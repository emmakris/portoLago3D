import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import '@google/model-viewer'

function App() {
  const modelRef = useRef()
    
      return (
        <div>
        <model-viewer
    src="/models/St_Nicholas.gltf"
    ios-src=""
    style = {{width:'100dvw',height:'100dvh',backgroundColor:'#333333'}}
    alt="St Nicholas PortoLago"
    shadow-intensity="1"
    enviroment-image = 'legacy'
    exposure="0.45"
    camera-controls
    auto-rotate
    ar
  >
    <div style={{fontSize:40,color:'white'}}>Saint Nicholas</div>
  </model-viewer>
        </div>
  );
}

export default App;
