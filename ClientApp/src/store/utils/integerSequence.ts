import { EFAULT } from "constants";

function* integerSequence(seedNumber=0, increment=1){
    while(true){
        seedNumber = seedNumber + increment;
        yield seedNumber;
    }
}

export default integerSequence;