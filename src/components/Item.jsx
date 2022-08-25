function Item({ itemImage, itemPrice, itemName }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-3">
      <div className="item_box">
        <div className="d-flex align-items-center flex-column gap-2">
          <img src={itemImage} />
          <span className="item_name">{itemName}</span>
          <span className="item_price">{itemPrice}</span>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button className="item_button">SELL</button>
          <input className="item_count w-25" type="number" value="0" />
          <button className="item_button btn-gradient">BUY</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
