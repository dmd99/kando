import React from "react";

class HomeSection extends React.Component {
  render() {
      const color = "#FFDE65";
    return (
      <>
        <div className="mt-4 pt-4 ">
          <div id="main" className="row shadow rounded mx-auto">
            <img id="mainImage" alt="..." className="col-sm-6 p-0" src={this.props.src} />
            <div style={{"backgroundColor":{color}}} className="col-sm-6">
              <h4 className="text-center my-2">{this.props.brand}</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HomeSection;
