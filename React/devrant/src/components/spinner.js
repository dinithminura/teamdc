import React from "react";

export default class Spinner extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="loader">
        <div class="spinner" />
      </div>
    );
  }
}
