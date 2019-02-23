import React from "react";

export default class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section class="header layout--center">
        <div class="header__content layout--wrapped">
          <div class="brand">
            <a href="/">
              <div class="brand__name">
                <span>#</span>DEVRANT
              </div>
            </a>
          </div>

          {/* <!-- User Profile --> */}
          {/* <div class="profile layout--center">
            <div class="profile__picture">
              <svg height="36" width="36">
                <circle cx="18" cy="18" r="18" fill="#5c5f6f" />
              </svg>
            </div>
            <div class="profile__name">Elon</div>
          </div> */}

          <div class="join" onClick={this.props.handler}>
            <span>Join</span>
            {/* <span>Sign Out</span> */}
          </div>
        </div>
      </section>
    );
  }
}
