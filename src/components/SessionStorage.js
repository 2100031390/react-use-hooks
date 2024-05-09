import React from 'react';
import { useSessionStorage } from 'react-use';
const SessionStorage = () =>{
    const [value, setValue] = useSessionStorage('Key1', 'Code with me');
    return(
        <div>
            <h1>Session Storage</h1>
            1 <h3>value:{value}</h3>
            <button onClick={()=>setValue('follow my instaid')}>Update Value</button>
        </div>
    );
};
export default SessionStorage;