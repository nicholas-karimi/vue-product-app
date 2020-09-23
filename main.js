// register component
Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    
    <div class="product">
    <div class="product-image">
        <img v-bind:src="image">
    </div>
    <div class="product-info">
        <!-- <h1>Product goes here!</h1> -->
        <!-- <h1>{{ brand }} {{ product }}</h1> -->
        <h1>{{ title }}</h1>
        <p v-show="inStock">In Stock</p>
        <p>{{sale}}</p>
        <p>Shipping: {{shipping}}</p>
        <!-- <p v-if="inventory <= 10 && inventory > 0">In Stock</p>
        <p v-else="inventory">Out of Stock</p> -->

        <!-- <li><a :href="url">More</a></li>  use v-bind shorthand :-->

        <!-- list rendering -->
        <ul>
            <li v-for="detail in details" >{{ detail }}</li>
        </ul>
        <div class="color-box" v-for="(variant, index) in variants"
        :key="variant.variantId"
        :style="{backgroundColor: variant.variantColor}"
        @mouseover="updateProduct(index)">
            <!-- <p @mouseover="updateProduct(variant.variantImage)">{{ variant.variantColor }}</p> -->

        </div>
        <div class="">
            <h3>Available Sizes:</h3>
            <ol>
                <li v-for="size in sizes">{{ size }}</li>
            </ol>
        </div>
        <button type="button" v-on:click="addToCart"
                            :disabled="!inStock"
                            :class="{disabledButton: !inStock}">Add to Cart</button>
        <button type="button" v-on:click="removeItem">Remove Item</button>
        <div class="cart">
            <p>Cart {{cart}}</p>
        </div>
       
    </div>

</div>

    `,

    data(){
        return {
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
    
    
        }
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
        },
        shipping(){
            if(this.premium){
                return "Free";
            }else{
                return '$2.99';
            }
        }
    }
})
//vue instance
var app = new Vue({
    el: '#app',
    data: {
        premium: false
    }
    
})
