import React from 'react';
import{ useList }from 'react-use';
const ArrayList = () =>{
    const[list,{set, push,updateAt, remove,clear}] = useList([
        'Red',
        'Green',
        'Yellow',
        'Pink',
    ]);
    return(
        <div>
                        {list.map((item, index)=>{
                            return(
                                <div>
                                    <h1>{item}</h1>
                                    <button onClick={()=>remove(index)}>remove</button>
                                    <button onClick={()=>updateAt(index,'white')}>update</button>
                                    </div>
                       
                )
            })}
            <button onClick={()=>push('Black')}>Push</button>
            <button onClick={clear}>clear</button>
        </div>
    );
};
export default ArrayList;