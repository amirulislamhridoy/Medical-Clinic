import React from 'react';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

const PercentItem = ({item}) => {
    const num = item.num
    const [flip, set] = useState(false)
    const { number } = useSpring({
        from: { number: 0 },
        number: num,
        delay: 200,
        // config: config.molasses,
        onRest: () => set(!flip),
    })
    return (
        <div>
            <h1>
                <animated.div className='percent-item'>{number.to(n => n.toFixed(0))}</animated.div>
                {item.mark}
            </h1>
            <p>Happy Smiles</p>
        </div>
    );
};

export default PercentItem;