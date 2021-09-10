import {React,useEffect,useState} from 'react';
import { Group,Stage, Layer, Rect, Circle,Text } from 'react-konva';
import { Html } from 'react-konva-utils';
import { UIStore } from './store';
import Draggable from 'react-draggable';
import selectedNodeObj from './selectedNode';
import ExpandDiv from './expandDiv';

export default function Node(props) {
  
  const [isClickedDown,setIsClickedDown] = useState(false)
  const [width,setWidth] = useState(200)
  const [height,setHeight] = useState(100)
  const [insideTextarea,setInsideTextarea] = useState(false)

  const id = props.id

  function handleStart(e){
  }
  function handleDrag(e){
  }
  function handleStop(e){
    //sets the global position obj to be read when a new node is created
    selectedNodeObj.setX(e.clientX-e.offsetX)
    selectedNodeObj.setY(e.clientY-e.offsetY)
  }
  function handleBlur(){
    document.getElementById(`area${id}`).disabled = true
    document.getElementById(`area${id}`).style.border = 'none' 
  }
  function handleClick(){
    document.getElementById(`main${id}`).style.backgroundColor = 'inherit'

    document.getElementById(`area${id}`).disabled = false
    document.getElementById(`area${id}`).focus()  
    document.getSelection().collapseToEnd()  //removes highlighting, pushes cursor to end
    document.getElementById(`area${id}`).style.borderWidth = '10em'
    document.getElementById(`area${id}`).style.border = '' 
    document.getElementById(`area${id}`).style.borderColor = 'violet' 
  }

  //spawn new node
  function clickDown(){
    if(insideTextarea === false){
      setIsClickedDown(true)
      console.log('updating state')
      selectedNodeObj.setSpawnNode(true)
    } 
  }
  function clickUp(){
    setIsClickedDown(false)
    document.getElementById(`main${id}`).style.backgroundColor = 'inherit'
  }
  function mouseOver(){
    if(insideTextarea === false) document.getElementById(`main${id}`).style.backgroundColor = '#e6efff'
  }
  function mouseLeft(){
    if(isClickedDown === false) document.getElementById(`main${id}`).style.backgroundColor = 'inherit'
  }

  document.onmouseup = ()=>{
    if(insideTextarea === false) clickUp()
  }


  return (  
    <Html >

        <Draggable id={`drag${id}`} defaultPosition={{x:props.x,y:props.y}} grid={[10, 10]} scale={1} 
        handle={`.handle${id}`}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        disabled={insideTextarea === true ? false:true}>
          
        <div id={`main${id}`} className={`handle${id}`}
            onBlur={()=>handleBlur()} onDoubleClick={()=>handleClick()} 
            onMouseOver={()=>mouseOver()} onMouseLeave={()=>mouseLeft()}
            onMouseDownCapture={()=>clickDown()}
            style={{zIndex:1,borderRadius:5,padding:10,width:width+20,height:height+20}} 
            >
          <textarea disabled id={`area${id}`} placeholder="add text" onMouseOver={()=>setInsideTextarea(true)} onMouseLeave={()=>setInsideTextarea(false)}
                    style={{backgroundColor:'white',display:'flex',border:'none', outline:'none', cursor:'initial',overflowY:'hidden', 
                    overflowX:'hidden', borderColor:'white',resize:'none', textAlign:'center', width:width, height:height,zIndex:1,
                    borderRadius:3,position:'absolute',justifyContent:'center',alignItems:'center'}}  />
        </div>
        </Draggable>
    </Html>
    
    
  );
  }