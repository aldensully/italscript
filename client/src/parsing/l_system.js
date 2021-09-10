
function lsystem(growth,iteration,dis){
    
    if(iteration === 0){
        switch(growth[0]){
            case 'A':
                growth[0] = 'A';
                growth[1] = 'B';
                dis = 1;
                break;
            case 'B':
                growth[0] = 'A';
                break;
        }
    }
    else{

    }
    if(iteration<4){
        iteration++;
        lsystem(growth,iteration,dis);
    }
    else{
        break;
    }
}

const iteration = 0;
const growth = ['A'];
const dis = 0;
lsystem(growth,iteration,dis);
