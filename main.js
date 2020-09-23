
//vue instance
var app = new Vue({
    el: '#app',
    data: {
    	// attribute binding
        brand: 'Nski',
        product: 'Socks',
        selectedVariant: 0,
        url: 'https://www.google.com/',

        //conditional
        // inventory: 100,
        // inStock: false, - replaced with computed property
        // list rendering
        details: ['80% cotton', '20 % polyester', 'Gender-neutral'],

        variants: [
            {
                variantId: 2345,
                variantColor: 'green',
                variantImage: './assets/green.jpeg',
                variantQuantity: 10
            },
            {
                variantId: 2018,
                variantColor: 'blue',
                variantImage: './assets/fancy.jpeg',
                variantQuantity: 0

            }
        ],

        sizes: ['M', 'L', 'XL', 'XXL', 'S'],

        cart: 0,
        onSale: true


    },
    // instance methods
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeItem(){
            this.cart -= 1;
        },
        updateProduct(index)
        {
            this.selectedVariant = index;
            console.log(index);
        }
    },
    // use computed properties to add product & brand
    computed: {
        title(){
            return this.brand + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity;
        },
        sale(){
            if (this.onSale){
           
                return ` Our ${this.brand} ${this.product} is on SALE`;

            }
        }
    }
})
