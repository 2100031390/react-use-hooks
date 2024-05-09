import React from 'react';
import { useLocalStorage } from 'react-use';

const LocalStorage = () => {
    const [value, setValue, remove] = useLocalStorage('key', 'Code with me');
    return(
        <div>
            <h1>Local Storage</h1>
            <h3>value:{value}</h3>
            <button onClick={()=>setValue('Welcome too my college')}>Update value</button><br/>
            <button onClick={()=> remove()}>remove</button>
        </div>
    );
};
export default LocalStorage;