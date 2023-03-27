import React from 'react';
import { connect } from 'react-redux';
import { cakeACtion } from '../cakeRedux/cake/cakeAction';

const Cakecontainer = (props) => {
    return (
        <div>
            <p><b>NoOFCakes :</b>{props._N_O_CAKES} </p>
            <button onClick={props.cakeACtion}>BuyNow</button>
        </div>
    );
}

const mapStateFromProps = (state) => {
    return{
        _N_O_CAKES:state._N_O_CAKES
    }
}

const mapDispatchFromProps = (dispatch) => {
    return{
        cakeACtion:() => dispatch(cakeACtion())
    }
    
}

export default connect(mapStateFromProps,mapDispatchFromProps)(Cakecontainer);
