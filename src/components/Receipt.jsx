function Receipt() {
  return (
    <div className="receipt_box my-4">
      <h2 className="m-0 my-3">Your Receipt</h2>
      <div className="d-flex flex-column align-items-center w-100 gap-3 my-3">
        <div className="hr"></div>
        <div className="d-flex justify-content-between w-100">
          <span>Big Mac</span>
          <div className="d-flex w-50 justify-content-between">
            <span>x50</span>
            <span>100$</span>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <span>Book</span>
          <div className="d-flex w-50 justify-content-between">
            <span>x250</span>
            <span>3750$</span>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <span>Coca-Cola Pack</span>
          <div className="d-flex w-50 justify-content-between">
            <span>x10</span>
            <span>50$</span>
          </div>
        </div>
        <div className="hr"></div>
        <div className="d-flex w-75 justify-content-center gap-4">
          <h4 className="m-0 my-3">TOTAL</h4>
          <h4 className="m-0 my-3">3900$</h4>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
