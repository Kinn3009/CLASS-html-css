import React, { useState, useCallback } from 'react';

function UseCallback() {
const storeSet = new Set(); 
    const [count , setCount] = useState(0);
    const [countOther , setCountOther] = useState(0);
    const [countOther2 , setCountOther2] = useState(0);
    const [countOther3 , setCountOther3] = useState(0);

    const increase = useCallback((num) => () => setCount (count + num), [count]);
    const decrease = useCallback((num) => () => setCount(count - num),[count]);

    const increaseOther = useCallback(() => setCountOther(countOther + 1), [countOther]);
    const decreaseOther = useCallback(() => setCountOther(countOther - 1), [countOther]);
      
    const increaseOther2 = useCallback(() => setCountOther2(countOther2 + 1), [countOther2]);
    const decreaseOther2 = useCallback(() => setCountOther2(countOther2 - 1), [countOther2]);

    const increaseOther3 = useCallback(() => setCountOther3(countOther3 + 1), [countOther3]);
    const decreaseOther3 = useCallback(() => setCountOther3(countOther3 - 1), [countOther3]);

    storeSet.add(increase());
	storeSet.add(decrease());
	storeSet.add(increaseOther);
	storeSet.add(decreaseOther);
	storeSet.add(increaseOther2);
	storeSet.add(decreaseOther2);
	storeSet.add(increaseOther3);
	storeSet.add(decreaseOther3);

    console.log(storeSet);

	
	return (
			<>
				<div>Count: {count}</div>
				<button onClick={increase(2)}>+</button>
				<button onClick={decrease(2)}>-</button>

				<div>Count other: {countOther}</div>
				<button onClick={increaseOther}>+</button>
				<button onClick={decreaseOther}>-</button>

				<div>Count other2: {countOther2}</div>
				<button onClick={increaseOther2}>+</button>
				<button onClick={decreaseOther2}>-</button>

				<div>Count other3: {countOther3}</div>
				<button onClick={increaseOther3}>+</button>
				<button onClick={decreaseOther3}>-</button>
			</>
	)
}

export default UseCallback;