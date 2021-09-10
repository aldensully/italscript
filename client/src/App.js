import { React, useEffect, useState, useRef } from 'react';
import MainStage from './components/stage';
import Graph from './graphs/graph1';
import TempStage from './components/tempStage';

function App() {

  const [text, setText] = useState()
  const [nodes, setNodes] = useState([])

  return (
    <div style={{ overflow: 'hidden' }}>
      <TempStage />
    </div>
  )

}




export default App;

