import { Form, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

import BetHeader from "./forms/betheader";
import BetInput from "./forms/onebet";

export default function Params() {
/*
    const state = {
        bets: [
            {
                probability: 0.25,
                payout: 1,
                amt: 30
            }
        ]
    }*/

    const sendData = e => {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <div>
            <h1> params </h1>
            <Form onSubmit={sendData}>
                <div>
                    <Container>
                        <BetHeader></BetHeader>
                        {
                            [...Array(2)].map((e, i) => {
                                return <BetInput index={i}></BetInput>
                            })
                        }
                    </Container>
                </div>

                <Button variant="primary" type="submit">
                    Simulate
                </Button>
            </Form>
        </div>
    );
}