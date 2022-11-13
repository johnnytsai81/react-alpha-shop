import { useState } from "react"
import styles from './cart.scss'
import {cartItems} from './Cart';
import {ReactComponent as IconMinus} from '../../../icons/minus.svg';
import {ReactComponent as IconPlus} from '../../../icons/plus.svg';

function CartList({ products, setProducts }) {

  function handleDecreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });
    // 只顯示大於0的產品
    nextProducts = nextProducts.filter(product =>
      product.quantity > 0
    );
    setProducts(nextProducts)
  }

  function handleIncreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1
        };
      } else {
        return product;
      }
    });
    setProducts(nextProducts)
  }
  return (
    products.map(item =>
      <div className="product-container col col-12" key={item.id}>
        <img className="img-container" alt={item.name} src={item.img} />
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <IconMinus className="product-action minus" onClick={() => { handleDecreaseClick(item.id) }} alt="{item.name}"></IconMinus>
              <span className="product-count">{item.quantity}</span>
              <IconPlus className="product-action plus" onClick={() => { handleIncreaseClick(item.id) }} alt="{item.name}"></IconPlus>
            </div>
          </div>
          <div className="price">{item.price}</div>
        </div>
      </div>
    )
  );
};

export function Cart() {
  const [products, setProducts] = useState(cartItems)
  let totalPrice = 0
  products.forEach(data => {
    totalPrice += data.price * data.quantity
  })

  return (
    <div className={styles.container}>
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12">
        <CartList products={products} setProducts={setProducts} />
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">{totalPrice}</div>
      </section>
    </div>
  )
}