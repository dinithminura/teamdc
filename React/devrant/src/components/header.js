import React from "react";
import StorageHelper from "../config/storage";

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
          {StorageHelper.getLoginState() && (
            <div class="profile layout--center">
              <div class="profile__picture">
                <svg height="36" width="36">
                  <circle cx="18" cy="18" r="18" fill="#5c5f6f" />
                </svg>
              </div>
              <div class="profile__name">{StorageHelper.getUsername()}</div>
            </div>
          )}

          <div class="join" onClick={this.props.handler}>
            {StorageHelper.getLoginState() && <span>Sign Out</span>}
            {!StorageHelper.getLoginState() && <span>Join</span>}
          </div>
        </div>
      </section>
    );
  }
}
