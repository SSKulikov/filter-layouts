import React from "react";
import imgs from "../assets/imgs.json"
import { IconSwitch } from "./IconSwitch";
import { ListView } from "./ListView";
import { CardsView } from "./CardsView";

export class Store extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'card'
        }
        this.poductList = imgs

        this.handleIconSwitch = this.handleIconSwitch.bind(this)
        this.switchState = this.switchState.bind(this)
    }

    handleIconSwitch() {
        this.setState({filter: this.state.filter === 'card' ? 'list' : 'card'})
    }

    switchState() {
        switch (this.state.filter) {
            case 'card':
                return <ListView productList={this.poductList}/>;
            case 'list':
                return <CardsView productList={this.poductList}/>;
        }
    }

    render() {
        return (
            <main className="main">
                <IconSwitch 
                    icon={this.state.filter === 'card' ? 'list' : 'view_module'}
                    onSwitch={this.handleIconSwitch}
                />
                {this.switchState()}
            </main>
        )
    }
}