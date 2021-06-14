import React from "react";

class Football extends React.Component {
    shoot = (a) => {
      alert(a);
      /*
      The 'this' keyword refers to the component object
      */
    }
    render() {
      return (
        <button onClick={() => this.shoot("Goal!")}>Take the shot!</button>
      );
    }
  }
export default Football;  