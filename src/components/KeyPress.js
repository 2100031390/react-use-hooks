import React,{ useState} from 'react';
import { useKey} from 'react-use';

const KeyPress = () => {
    const[count, setCount] = useState(0);
    const increment = () => setCount(count=> ++count);

    useKey('a',increment);
    return (
      <div>
        <h1>Key Press</h1>
        Count Value:{count}
      </div>
    );
};


export default KeyPress;
