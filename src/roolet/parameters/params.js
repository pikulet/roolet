import BetHeader from "./forms/betheader";
import BetInput from "./forms/onebet";

import { Form } from "react-bootstrap";

import Container from 'react-bootstrap/Container';

export default function Params() {

    var numBets = 1

    return (
        <div>
            <h1> params </h1>
            <Form>
                <div>
                    <Container>
                        <BetHeader></BetHeader>
                        {
                            [...Array(numBets - 1)].map((e, i) => {
                                return <BetInput></BetInput>
                            })
                        }
                    </Container>
                </div>
            </Form>
            <BetInput></BetInput>
        </div>
    );
}