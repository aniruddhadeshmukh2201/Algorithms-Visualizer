import React, { Component } from 'react';
import '../SortingVisualizer.css';
import { genAnimations, genQuickAnimations, quick} from '../sortingAlgorithms';

const ANIMATION_SPEED_MS = 2;
const NUMBER_OF_ARRAY_BARS = 300;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const TERTIARY_COLOR = 'green';

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        };
    }
    componentDidMount() {
        this.resetArray();
    }
    resetArray() {
        const array = [];
        for(let i =0; i< NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 200));
        }
        this.setState({array});
    }
    mSort() {
        console.log(this.state.array);
        const animations = genAnimations(this.state.array);
        console.log(this.state.array);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : TERTIARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
        }
        
    }

    QuickSort() {
        console.log("array before genQuickAnimations: ", this.state.array);
        const animations = genQuickAnimations(this.state.array);
        console.log("array after genQuickAnimations: ", this.state.array);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i*ANIMATION_SPEED_MS);
        }
        console.log("Array after animations: ", this.state.array);
    }

   func() {
       let array = this.state.array;
       array = quick(array, 0, array.length-1);
       this.setState({array});
   }

    render() {
        const {array} = this.state;
        return (
            <div className="array-container">
                { array.map((value, idx) => (
                    <div
                    className="array-bar"
                    key={idx}
                    style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`
                    }}></div>
                ))}
                <button onClick={() => this.resetArray()}>
                    Generate New Array
                </button>
                <button onClick={() => this.mSort()}>
                    Merge Sort
                </button>
                <button onClick={() => this.QuickSort()}>
                    Quick Sort
                </button>
                <button onClick={() => this.func()}>
                    Quick Sort 2
                </button>
                <button onClick={()=> {
                    console.clear();
                    console.log("from button: ", array)
                }}> console.log array</button>
                Testing Sorting Algorithms
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

export default SortingVisualizer;