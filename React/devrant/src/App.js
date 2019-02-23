import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Rant from "./components/rant";
import RantList from "./components/rantlist";
import Login from "./components/login";
import StorageHelper from "./config/storage";
import WebServiceHelper from "./config/webservices";

class App extends Component {
  constructor(props) {
    super(props);
    this.loginHandler = this.loginHandler.bind(this);
    this.loginPopupClose = this.loginPopupClose.bind(this);
    this.state = {
      isLoading: false,
      isShowLoginPopup: false
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  loginHandler = () => {
    if (StorageHelper.getLoginState()) {
      WebServiceHelper.userDeactivate().then(response => {
        if (response.ok) {
          StorageHelper.clearAll();
          this.setState(this.state);
        }
      });
    } else {
      this.setState({
        isShowLoginPopup: true
      });
      this.refs.login_popup.refs.username_input.focus();
    }
  };
  loginPopupClose = () => {
    this.setState({
      isShowLoginPopup: false
    });
  };

  render() {
    return (
      <Router>
        <div class="page">
          <Header handler={this.loginHandler} />
          <Switch>
            <Route exact path="/" component={RantList} />
            <Route exact path="/rant/:id" component={Rant} />
          </Switch>

          <Login
            isShowLogin={this.state.isShowLoginPopup}
            handler={this.loginPopupClose}
            ref="login_popup"
          />
          {/* <!-- Start of Rant Details Page--> */}
          {/* <!-- ======================= --> */}

          {/* <!-- <div class="rant-details layout--center">

            <section class="post-hero">
                <div class="post-hero__inner">
                    <div class="score">
                        <div class="score__up layout--center">++</div>
                        <div class="score__board layout--center">100</div>
                        <div class="score__down layout--center">--</div>
                    </div>
                    <div class="post-hero__body">
                        <div class="profile">
                            <div class="profile__picture">
                                <svg height="36" width="36">
                                    <circle cx="18" cy="18" r="18" fill="#5c5f6f" />
                                </svg>
                            </div>
                            <div class="profile__name">
                                Elon
                            </div>
                        </div>
                        <div class="post__details">
                            Lorem ipsum                                    
                        </div>
                    </div>
                </div>
                <div class="post-hero__footer">
      <div class="post-hero__delete">DELETE</div>
                    <div class="post-hero__time">2m ago</div>
                </div>
            </section>

            <section class="comments layout--center">

                <h1 class="comments__title"><span>#</span>Comments</h1>

                <section class="comment">
                    <div class="comment__inner">
                        <div class="comment__body">
                            <div class="profile">
                                <div class="profile__picture">
                                    <svg height="36" width="36">
                                        <circle cx="18" cy="18" r="18" fill="#5c5f6f" />
                                    </svg>
                                </div>
                                <div class="profile__name">
                                    Elon
                                </div>
                            </div>
                            <div class="post__details">
                                Lorem ipsum 
                                <br />
                            </div>
                        </div>
                    </div>
                    <div class="comment__footer">
        <div class="comment__delete">DELETE</div>
                        <div class="comment__time">2m ago</div>
                    </div>
                </section>

            </section>

            <div class="rant__comment layout--center" title="Comment">
                <svg class="icon" viewBox="0 0 31 32" width="100%" height="100%">
                    <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                    0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                    8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                    3.922-2.61 7.23-6.186 8.294z"></path>
                </svg>
            </div>

        </div> --> */}

          {/* <!-- ======================= --> */}
          {/* <!-- End of Main Section --> */}
        </div>
      </Router>
    );
  }
}

export default App;
