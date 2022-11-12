import styled from 'styled-components';
import {cartItems} from './Cart.jsx';
import {ReactComponent as IconMinus} from '../../../icons/minus.svg';
import {ReactComponent as IconPlus} from '../../../icons/plus.svg';

const CartContainer = styled.div`
  .img-container{
    border-radius: 8px;
  }
`

function CartList({item}) {
  return (
    <div className="product-container col col-12" data-count="1" data-price={item.price}>
      <img className="img-container" alt={item.name} src={item.img} />
      <div className="product-info">
        <div className="product-name">{item.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <IconMinus className="product-action minus" alt="{item.name}"></IconMinus>
            <span className="product-count">{item.quantity}</span>
            <IconPlus className="product-action plus" alt="{item.name}"></IconPlus>
          </div>
        </div>
        <div className="price">{item.price}</div>
      </div>
    </div>
  );
};

export function Cart() {
  return (
    <CartContainer>
     <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        {cartItems.map(cartItem =>
          <CartList item={cartItem} key={cartItem.id} />
        )}
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">$5290</div>
      </section>
    </CartContainer>
  )
}