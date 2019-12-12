import React from 'react';

const Input= (props) => {
    return (
        <form onSubmit={props.getPacketData}>
            <input type="text" name="id"/>
            <button>Track</button>
        </form>
    );
}
export default Input;