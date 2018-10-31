import React, { Component } from "react";

import ReactProvider from "./../../main_app/providers/ReactProvider";
import GameOfLife from "./../../main_app/app/GameOfLife";

import Changelog from "./../Changelog";
import Grid from "./../Grid";
import Form from "./../Form";

export default class Provider extends Component {
  state = { grid: [], counters: [], label: "Pause", paused: false, sizeX: {}, sizeY: {}, speed: {} };

  componentDidMount = () => {
    this.provider = new ReactProvider(this);
    this.game = new GameOfLife({
      provider: this.provider,
      sizeX: 50,
      sizeY: 50,
      speed: 100
    });
    this.setState({ sizeX: this.game.sizeX, sizeY: this.game.sizeY, speed: this.game.speed });
    this.game.start();
  };

  onIteration = (grid, counter) => {
    const { counters } = this.state;
    counters.length > 5 && counters.pop();
    this.setState({ grid, counters: [counter, ...counters] });
  };

  pauseGame = () => {
    if (this.state.paused) {
      this.setState({ paused: false, label: "Pause" });
      this.game.start();
    } else {
      this.setState({ paused: !false, label: "Continue" });
      this.game.pause();
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { sizeX, sizeY, speed } = this.state;
    this.restartGame(sizeX, sizeY, speed);
  };

  restartGame = (sizeX, sizeY, speed) => {
    const config = {
      provider: new ReactProvider(this),
      sizeX: parseInt(sizeX),
      sizeY: parseInt(sizeY),
      speed: parseInt(speed)
    };
    this.game.restart(config);
  };

  render() {
    const { grid, counters, sizeX, sizeY, speed } = this.state;
    return (
      <>
        <Grid grid={grid} />
        <Changelog counters={counters} />
        <Form
          restartGame={this.restartGame}
          sizeX={sizeX}
          sizeY={sizeY}
          speed={speed}
          handleSubmit={this.handleSubmit}
          onChange={this.onChange}
          pauseGame={this.pauseGame}
          label={this.state.label}
        />
      </>
    );
  }
}
