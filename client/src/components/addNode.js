import {React,useEffect,useState} from 'react';
import { Group,Stage, Layer, Rect, Circle,Text } from 'react-konva';
import { Html } from 'react-konva-utils';

export default function AddNode(props){
    const [pos,setPos] = useState({x:window.innerWidth/2,y:window.innerHeight/2})
    
    function dragEnd(e){
      setPos({x:e.clientX ,y:e.clientY})
    }
  


    return(
        <div>

        </div>
    )


}