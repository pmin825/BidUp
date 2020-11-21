import React from 'react';
import BidIndexItem from './bid_index_item';
import BidIndexItemTwo from './bid_index_item_two';

class BidIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'selling'
        }
        this.changeSelectedToBuying = this.changeSelectedToBuying.bind(this);
        this.changeSelectedToSelling = this.changeSelectedToSelling.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchBids();
        this.props.fetchUsers();
    }

    changeSelectedToBuying() {
        this.setState({selected: "buying"})
    }

    changeSelectedToSelling() {
        this.setState({selected: "selling"})
    }


    render() {
        
        // let bids = this.props.bids.map((bid, idx) => {
        //     return <BidIndexItem bid={bid} key={idx} deleteBid={this.props.deleteBid} users={this.props.users} currentUser={this.props.currentUser}/>
        // })

        let bids = this.props.bids.map((bid, idx) => {
            return <BidIndexItem bid={bid} key={idx} deleteBid={this.props.deleteBid} users={this.props.users} currentUser={this.props.currentUser}/>
        })

        let sellItems = this.props.bids.map((bid, idx) => {
            return <BidIndexItemTwo bid={bid} key={idx} deleteBid={this.props.deleteBid} users={this.props.users} currentUser={this.props.currentUser}/>
        })

        
        // let shopNow;
        // if(document.body.contains(document.getElementById('bid-container'))) shopNow = <i class="fas fa-shopping-bag"></i>
        // // debugger 
        if (this.state.selected === "selling") {
            return (
                    <div className="bid-body">
                        <div className="bid-list-wrapper">
                            <h3>Selling</h3>
                            <div className="bid-selling">
                                {sellItems}
                            </div>
                        </div>
                    </div>
            )  
        }   else {
            return (
                    <div className="bid-body">
                        <div className="bid-list-wrapper">
                            <h3>Buying</h3>
                            <div className="bid-buying">
                                {bids}
                            </div>              
                        </div>
                    </div>
            )
        }
    }
}
export default BidIndex;