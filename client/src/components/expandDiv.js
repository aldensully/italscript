export default function ExpandDiv(props){
    
    const width = props.width + 20
    const height = props.height + 20
    
    function clickDown(){
    }
    function clickUp(){
    }
    return(
        <div onMouseDown={()=>clickDown()} onClickCapture={()=>clickUp()} 
        style={{ zIndex:0,width:width,height:height,backgroundColor:'inherit',boxShadow:'0px 0px 2px 0px grey'}}/>
    )
}