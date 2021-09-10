import React from 'react'
import { Group,Stage, Layer, Rect, Circle,Text } from 'react-konva';
import { Html } from 'react-konva-utils';
import Konva from 'konva';
import Draggable from 'react-draggable';
import {CssBaseline} from '@material-ui/core'
import { UIStore } from './store';
import { Button } from '@material-ui/core';
import { display } from '@material-ui/system';
import Node from './node';
import selectedNodeObj from './selectedNode';


export default function MainStage(props){
        
    const [nodes,setNodes] = React.useState([])
    const [clickAway,setClickAway] = React.useState(false)
    const stageRef = React.useRef();



    function createId(){
        return Math.floor(Math.random() * 10000)
    }



    //add the first node
    function firstNode(){
        selectedNodeObj.setX(window.innerWidth/2)
        selectedNodeObj.setY(window.innerHeight/2)
        setNodes([{id:createId(),text:"",x:window.innerWidth/2,y:window.innerHeight/2}])
    }
    
    function addNode(event){
        
        console.log('in')
        //check if mouse click event first
        if(MouseEvent){
            var tempNode = document.createElement('div');
            tempNode.style.width = 200;
            tempNode.style.height = 100;

            document.body.appendChild(tempNode)
        }

        //otherwise it was a key event
        try{
            switch (event.key) {
                case "ArrowDown":
                    //add node to state node array
                    setNodes(
                        nodes.concat([
                            {id:createId(),text:"",
                            x:selectedNodeObj.xval,
                            y:selectedNodeObj.yval + 250
                            }
                        ]))

                    //update the state of the currently selected node
                    selectedNodeObj.setY(selectedNodeObj.yval + 250)

                    break;
                case "ArrowLeft":
                    setNodes(
                        nodes.concat([
                            {id:createId(),text:"",
                            x:selectedNodeObj.xval - 300,
                            y:selectedNodeObj.yval 
                            }
                        ]))
                    selectedNodeObj.setX(selectedNodeObj.xval - 150)
                    break;
                case "ArrowUp":
                    setNodes(
                        nodes.concat([
                            {id:createId(),text:"",
                            x:selectedNodeObj.xval,
                            y:selectedNodeObj.yval - 200 
                            }
                        ]))
                    selectedNodeObj.setY(selectedNodeObj.yval - 200)
                    break;
                case "ArrowRight":
                    setNodes(
                        nodes.concat([
                            {id:createId(),text:"",
                            x:selectedNodeObj.xval + 150,
                            y:selectedNodeObj.yval 
                            }
                        ]))
                    selectedNodeObj.setX(selectedNodeObj.xval + 150)
                    break;
                
                default:
                    break;
            }
            
        }
        catch(e){
            console.log(e)

        }
        
    }
    
    document.onkeydown = (event) =>{
        //if alt and arrow key(shortcut for adding node)
        if(event.altKey && event.key){
            addNode(event)
        }
        switch (event) {
            case event.altKey && event.key:
                addNode(event)
                break;
        }
    }
    document.onmousedown = (event) => {
        if(selectedNodeObj.spawnNodeVal === true){
            addNode(event)
        }
    }
    document.onmouseup = (event) => {
        selectedNodeObj.setSpawnNode(false)
    }





    //only render if nodes, else promt to add node with a button
            
    if(nodes.length>0){
    return (
        <CssBaseline>
        <div style={{backgroundColor:'#dce2e6', width:window.innerWidth * 5,maxHeight:window.innerHeight * 5}} className="App">
        <Stage ref={stageRef} width={window.innerWidth * 5} height={window.innerHeight * 5}>
            <Layer>
            {nodes.map((node) => {
                return <Node id={node.id} x={node.x} y={node.y} />
            })}
            </Layer>
        </Stage>
        </div>
        </CssBaseline>
    );
    }

    else{

    return(
        <CssBaseline>
        <div style={{justifyContent:'center', alignItems:'center', display:'flex', height:'100vh',width:'100%',backgroundColor:'#dce2e6'}} className="App">
        <Button style={{width:'10vh',height:'5vh',backgroundColor:'white'}}  onClick={(e)=>firstNode(e)}>begin</Button>
        </div>
        </CssBaseline>
    )
    }
}