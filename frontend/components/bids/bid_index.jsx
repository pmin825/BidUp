import React from 'react';
import BidIndexItem from './bid_index_item';

class BidIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBids();
    }

    render() {
        
        // let bids = this.props.bids.map((bid, idx) => {
        //     return <BidIndexItem bid={bid} key={idx} deleteBid={this.props.deleteBid} users={this.props.users} currentUser={this.props.currentUser}/>
        // })

        let bids = this.props.bids.map((bid, idx) => {
            return <BidIndexItem bid={bid} key={idx} deleteBid={this.props.deleteBid} users={this.props.users} currentUser={this.props.currentUser}/>
        })

        // let bidsBuying = this.props.bids.map(bid, idx) => {
        //     return 
        // }

        return (
                <div className="bid-body">
                    <div className="bid-list-wrapper">
                        <div className="bid-selling">
                            <h3>Selling</h3>
                            {bids}
                        </div>
                        <div className="bid-buying">
                            <h3>Buying</h3>
                            {bids}
                        </div>              
                    </div>
                </div>
        )
    }
}
export default BidIndex;