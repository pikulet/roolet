import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Params from './parameters/params';
import Graphs from './graphs/graphs';
import Summary from './summary/summary';

export default function Roolet() {
    return (
        <Container>
            <Row>
                <Col xs={12} lg={3}>
                    <Params></Params>
                </Col>
                <Col xs={12} lg={7}>
                    <Graphs></Graphs>
                </Col>
                <Col xs={12} lg={2}>
                    <Summary></Summary>
                </Col>
            </Row>
        </Container>
    );
}
