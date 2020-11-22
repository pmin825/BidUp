# BidUp

[BidUp](https://bid-up.herokuapp.com/#/ "BidUp"), an OfferUp clone, is an online marketplace that is primarily focused on in-person transactions. 

## Key Features 

*  Session: Secure account creation, login, and guest/demo login

*  Products: Users are able to create/edit/delete their own product listings

## Technologies 

*  React/Redux

*  Ruby on Rails 

*  Javascript 

*  AWS 

## Splash page

![alt text](https://github.com/pmin825/BidUp/blob/master/app/assets/images/splash1.png "Splash page")

## Bids

*  Users can submit bids on products

*  Users can also see items with bids that they are either buying or selling

![alt text](https://github.com/pmin825/BidUp/blob/master/app/assets/images/bids.png "Bids page")

## Reviews 

*  A modal pops open for user to submit a review and a rating 

*  Users can leave feedback for sellers

*  Users are able to rate sellers based on a star rating system

![alt text](https://github.com/pmin825/BidUp/blob/master/app/assets/images/reviewmodal.png "Review modal")

## Product Search 

* Products can be filtered by searching keywords, with results for partial and complete search queries. 

![alt text](https://github.com/pmin825/BidUp/blob/master/app/assets/images/productshow.png "Show page")

## Edit Product page - Code Walk Through

![alt text](https://github.com/pmin825/BidUp/blob/master/app/assets/images/updateproduct.png "Edit form")

```js
class EditProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.product 
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount(){

        if (this.props.currentUser != this.props.product.seller_id) {
            this.props.history.push('/')
        }

        if (this.props.formType === 'update') {
            this.props.fetchProduct(this.props.match.params.productId);
        }

        window.scrollTo(0, 0);
    }


    handleSubmit(e) {
        e.preventDefault();
    
        if (this.state.photoFile !== undefined) {
        let productId = this.props.match.params.productId 
        const formData = new FormData();
        
        formData.append('product[name]', this.state.name);
        formData.append('product[price]', this.state.price);
        formData.append('product[description]', this.state.description);
        formData.append('product[location]', this.state.location);
        formData.append('product[seller_id]', this.state.seller_id);
        formData.append('product[photoFile]', this.state.photoFile);
        formData.append('product[id]', productId);
        

   
        this.props.updateProduct(formData)
            .then(() => {
                this.props.history.push('/')
            });
        }   else {
   
            this.props.updateProduct2(this.state)
            .then(() => {
                this.props.history.push('/')
            })
        }
    }
```

## Future Direction

*  Messages: Users will be able to send each other messages. 

*  Profiles: Users will have their own profile pages.

*  Past activity: Users can see past products they've sold or purchased. 
