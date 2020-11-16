import React from 'react';
import BidIndexItem from './bid_index_item';

class BidIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        let bids = this.props.bids.map((bid, idx) => {
            return <BidIndexItem bid={bid} key={idx} deleteBid={this.props.deleteBid} users={this.props.users} currentUser={this.props.currentUser}/>
        })

        return (
            <div>
                <ul>
                    <li>{bids}</li>                    
                </ul>
            </div>
        )
    }
}
export default BidIndex;