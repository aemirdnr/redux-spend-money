import { useSelector } from "react-redux";

function Receipt() {
  const moneyFormatter = new Intl.NumberFormat();
  const items = useSelector((state) => state.basket.items);
  const totalCost = useSelector((state) => state.basket.cost);

  return (
    <>
      {items.length !== 0 ? (
        <div className="receipt_box my-4">
          <h2 className="m-0 my-3">Your Receipt</h2>
          <div className="d-flex flex-column align-items-center w-100 gap-3 my-3">
            <div className="hr"></div>
            {items.map((item, index) => (
              <div key={index} className="d-flex justify-content-between w-100">
                <span>{item.productName}</span>
                <div className="d-flex w-50 justify-content-between">
                  <span>x{item.productCount}</span>
                  <span>
                    {moneyFormatter.format(
                      item.productPrice * item.productCount
                    )}
                    $
                  </span>
                </div>
              </div>
            ))}
            <div className="hr"></div>
            <div className="d-flex w-75 justify-content-center gap-4">
              <h4 className="m-0 my-3">TOTAL COST</h4>
              <h4 className="m-0 my-3">{moneyFormatter.format(totalCost)}$</h4>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Receipt;
