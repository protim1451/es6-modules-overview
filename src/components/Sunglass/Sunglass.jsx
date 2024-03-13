import React from 'react';
import './Sunglass.css'; 
import Watch from '../watch/Watch';
import { add } from '../../Utils/Calculate';

const Sunglass = () => {
    const first =55;
    const second =199;
    const sum = add(first, second);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;