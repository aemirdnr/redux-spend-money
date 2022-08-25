import Item from "./Item";

function ItemList() {
  return (
    <div className="row mt-4">
      <Item
        itemImage="./src/images/big-mac.jpg"
        itemPrice="$2"
        itemName="Big Mac"
      />
      <Item
        itemImage="./src/images/flip-flops.jpg"
        itemPrice="$3"
        itemName="Flip Flops"
      />
      <Item
        itemImage="./src/images/coca-cola-pack.jpg"
        itemPrice="$5"
        itemName="Coca-Cola Pack"
      />
      <Item
        itemImage="./src/images/movie-ticket.jpg"
        itemPrice="$12"
        itemName="Movie Ticket"
      />
      <Item itemImage="./src/images/book.jpg" itemPrice="$15" itemName="Book" />
      <Item
        itemImage="./src/images/lobster-dinner.jpg"
        itemPrice="45$"
        itemName="Lobster Dinner"
      />
    </div>
  );
}

export default ItemList;
