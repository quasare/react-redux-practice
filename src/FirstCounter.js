import React from 'react';
import {useSelector} from 'react-redux'

const FirstCounter = () => {

    const count = useSelector(store => store.count)    
    return (
        <div>
            <h2> The count is {count} </h2>
        </div>
    );
}

export default FirstCounter;
