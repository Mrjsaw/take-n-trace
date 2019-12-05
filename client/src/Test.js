import React, {component} from 'react';

const logRandom = () => {
    console.log(Math.Random());
}


const BtnCounter = () => {
    const {counter, setCounter } = useState(0);
    const handleClick = () => setCounter(counter + 1);
return (
<button onClick={handleClick}>
    {counter}
</button>);
};


class Button extends Component{
    render()
}