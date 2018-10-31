import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./../Grid/styles.css";

const Tbody = ({ counters }) =>
  counters.map((counter, counterIndex) => {
    return (
      <TableRow key={counterIndex}>
        <TableCell numeric> {counter.iteration}</TableCell>
        <TableCell numeric> {counter.isolation}</TableCell>
        <TableCell numeric> {counter.live}</TableCell>
        <TableCell numeric> {counter.overPopulation} </TableCell>
        <TableCell numeric> {counter.reproduction}</TableCell>
      </TableRow>
    );
  });

const Changelog = ({ counters }) => {
  return (
    <Paper elevation={24} className="changelog" id="changelog">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell numeric>#</TableCell>
            <TableCell numeric>Isolation</TableCell>
            <TableCell numeric>Live</TableCell>
            <TableCell numeric>Over Population</TableCell>
            <TableCell numeric>Reproduction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="changelog">
          <Tbody counters={counters} />
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Changelog;

// const TableBody = ({ counters }) =>
//   counters.map((counter, counterIndex) => (
//     <tr className="tr" key={counterIndex}>
//       <td className="td"> {counter.iteration}</td>
//       <td className="td"> {counter.isolation}</td>
//       <td className="td"> {counter.live}</td>
//       <td className="td"> {counter.overPopulation} </td>
//       <td className="td"> {counter.reproduction}</td>
//     </tr>
//   ));

// const Changelog = ({ counters }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Isolation</th>
//           <th>Live</th>
//           <th>Over Population</th>
//           <th>Reproduction</th>
//         </tr>
//       </thead>
//       <tbody className="changelog">
//         <TableBody counters={counters} />
//       </tbody>
//     </table>
//   );
// };

// export default Changelog;
