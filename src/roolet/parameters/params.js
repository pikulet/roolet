import React from 'react';

import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import BetHeader from './forms/betheader';
import BetInput from './forms/bet';

import update from 'react-addons-update';

class Params extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeGenerator = this.onChangeGenerator.bind(this);
    }

    state = {
        bets: [
            {
                probability: 0.25,
                payout: 1,
                amt: 30,
            },
        ],
    };

    visualiseGraph(e) {
        e.preventDefault();
        console.log('getgraph');
    }

    onChangeGenerator(index) {
        return (field) => {
            console.log('generating change function');
            return (e) =>
                this.setState({
                    bets: update(this.state.bets, {
                        [index]: {
                            [field]: e.target.value,
                        },
                    }),
                });
        };
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.visualiseGraph}>
                    <div>
                        <Container>
                            <BetHeader></BetHeader>
                            {[...Array(this.state.bets.length)].map((e, i) => {
                                return (
                                    <BetInput
                                        onChangeGenerator={this.onChangeGenerator(
                                            i
                                        )}
                                        key={i}
                                    ></BetInput>
                                );
                            })}{' '}
                        </Container>
                    </div>

                    <Button variant="primary" type="submit">
                        Simulate
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Params;
