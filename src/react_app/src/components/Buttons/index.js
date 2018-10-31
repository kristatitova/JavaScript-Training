import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit
//   },
//   input: {
//     display: "none"
//   }
// });

// function ContainedButtons({ pauseGame, label }) {
//   const buttonPause = ({ pauseGame, label }) => {
//     return (
//       <div>
//         <Button variant="contained" color="primary" onClick={pauseGame}>
//           {label}
//         </Button>
//       </div>
//     );
//   };

// }

const Buttons = ({ pauseGame, label }) => (
  <div>
    <Button variant="contained" color="primary" onClick={pauseGame}>
      {label}
    </Button>
  </div>
);

export default Buttons;
