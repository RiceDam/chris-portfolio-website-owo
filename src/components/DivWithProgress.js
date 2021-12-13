import "../style/DivWithProgress.css";
import { useState } from "react";
const colors = ["#BEE9E8", "#5FA8D3", "#CAE9FF", "#62B6CB"]

function DivWithProgress(props) {
    const [index, setIndex] = useState(0);
    const length = props.projects.length;
    const handleScroll = e => {
        if (e.deltaY > 0) {
            if (index === length-1) {
                setIndex(0);
            } else {
                setIndex(index+1);
            }
        } else {
            if (index === 0) {
                setIndex(length-1);
            } else {
                setIndex(index-1);
            }
        }
    }
    const progressBars = () => {
        const bars = [];
        for (let i = 0; i < length; i++) {
            bars.push(
                <li key={i} className="progress-point">
                    <div></div>
                </li>);
        }
        return bars;
    }
    return (
        <fieldset className="progress-div">
            <legend><span>0.2</span> Experience</legend>
            <ul className="progress-bars">
                {progressBars()}
            </ul>
            <div className="progress-content" onWheel={handleScroll}>
                {props.projects[index]}
            </div>
        </fieldset>
    );
}

export default DivWithProgress;