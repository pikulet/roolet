import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BetInput(index) {
    return (
        <div className='bet-input'>
            <Row>
                <Col md={4}>
                    <Form.Group className="bet-probability">
                        <Form.Control type="input" placeholder="0.25" />
                    </Form.Group>
                </Col>


                <Col md={4}>
                    <Form.Group className="bet-payout">
                        <Form.Control type="input" placeholder="1" />
                    </Form.Group>
                </Col>

                <Col md={4}>
                    <Form.Group className="bet-amt">
                        <Form.Control type="input" placeholder="25" />
                    </Form.Group>
                </Col>
            </Row>

        </div>
    );
}