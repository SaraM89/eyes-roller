import React, { Component } from "react";
import styles from "./face.module.scss";
import PropTypes from "prop-types";
import faceShea from "./static/Shea.png";
import left from "./static/left.png";
import right from "./static/right.png";

// Class containing JSX & methods associated with the card component

class Face extends Component {
  // object containing any properties related to component state
  state = {
    isFaceUp: true
    // leftEyeA: 0,
    // rightEyeA: 0
  };

  // setState allows us to update state indirectly
  handleClick = () => {
    this.setState({
      isFaceUp: !this.state.isFaceUp
      // leftEyeA: this.props.leye,
      // rightEyeA: this.props.reye
    });
  };

  /*
    render function describes what the UI will look like using JSX.
  */
  render() {
    const leftEyeStyles = this.state.isFaceUp
      ? {}
      : { transform: `rotate(${this.props.leye}deg)` };
    // transform: `rotate(0deg)`

    const rightEyeStyles = this.state.isFaceUp
      ? {}
      : { transform: `rotate(${this.props.reye}deg)` };
    // transform: `rotate(0deg)`
    // let leftEyeA = 0;
    // let rightEyeA = 0;

    // if (this.state.isFaceUp == true) {
    //   leftEyeA = 0;
    //   rightEyeA = 0;
    // } else {
    //   leftEyeA = this.props.leye;
    //   rightEyeA = this.props.reye;
    // }

    return (
      <div className={styles.face} onClick={this.handleClick}>
        <img className={styles.picture} src={faceShea} alt="right eye" />

        <img
          className={`${styles.reye} `}
          src={right}
          style={leftEyeStyles}
          // style={{
          //   transform: `rotate(${this.state.leftEyeA}deg)`,
          //   transform: `rotate(${rotateStyle}deg)`
          // }}

          alt="right eye"
        />

        <img
          className={styles.leye}
          // style={{ transform: `rotate(${this.state.rightEyeA}deg)` }}
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
