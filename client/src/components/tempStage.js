import Graph from '../graphs/graph1';
import React from 'react';
import parse from '../parsing/parser';
import { CssBaseline } from '@material-ui/core'
import { Button } from '@material-ui/core';
import About from './about';

export default function TempStage(props) {

    const [text, setText] = React.useState();
    const [graphData, setGraphData] = React.useState({ 'nodes': [], 'links': [] });

    const width = window.innerWidth / 3;
    const height = window.innerHeight / 1.5;

    function submitData() {
        console.log('submitting: ', text);
        const tempData = parse(text);
        console.log(tempData);
        setGraphData(tempData);
    }

    document.onkeydown = (event) => {
        if (event.ctrlKey && event.key === 'Enter') {
            submitData();
        }
    }



    if (graphData.nodes.length > 0) {
        console.log('in graph render')
        return (
            <CssBaseline>
                <div style={{ padding: '2vh', backgroundColor: '#404040', height: '100vh' }}>

                    <About />
                    <textarea placeholder="add text" onChange={(e) => setText(e.target.value)} value={text}
                        style={{
                            padding: '1vh', backgroundColor: 'white', display: 'flex', border: 'none', outline: 'none', cursor: 'initial', overflowY: 'hidden',
                            overflowX: 'hidden', borderColor: 'white', resize: 'none', textAlign: 'left', width: width, height: height, zIndex: 1,
                            borderRadius: 3, position: 'absolute', justifyContent: 'center', alignItems: 'center', marginTop: '5vh'
                        }}
                    />

                    <Graph graphData={graphData} />
                </div>
            </CssBaseline>
        );
    }

    else {

        return (
            <CssBaseline>
                <div style={{ padding: '2vh', backgroundColor: '#404040', height: '100vh' }}>
                    <About />
                    <textarea placeholder="add text" onChange={(e) => setText(e.target.value)} value={text}
                        style={{
                            padding: '1vh', backgroundColor: 'white', display: 'flex', border: 'none', outline: 'none', cursor: 'initial', overflowY: 'hidden',
                            overflowX: 'hidden', borderColor: 'white', resize: 'none', textAlign: 'left', width: width, height: height, zIndex: 1,
                            borderRadius: 3, position: 'absolute', justifyContent: 'center', alignItems: 'center',
                            marginTop: '5vh'
                        }} />
                </div>
            </CssBaseline>
        )
    }
}