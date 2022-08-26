import { useSelector } from "react-redux";

function Money() {
  const money = useSelector((state) => state.money.balance);
  const moneyFormatter = new Intl.NumberFormat();

  return (
    <div className="money_box mt-4">
      <h1>{moneyFormatter.format(money)}$</h1>
    </div>
  );
}

export default Money;
