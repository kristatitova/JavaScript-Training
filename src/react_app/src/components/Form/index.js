import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
//import ReactProvider from "../../main_app/providers/ReactProvider";
import "./../Grid/styles.css";
//import Provider from "./../Provider/index.js";

const Form = ({ restartGame, sizeX, sizeY, speed, handleSubmit, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField input name="sizeX" label="X" value={sizeX} onChange={onChange} />
      </div>
      <div>
        <TextField input name="sizeY" label="Y" value={sizeY} onChange={onChange} />
      </div>
      <div>
        <TextField input name="speed" label="Speed" value={speed} onChange={onChange} />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     this.setState({
//       sizeX: "",
//       sizeY: "",
//       speed: ""
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <label>
//             size X:
//             <input name="Size X" value={this.state.sizeX} onChange={this.handleChange.bind(this)} />
//           </label>
//           <label>
//             size Y:
//             <input name="Size Y" value={this.state.sizeY} />
//           </label>
//           <label>
//             Speed:
//             <input name="Speed" value={this.state.speed} />
//           </label>
//           <button onClick={e => this.onSubmit(e)}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;
