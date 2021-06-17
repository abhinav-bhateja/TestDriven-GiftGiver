import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {max_number} from '../helper/index'
import Gift from './Gift'

class App extends Component {
    constructor() {
        super();
        this.state = {gifts: []};
    }

    addGift = () => {
        const {gifts} = this.state;
        gifts.push({
            id: max_number(this.state.gifts.map(gift => gift.id)) + 1
        })
        ;
        this.setState({gifts})
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts})
    }

    render() {
        return (
            <div>

                <div style={{
                    marginTop: "2rem",
                    marginBottom: "2rem",
                    display: "flex",
                    width: "100vw",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <h2>Gift Giver</h2>
                </div>

                <div className="gift-list">
                    {
                        this.state.gifts.map(gift => {
                            return (
                                <Gift
                                    key={gift.id}
                                    gift={gift}
                                    removeGift={this.removeGift}
                                />
                            )
                        })
                    }
                </div>

                <div style={{display: "flex", width: "100vw", alignItems: "center", justifyContent: "center"}}>
                    <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
                </div>

            </div>
        )
    }
}

export default App;