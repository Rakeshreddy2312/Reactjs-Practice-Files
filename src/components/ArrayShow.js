// import { Component } from "react";

// class ArrayShow extends Component {
//   users = [
//     {
//       id: 1,
//       name: "Rakesh Reddy",
//       mail: "rakesh234@gmail.com",
//       dob: "01-01-1998",
//       add: "siddipet,telangana",
//       pincode: 506367,
//     },
//     {
//       id: 2,
//       name: "Rohith Reddy",
//       mail: "rohith123@gmail.com",
//       dob: "23-05-1997",
//       add: "hyderabad,telangana",
//       pincode: 500032,
//     },
//     {
//       id: 3,
//       name: "Ravi Kumar",
//       mail: "ravikumar098@gmail.com",
//       dob: "19-07-1999",
//       add: "nalgonda,telangana",
//       pincode: 533369,
//     },
//     {
//       id: 4,
//       name: "Maruthi Reddy",
//       mail: "nimmamaruthi@gmail.com",
//       dob: "14-02-1996",
//       add: "hyderabad,telangana",
//       pincode: 500045,
//     },
//     {
//       id: 5,
//       name: "Susruth Rao",
//       mail: "dsusruth@gmail.com",
//       dob: "23-05-2000",
//       add: "nalgonda,telangana",
//       pincode: 504260,
//     },
//     {
//       id: 6,
//       name: "Umesh Reddy",
//       mail: "umesh1122@gmail.com",
//       dob: "11-11-1998",
//       add: "rangareddy,telangana",
//       pincode: 516031,
//     },
//     {
//       id: 7,
//       name: "Prem chandh",
//       mail: "prem1501@gmail.com",
//       dob: "12-1-1998",
//       add: "vijayawada,andrapradesh",
//       pincode: 521151,
//     },
//     {
//       id: 8,
//       name: "Amarnath Reddy",
//       mail: "amar420@gmail.com",
//       dob: "22-1-1999",
//       add: "nellore,andrapradesh",
//       pincode: 524343,
//     },
//   ];
//   render() {
//     return (
//       <>
//         {/*<div>{this.add()}</div> */}
//         <h3 className="text-center"> employee_detailes</h3>
//         <table className="table table-striped table-hover  ">
//           <thead className="table-dark">
//             <tr>
//               <th>ID </th>
//               <th>NAME</th>
//               <th>MAIL ID</th>
//               <th>DOB</th>
//               <th>ADDRESS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.users.map((item) => {
//               return (
//                 <tr>
//                   <td>{item.id}</td>
//                   <td>{item.name}</td>
//                   <td>{item.mail}</td>
//                   <td>{item.dob}</td>
//                   <td>{item.add + ", " + item.pincode}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }

// export default ArrayShow;
