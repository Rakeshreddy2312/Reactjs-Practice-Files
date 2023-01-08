import React from "react";

const Section = ({ state }) => {
  //console.log(state);
  return (
    <>
      <table className="table  table-hover table-striped  text-center ">
        <thead className="bg-success">
          <tr>
            <th>ID </th>
            <th>Name of User</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {state &&
            state.map((item, indx) => {
              return (
                <tr key={indx}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.company.name}</td>
                  <td>
                    city: {item.address.city}
                    <br /> zipcode: {item.address.zipcode}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Section;
