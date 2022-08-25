import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Money from "./components/Money";
import Receipt from "./components/Receipt";

function App() {
  return (
    <div className="container">
      <Header />
      <Money />
      <ItemList />
      <Receipt />
    </div>
  );
}

export default App;
