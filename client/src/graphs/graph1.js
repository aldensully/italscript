import ForceGraph2D from 'react-force-graph-2d'
import React from 'react'

export default function Graph(props) {
    const graphData = props.graphData
    const fgRef = React.useRef();
    const [selectedNode, setSelectedNode] = React.useState();
    const [coords, setCoords] = React.useState();


    //for keeping nodes in place unless they are the selected node
    function nodeHover(node) {
        setSelectedNode(node.id);
        console.log(fgRef.current.graph2screencoordinates);
    }
    // function choosyX(node){
    //     if (node.id !== selectedNode){
    //         return node.fx = node.x
    //     }
    // }    
    // function choosyY(node){
    //     if (node.id !== selectedNode){
    //         return node.fy = node.y
    //     }
    // }

    return (
        <div id='graph' style={{ marginLeft: '35%', height: '100vh' }}>

            <ForceGraph2D graphData={graphData}
                ref={fgRef}
                width={window.innerWidth / 2} height={window.innerHeight / 1.2}
                backgroundColor='inherit'
                nodeAutoColorBy="group"
                linkAutoColorBy='group'
                onNodeClick={(node) => nodeHover(node)}

                nodeCanvasObject={(node, ctx, globalScale) => {
                    // {choosyX(node)}
                    // {choosyY(node)}

                    const label = node.text;
                    const fontSize = 12 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    const textWidth = ctx.measureText(label).width;
                    const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 2); // some padding
                    ctx.fillStyle = 'rgba(255, 10, 170, 0.9)';
                    ctx.shadowColor = '#000000'
                    ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = node.color;
                    ctx.fillText(label, node.x, node.y);
                    node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
                }}
                nodePointerAreaPaint={(node, color, ctx) => {
                    ctx.fillStyle = color;
                    const bckgDimensions = node.__bckgDimensions;
                    bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
                }}
            >
            </ForceGraph2D>
        </div>
    )
}
