import React from "react";
import BidIndexItem from "./bid_index_item";
import BidIndexItemTwo from "./bid_index_item_two";

class BidIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "selling",
        };
        this.changeSelectedToBuying = this.changeSelectedToBuying.bind(this);
        this.changeSelectedToSelling = this.changeSelectedToSelling.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchBids();
        this.props.fetchUsers();
    }

    changeSelectedToBuying() {
        this.setState({ selected: "buying" });
    }

    changeSelectedToSelling() {
        this.setState({ selected: "selling" });
    }

    render() {
        let bids = this.props.bids.map((bid, idx) => {
            return (
                <BidIndexItem
                    bid={bid}
                    key={idx}
                    deleteBid={this.props.deleteBid}
                    users={this.props.users}
                    currentUser={this.props.currentUser}
                />
            );
        });

        let sellItems = this.props.bids.map((bid, idx) => {
            return (
                <BidIndexItemTwo
                    bid={bid}
                    key={idx}
                    deleteBid={this.props.deleteBid}
                    users={this.props.users}
                    currentUser={this.props.currentUser}
                />
            );
        });

        if (this.state.selected === "selling") {
            return (
                <div className="bid-body">
                    <div className="bid-wrap">
                        <h1>My Bids</h1>
                        <div className="bid-list-title">
                            <h3
                                className={
                                    this.state.selected === "selling"
                                        ? "active-title"
                                        : "inactive-title"
                                }
                                onClick={this.changeSelectedToSelling}
                            >
                                Selling
                            </h3>
                            <h3
                                className={
                                    this.state.selected === "buying"
                                        ? "active-title"
                                        : "inactive-title"
                                }
                                onClick={this.changeSelectedToBuying}
                            >
                                Buying
                            </h3>
                        </div>
                        <div className="title-border"></div>
                        <div className="bid-selling">{sellItems}</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="bid-body">
                    <div className="bid-wrap">
                        <h1>My Bids</h1>
                        <div className="bid-list-title">
                            <h3
                                className={
                                    this.state.selected === "selling"
                                        ? "active-title"
                                        : "inactive-title"
                                }
                                onClick={this.changeSelectedToSelling}
                            >
                                Selling
                            </h3>
                            <h3
                                className={
                                    this.state.selected === "buying"
                                        ? "active-title"
                                        : "inactive-title"
                                }
                                onClick={this.changeSelectedToBuying}
                            >
                                Buying
                            </h3>
                        </div>
                        <div className="title-border"></div>
                        <div className="bid-buying">{bids}</div>
                    </div>
                </div>
            );
        }
    }
}
export default BidIndex;
