import React from 'react';
import ChildO from './components/ChildO';
import { ListAObject } from './components/ListAObject';
import { Greet } from './components/Greet';
import { ListObj } from './components/ListObj';
import { Button } from './components/Button';
import { Nice } from './components/Nice';
import { LogFor } from './components/LogFor';
import { Auth } from './components/Auth';
import { TypeAsertion } from './components/TypeAsertion';
import { Reduce } from './components/Reduce';
function App() {
  const newVal = {
    first: "Pawan",
    last: "Upadhayay"
  }
  const listName = [{
    first: "Pawan",
    last: "Upadhayay"
  }, {
    first: "rawan",
    last: "ssjjs"
  }, {
    first: "wan",
    last: "yay",
  }]
  return (
    <div className="App">
      <Greet name='Pawan' age={14} isLoggedIn={false} />
      <ChildO> This can also hold the components over here </ChildO>
      <ListObj newVal={newVal} />
      <ListAObject value={listName} />
      <Button HandleClick={(e) => console.log("Hello i am clicked hai", e)} />
      <Nice styles={{ border: "2px solid green" }} />
      <LogFor />
      <Auth />
      <TypeAsertion />
      <Reduce />

    </div>
  );
}

export default App;
