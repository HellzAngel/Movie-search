import React from 'react';
import Log from './log.gif'
export default () => {
return(
    <div>
        <img
        src={Log}
        alt="loading..."
        style={{ width : '400px', margin: '40px auto', display: 'block'}}
        />
    </div>
);
}