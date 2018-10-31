import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./../Grid/styles.css";

const Form = ({ restartGame, sizeX, sizeY, speed, handleSubmit, onChange, pauseGame, label }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField input type="number" name="sizeX" label="X" value={sizeX} onChange={onChange} />
      </div>
      <div>
        <TextField input type="number" name="sizeY" label="Y" value={sizeY} onChange={onChange} />
      </div>
      <div>
        <TextField input type="number" name="speed" label="Speed" value={speed} onChange={onChange} />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
      <Button variant="contained" color="primary" onClick={pauseGame}>
        {label}
      </Button>
    </form>
  );
};

export default Form;
