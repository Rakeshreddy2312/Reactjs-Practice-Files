import React from "react";
import ComponentA from "./ComponentA";
import ComponentClass from "./ComponentClass";
export const userContext = React.createContext("");
export const cityContext = React.createContext("");
const App1 = () => {
  const username = "RAKESH REDDY EKKIREDDY";
  const city = "HYDERABAD";
  return (
    <userContext.Provider value={username}>
      <cityContext.Provider value={city}>
        <div>
          <ComponentA />
          <hr />
          <ComponentClass />
        </div>
      </cityContext.Provider>
    </userContext.Provider>
  );
};
export default App1;
