import React from "react";

export default class Rant extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <article class="post">
        <div class="post__inner">
          <div class="score">
            <div class={this.props.myvote == 1? "score__up layout--center checked" : "score__up layout--center" }>++</div>
            <div class="score__board layout--center">{this.props.votes}</div>
            <div class={this.props.myvote == -1? "score__down layout--center checked": "score__down layout--center"}>--</div>
          </div>
          <div class="post__body">{this.props.content}</div>
        </div>
        <div class="post__footer">
          <div class="post__time">{this.props.displaytime}</div>
          <div class="post__comments">
            <svg class="icon" viewBox="0 0 31 32">
              <path
                d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                3.922-2.61 7.23-6.186 8.294z"
              />
            </svg>
            {this.props.comments}
          </div>
        </div>
      </article>
    );
  }
}
