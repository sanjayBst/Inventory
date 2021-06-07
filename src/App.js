
import Header from './components/Header';
import AddInventory from './components/AddInventory';
import {Fragment} from 'react';

function App() {
  return (
    <Fragment>
    <Header title = "Inventory"/>
    <AddInventory />
    </Fragment>
  );
}

export default App;
