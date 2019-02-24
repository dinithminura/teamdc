import React from "react";
import Rant from "./rant";
import Spinner from "./spinner";

export default class RantList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }
  render() {
    return (
      <section class="main layout--center">
        <div class="main__content layout--wrapped">
          <div class="post-list">
            <Rant/>
            <Rant/>
            <Rant/>

            <div class="rant__add" title="Add Rant">
              +
            </div>
            {this.state.isLoading && <Spinner />}
          </div>
        </div>
      </section>
      
    );
  }
}
