import React from 'react';
import './outputRow.css';
const OutputRow = (props) => {
    return (
        <div>
            <input type='text' readOnly className='screen' value={props.value} style={props.textsize}></input>
           

        </div>
        )
};
export default OutputRow;