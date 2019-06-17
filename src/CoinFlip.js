import React, { Component } from 'react'
import Coin from './Coin';

class CoinFlip extends Component {
    static defaultProps = {
        coinURLs : ['https://tinyurl.com/react-coin-heads-jpg', 'https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL._QL70_.jpg']
    }

    constructor(props) {
        super();
        this.state = { heads: 0, tails: 0 , coinState:0  }; //0 is head
        this.flip = this.flip.bind(this);
    }

    flip() {
        let curState = { ...this.state };
        let side = Math.floor(Math.random() * 2);
        if (side === 0) {
            curState.heads++;
            curState.coinState = 0;
        } else {
            curState.tails++;
            curState.coinState = 1;
        }
        this.setState(curState)
    }

    render() {
        return (
            <div className="CoinFlip">
                <h1>Flip the Coin!</h1>
                <Coin coinURL={this.props.coinURLs[this.state.coinState]}/>
                <button onClick={this.flip}>Flip!</button>
                <p>Out of {this.state.heads + this.state.tails} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        );
    }
    
}

export default CoinFlip;