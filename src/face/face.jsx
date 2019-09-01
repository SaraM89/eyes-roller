import React, { Component } from "react";
import styles from "./face.module.scss";
import PropTypes from "prop-types";
import faceShea from "./static/Shea.png";
import left from "./static/left.png";
import right from "./static/right.png";

class Face extends Component {
  // object containing any properties related to component state
  state = {
    isFaceUp: true
  };

  // setState allows us to update state indirectly
  handleClick = () => {
    this.setState({
      isFaceUp: !this.state.isFaceUp
    });
  };

  /*
    render function describes what the UI will look like using JSX.
  */
  render() {
    const leftEyeStyles = this.state.isFaceUp
      ? {}
      : { transform: `rotate(${this.props.leye}deg)` };

    const rightEyeStyles = this.state.isFaceUp
      ? {}
      : { transform: `rotate(${this.props.reye}deg)` };

    return (
      <div className={styles.face} onClick={this.handleClick}>
        <img className={styles.picture} src={faceShea} alt="right eye" />

        <img
          className={`${styles.reye} `}
          src={right}
          style={leftEyeStyles}
          alt="right eye"
        />

        <img
          className={styles.leye}
          style={rightEyeStyles}
          src={left}
          alt="right eye"
        />
      </div>
    );
  }
}

// Using propTypes to define the data types for
// the props object passed to the card component

Face.propTypes = {
  leye: PropTypes.number.isRequired,
  reye: PropTypes.number.isRequired
};

export default Face;
