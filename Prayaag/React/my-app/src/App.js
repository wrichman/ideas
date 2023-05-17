import Header from "./Components/Header.jsx";
import Inventory from "./Components/Inventory.jsx";
import Order from "./Components/Order.jsx";

function App() {
  return (
    <div className="catch-of-the-day">
      
      <div className = "menu">
        <Header tagline = "Fresh Seafood Market"> </Header>
      </div>

      <Inventory></Inventory>

      <Order></Order>

    </div>
  );
}

export default App;
