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

![alt text](https://github.com/pmin825/BidUp/blob/master/app/assets/images/splash.png "Splash page")

## Edit Product - Code Walk Through

![alt text](https://github.com/pmin825/BidUp/blob/master/app/assets/images/editformss2.png "Edit form")

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

*  Bids: Users are able to submit bids on product listings. Buyers and sellers both will have a user profile page that shows the items they have bidded on and/or are selling. 

*  Ratings/Reviews: Users are able to leave a rating and review for each other. 

*  Search: Users can search for product through text to see that product's listings.. 
