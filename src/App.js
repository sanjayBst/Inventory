
import Header from './components/Header';
import AddInventory from './components/AddInventory';
import { Fragment, useState } from 'react';
import ListInventory from './components/ListInventory';


function App() {
  const dummyInventory = [
    {
      ram: "4 GB",
      processor: "i5",
      id: 1
    },
    {
      ram: "8 GB",
      processor: "i9",
      id: 2
    },
    {
      ram: "2 GB",
      processor: "i3",
      id: 3
    }
  ]

  const [inventory, setInventory] = useState(dummyInventory);

  const onAddToInventory = (item) => {
    setInventory((prevState) => {
      return [...prevState,
               item]
    })
  }




  return (
    <Fragment>
      <Header title="Inventory" />
      <AddInventory onAddToInventor={onAddToInventory} />
      <ListInventory inventory={inventory} />
    </Fragment>
  );
}

export default App;
