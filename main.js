
//vue instance
var app = new Vue({
    el: '#app',
    data: {
    	// attribute binding
        brand: 'Nski',
        product: 'Socks',
        description: "These are happy socks made of pure cotton grown in Kenya!",

        image: './assets/fancy.jpeg',
        url: 'https://www.google.com/',

        //conditional
        // inventory: 100,
        inStock: false,
        // list rendering
        details: ['80% cotton', '20 % polyester', 'Gender-neutral'],

        variants: [
            {
                variantId: 2345,
                variantColor: 'green',
                variantImage: './assets/green.jpeg'
            },
            {
                variantId: 2018,
                variantColor: 'blue',
                variantImage: './assets/fancy.jpeg'

            }
        ],

        sizes: ['M', 'L', 'XL', 'XXL', 'S'],

        cart: 0


    },
    // instance methods
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeItem(){
            this.cart -= 1;
        },
        updateProduct(variantImage)
        {
            this.image = variantImage;
        }
    },
    // use computed properties to add product & brand
    computed: {
        title(){
            return this.brand + ' ' + this.product;
        }
    }
})
