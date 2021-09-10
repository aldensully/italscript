class SelectedNodeObj{
    constructor(x,y,spawn,mouseX,mouseY){
        this.x = x;
        this.y = y;
        this.spawnNode = spawn;
        this.mouseX = mouseX;
        this.mouseY = mouseY;
    }

    get xval(){
        return this.x;
    }
    get yval(){
        return this.y;
    }
    get spawnNodeVal(){
        return this.spawnNode;
    }
    get mouseXval(){
        return this.mouseX;
    }
    get mouseYval(){
        return this.mouseY;
    }
    setX(x){
        this.x = x;
    }
    setY(y){
        this.y = y;
    }
    setSpawnNode(spawn){
        this.spawnNode = spawn
    }
    setMouseX(mouseX){
        this.mouseX = mouseX
    }
    setMouseY(mouseY){
        this.mouseY = mouseY
    }

}

const selectedNodeObj = new SelectedNodeObj(0,0,false,0,0)
export default selectedNodeObj 