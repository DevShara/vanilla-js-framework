import { getProductById } from "./Menu.js";

export async function addToCart(id){
    const product = await getProductById(id);
    const results = app.store.cart.filter(
        prodInCart => prodInCart.product.id == id );

        // console.log('results:', results)
        if(results.length == 1){
            //The product is already in the cart
            //update the current item

            app.store.cart = app.store.cart.map(p => {
                return p.product.id == id ? {...p, quantity: p.quantity+1 } : p
            });

            console.log(app.store.cart)

            // results[0].quantity = results[0].quantity + 1;
            // console.log(app.store.cart);

        }else{
            app.store.cart = [...app.store.cart, {product, quantity: 1}];
        }

        document.querySelector('#badge').textContent = app.store.cart.length;

}