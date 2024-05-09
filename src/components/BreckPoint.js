import React from 'react';
import{ createBreakpoint } from 'react-use';

const useBreckPoint = createBreakpoint({
    XL:1280,
    L:768,
    S:350
});

const BreckPoint = () => {
    const breckPoint = useBreckPoint();
    return(
        <div>
             <h1>Breck Point</h1>
             {breckPoint === "XL" && <h1>XL</h1>}
             {breckPoint === "L" && <h1>L</h1>}
             {breckPoint === "S" &&<h1>S</h1>}
        </div>

    );
        
    
};
export default BreckPoint;