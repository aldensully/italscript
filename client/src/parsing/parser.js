import node from './object'
import edge from './object'

//used throughout... make these local fields of a class
let labelBuffer = []
let rootBuffer = []
let autoSourceId = [] 
let graphData = {'nodes':[],'links':[]}

//main parent function
export default function parse(input){
    labelBuffer = []
    rootBuffer = []
    autoSourceId = []
    graphData = {'nodes':[],'links':[]}
    const removed = removeNewlines(input)
    const entries = separateEntries(removed)
    splitLabels(entries)
    return graphData

}
//remove newline characters
function removeNewlines(input){
    const newString = input.replace(/[\n\r]/g,"")
    return newString
}
//split entries
function separateEntries(input){
    const words = input.split(';') 
    return words
}
//split the labels from the entry
function splitLabels(input){
    for(const elem of input){
        var entry = elem.split(':')
        var text = entry[entry.length-1];
        entry.pop();
        createObject(entry,text)  //sends the labels and text separate to create object
    }
}

function createObject(labels,text){   

    //create node object
    var obj = Object.create(node)   
    
    //-------set basic node properties-----------------
    obj.text = `${text}`  
    obj.id = `${createId()}`
    obj.type = []    //still not sure why i need to do this 
    obj.keywords = []
    obj.subscripts = []
    
    //------------process labels--------------
    for(let i=0;i<labels.length;i++){
        
        var l = labels[i]

        if (l==l.toLowerCase()){   //if the first character if lowercase handle the possibilities(s,c,b)
            
            
            if(l == 'c'){
                obj.subscripts.push(l)
                createEdge(obj.id,graphData.nodes[graphData.nodes.length-1].id)
            }
            else if(l == 's'){

                if(autoSourceId.length>0){  //if there is already an autoSource, remove it and add the new one(there cant be more than one 'as' at a time)
                    autoSourceId.pop()
                }
                autoSourceId.push(obj.id)   //then add new id to autoSource

            }
            else if(l == 't'){
                obj.subscripts.push(l)
                createEdge(obj.id,autoSourceId[0])
            }
        }
        else if(isNaN(l * 1)){   //handle different types if character is uppercase
                
            if (l === 'R') {
                obj.type.push('Root');
                obj.subscripts.push(l);
                obj.label = 'Root';
    
                //obj.color = '#f55192'
                //rootBuffer.push(obj.id)
            }
            else if(l === 'T'){
                obj.type.push('Topic')
                obj.color = '#36eb63'
                obj.label = 'Topic';
      
            }
            else if(l === 'I'){
                obj.type.push('Idea')
                obj.color = '#3495eb'
                obj.label = 'Idea'
            } 
            else if(l === 'C'){
                obj.type.push('Comment')
                obj.color = '#ded5f5'
                obj.label = 'Comment'
            }
            else if(l === 'Q'){
                obj.type.push('Question')
                obj.color = '#dae35b'
                obj.label = 'Question'
            }
            else if(l == 'A') {
                obj.type.push('Answer')
                obj.color = '#bc5dde'
                obj.label = 'Answer'
            }
            else if (l=='P') {
                obj.type.push('Problem')
                obj.color = '#d15c26'
                obj.label = 'Problem'
            }
            else if(l=='L') {
                obj.type.push('Link')
                obj.color = '#239e3e'
                obj.label = 'Link'
            }
            
        }
        else {  //character is numeric, will be for custom node ids
            alert('custom id not yet implemented')
        }
    }

    //-----------process text-------------
    var arr = []  //will store all words of split
    var split1 = text.split('[')
    var len = split1.length  //will always be one more than the number of bracket pairs
    if(len>1){
        for (let i = 0; i < len; i++) {  
            if(i>0){   //first index will never have a closing bracket
                var split2 = split1[i].split(']')
                let count = 0
                for (const j of split2){
                    if(count==0 || count%2==0) arr.push(j)
                    count++
                }
            }
        }
    }

    //arr now contains all words within brackets
    //add keywords to the nodes properties
    if(arr.length>0){
        for(const i of arr){
            obj.keywords.push(i)
        }
    }


    //add node to graphData as long as there is text for it
    if(obj.text.length>0){
        graphData.nodes.push(obj)

        //if there is an 'as' flag without a 'c' then create an edge to the header node 
        if(obj.subscripts.length==0){     //
            var rootIndex = 0
            for(const i in graphData.nodes){
                if(graphData.nodes[i].type == "Root"){
                    rootIndex = i
                }
            }

            createEdge(obj.id,graphData.nodes[rootIndex].id) //the most recent header node
        }    
    } 
}



//create an edge
function createEdge(sourceId,targetId){
    var edgeId = Math.floor(Math.random() * 10000)
    graphData.links.push({'id':`${edgeId}`,'source':`${sourceId}`,'target':`${targetId}`})   //add edge to edges
}
//generate id if one isnt given
function createId(){
    return Math.floor(Math.random() * 10000)
}
