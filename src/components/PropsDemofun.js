import React, { useState } from "react";

const PropsDemofun = ({ userlist }) => {
  const [state, setState] = useState(userlist);

  let [sum, calcSum] = useState();
  const sumSalary = () => {
    state.reduce((start, item) => {
      return (sum = start + item.id);
    }, 0);

    calcSum(sum);
  };
  //sumSalary();
  const addUser = () => {
    const newUser = [{ id: 9, name: "ameerpet" }];
    setState([...state, ...newUser]);
    sumSalary();
  };
  const delItem = (id) => {
    const newarr = state.filter((item, indx) => {
      return item.id !== id;
    });
    setState([...newarr]);
    sumSalary();
  };

  console.log(state);
  return (
    <div>
      <h3>PropsDemofunction Component</h3>
      <strong>userlist length is--{userlist.length}</strong>
      <ul>
        {state.map((item) => {
          return (
            <li key={item.id} type="none">
              <button onClick={() => delItem(item.id)}>delete</button>
              {item.id + "." + item.name}
            </li>
          );
        })}
      </ul>
      <button onClick={addUser}>click to add user</button>
      <br />
      <button onClick={sumSalary}>click to get total salary</button>

      <p>total salry is- {sum}</p>
    </div>
  );
};

export default PropsDemofun;
