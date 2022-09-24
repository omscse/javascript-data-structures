/**
 * @copyright 2022 Omprakash Selvaraj <cse.omprakash@gmail.com>
 * @license MIT
 */

/**
 * @class PriorityQueue
 */
 class PriorityQueue{
    #heapData = [];
    #comparaeFunction;

    constructor(comparaeFunction){
        if(comparaeFunction)
            this.#comparaeFunction =  comparaeFunction;
        else
            this.#comparaeFunction = (a,b)=>a-b;
    }

    #alignParentAndChildren(parentIdx){

        let elementIdx = parentIdx;

        while(true){
            let leftChildIdx = elementIdx*2+1;
            let rightChildIdx = elementIdx*2+2;
    
            if(leftChildIdx>=this.#heapData.length&&rightChildIdx>=this.#heapData.length){
                break;
            }
            else if(leftChildIdx>=this.#heapData.length){
                if(this.#comparaeFunction(this.#heapData[rightChildIdx],this.#heapData[elementIdx])>0){
                    [this.#heapData[rightChildIdx],this.#heapData[elementIdx]]=[this.#heapData[elementIdx], this.#heapData[rightChildIdx]];
                    elementIdx = rightChildIdx;
                    continue;
                }
            }
            else if(rightChildIdx>=this.#heapData.length){
                if(this.#comparaeFunction(this.#heapData[leftChildIdx], this.#heapData[elementIdx])>0){
                    [this.#heapData[leftChildIdx],this.#heapData[elementIdx]]=[this.#heapData[elementIdx], this.#heapData[leftChildIdx]];
                    elementIdx = leftChildIdx;
                    continue;
                }
            }
            else{
                let minChildIdx = this.#comparaeFunction(this.#heapData[leftChildIdx],this.#heapData[rightChildIdx])>0?leftChildIdx:rightChildIdx;
                if(this.#comparaeFunction(this.#heapData[minChildIdx], this.#heapData[elementIdx])>0){
                    [this.#heapData[minChildIdx],this.#heapData[elementIdx]]=[this.#heapData[elementIdx], this.#heapData[minChildIdx]];
                    elementIdx = minChildIdx;
                    continue;
                }
            }
            break;
        }
    }

    /**
     * 
     * @param {*[]} dataArray 
     * @returns 
     */
    heapify(dataArray){
        if(!dataArray||dataArray.length===0)
            return;
        this.#heapData = [...dataArray];
        let totalLevels = Math.floor(Math.log(this.#heapData.length)/Math.log(2));

        let levelToProcess = totalLevels - 1;

        while(levelToProcess>=0){
            let startElementIdx = Math.pow(2, levelToProcess)-1; 
            let endElementIdx = Math.pow(2, levelToProcess+1)-1-1; 
            for(let elementIdx = startElementIdx; elementIdx <= endElementIdx; elementIdx++){
                this.#alignParentAndChildren(elementIdx);
            }
            levelToProcess--;
        }
        
    }

    add(data){
        this.#heapData.push(data);
        let elementIdx = this.#heapData.length-1;
        while( elementIdx>0){
            let parentIdx = Math.floor((elementIdx-1)/2);
            if(this.#comparaeFunction(this.#heapData[parentIdx], this.#heapData[elementIdx])>=0)
                break;
            [this.#heapData[elementIdx], this.#heapData[parentIdx]]=[this.#heapData[parentIdx], this.#heapData[elementIdx]];
            elementIdx = parentIdx;
        }
    }

    poll(){
        if(this.#heapData.length===0)
            return null;
        
        [this.#heapData[0], this.#heapData[this.#heapData.length-1]]=[this.#heapData[this.#heapData.length-1], this.#heapData[0]];

        let removedElement = this.#heapData.pop();

        let elementIdx = 0;

        this.#alignParentAndChildren(elementIdx);

        return removedElement;
    }

    peak(){
        if(this.#heapData.length===0)
            return null;
        return this.#heapData[0];
    }

    get size(){
        return this.#heapData.length;
    }

    toString(){
        return this.#heapData.toString();
    }

    [Symbol.for('nodejs.util.inspect.custom')](depth, inspectOptions, inspect) {
        return `Heap Data is <${this.#heapData}>`;
      }
}

exports.PriorityQueue = PriorityQueue;
