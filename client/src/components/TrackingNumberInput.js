import React from 'react';
import { Form, InputGroup} from 'react-bootstrap';


const TrackingNumberInput= (props) => {
    return (
        <Form onSubmit={props.getPacketData}>
              <InputGroup className="mb-3">
            <input type="text" name="trackingnumber" id="trackingnumber" placeholder="Enter tracking number"/>
            <InputGroup.Append>
                            <button type="submit" className="btn btn-primary">Track</button>
                        </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}
export default TrackingNumberInput;