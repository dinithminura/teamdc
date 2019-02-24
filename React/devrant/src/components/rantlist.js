import React from "react";
import Rant from "./rant";
import Spinner from "./spinner";
import WebServiceHelper from "../config/webservices";
import StorageHelper from "../config/storage";

export default class RantList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      rantList: []
    };
  }

  componentDidMount() {
    this.getRantList();
  }

  getRantList = () => {
    WebServiceHelper.getRantList(StorageHelper.getLoginState()).then(
      response => {
        if (response.ok) {
          this.setState({
            isLoading: false,
            rantList: response.posts
          });
        } else {
        }
      }
    );
  };

  render() {
    
    return (
      <section class="main layout--center">
        <div class="main__content layout--wrapped">
          <div class="post-list">
            {this.state.rantList.map(item => {
              return <Rant key={item.id} votes={item.votes} displaytime={item.displayTime} content={item.content} comments={item.commentCount} myvote={item.myVote}/>;
            })}

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
