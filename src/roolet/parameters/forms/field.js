import React from 'react';
import { Form } from 'react-bootstrap';

class Field extends React.Component {
    render() {
        console.log(this.props);
        return (
            <Form.Group className="betField">
                <Form.Control
                    type="input"
                    placeholder={this.props.defaultValue}
                />
            </Form.Group>
        );
    }
}

export default Field;
