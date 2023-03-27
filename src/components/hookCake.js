import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cakeACtion } from '../cakeRedux/cake/cakeAction';

const Hookcake = () => {
    const state = useSelector(state => state._N_O_CAKES)
    const dispatch = useDispatch();
    return (
        <div>
            <p><b>NoOFCakes :</b>{state} </p>
            <button onClick={() => dispatch(cakeACtion())}>BuyNow</button>
        </div>
    );
}

export default Hookcake;
