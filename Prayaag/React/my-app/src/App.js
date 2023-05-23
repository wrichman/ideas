import { useNavigate } from 'react-router-dom';

// Components
import Header from "./Components/Header.jsx";
import Inventory from "./Components/Inventory.jsx";
import Order from "./Components/Order.jsx";

function App() {

  const navigate = useNavigate('/');

  return (
    <div className="catch-of-the-day">
      <button onClick = {() => navigate('/')}>---Go Back---</button>

      <div className = "menu">
        <Header tagline = "Fresh Seafood Market"> </Header>
      </div>

      <Inventory></Inventory>

      {/* <Order></Order> */}

    </div>
  );
}

export default App;
