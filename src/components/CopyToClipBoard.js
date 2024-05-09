import React from 'react';
import { useCopyToClipboard} from 'react-use';

const CopyToClipboard =() =>{
    const[state, CopyToClipboard] = useCopyToClipboard();
    const text ='Code with me';
    return(
        <div>
            <h1>CopyToClipboard</h1>
            <span>value:{state?.value}</span><br/>
            <button onClick={()=> CopyToClipboard(text)}>Copy Text</button>
        </div>
    );
};
export default CopyToClipboard;