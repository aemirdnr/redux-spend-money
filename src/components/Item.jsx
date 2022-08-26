import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct, sellProduct } from "../redux/moneySlice";

const moneyFormatter = new Intl.NumberFormat();

function Item({ itemImage, itemPrice, itemName }) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.money.balance);
  const [count, setCount] = useState(0);

  const buyHandle = () => {
    if (itemPrice <= money) {
      dispatch(buyProduct(itemPrice));
      setCount(count + 1);
    }
  };

  const sellHandle = () => {
    if (count > 0) {
      dispatch(sellProduct(itemPrice));
      setCount(count - 1);
    }
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-3">
      <div className="item_box">
        <div className="d-flex align-items-center flex-column gap-2">
          <img src={itemImage} />
          <span className="item_name">{itemName}</span>
          <span className="item_price">
            {moneyFormatter.format(itemPrice) + "$"}
          </span>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button className="item_button" onClick={sellHandle}>
            SELL
          </button>
          <input className="item_count w-25" type="number" value={count} />
          <button className="item_button btn-buy" onClick={buyHandle}>
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
