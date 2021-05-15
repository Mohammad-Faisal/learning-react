import React from 'react';
var deepEqual = require('deep-equal')

export const DeepEqual = () => {

    const user1 = {
        name: 'faisal'
    }

    const user2 = {
        name :'faisal'
    }

    //const isEqual = user1 === user2;

    const deepEqualOrNot = deepEqual(user1 , user2);

    return <div style={style}>
        {deepEqualOrNot ? 'They are equal' :'They are not equal'}
    </div>
}

const style={
    margin:"10px",
    border:"1px solid"
}