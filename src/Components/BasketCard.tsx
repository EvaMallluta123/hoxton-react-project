import { BasketItem } from "../type"

type Props = {
    item: BasketItem
  }
export function BasketCard({item}:Props){

    return(
<li >
      <article className='basket_item'>
        <img src={item.product.image} alt={item.product.title} width='90' />
        <p>{item.product.title}</p>
        <p>
          Qty:
          <select>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </p>
        <p>Item total: £{(item.product.price * item.quantity).toFixed(2)}</p>
      </article>
    </li>
    )
}