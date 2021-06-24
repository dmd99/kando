import React from "react";
import cx from "classnames";
import "./app.scss"
import Collapse from "@kunukn/react-collapse";

class Details extends React.Component {
  state = {
    isOpen1: false,
    spy3: {}
  };

  render() {
    
    //   const description = product.description;
    return (
      <div style={{display: "inline", width:'fit-content'}} className="app">
        <button
          className={cx("btn btn-link btn-sm mr-2", {"app__toggle--active": this.state.isOpen1})}
          onClick={() => this.toggle(1)}
        >
          <span className="app__toggle-text">Détails</span>
        </button>
        <Collapse
          isOpen={this.state.isOpen1}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen1 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content">
          </div>
        </Collapse>
      </div>
    );
  }

  toggle = index => {
    let collapse = "isOpen" + index;

    this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
  };
}

export default Details;
