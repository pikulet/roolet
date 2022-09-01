
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BetHeader() {
    return (
        <Row>
            <Col md={4}>Pr</Col>
            <Col md={4}>X</Col>
            <Col md={4}>$</Col>
        </Row>
    )
}