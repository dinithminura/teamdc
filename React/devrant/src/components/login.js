import React from "react";
import Spinner from "./spinner";
import Constant from "../config/constants";
import WebServiceHelper from "../config/webservices";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: "",
      password: "",
      showErrors: true,
      usernameError: "",
      passwordError: "",
      focus: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate = event => {
    this.setState({
      showErrors: true,
      usernameError: "",
      passwordError: ""
    });
    event.preventDefault();

    if (this.state.username != "" && this.state.password != "") {
      this.handleSubmit();
    } else {
      if (this.state.username == "") {
        this.refs.username_input.focus();
        this.setState({
          usernameError: Constant.username_error
        });
      }
      if (this.state.password == "") {
        if (this.state.username != "") {
          this.refs.password_input.focus();
        }

        this.setState({
          passwordError: Constant.password_error
        });
      }
      return false;
    }
  };

  handleSubmit = () => {
    this.setState({
      isLoading: true
    });

    WebServiceHelper.userActivate(
      this.state.username,this.state.password
    ).then(response => {
      if (response.ok) {
        this.setState({
          isLoading:false,
          showErrors: true,
          webServiceError: ""
        })
        console.log("OKKKKKK");
      } else {
        if (response.error == "INVALID_CREDENTIALS") {
          this.setState({
            isLoading:false,
            showErrors: true,
            webServiceError: "Invalid username or password"
          });  
        } else {
          this.setState({
            isLoading:false,
            showErrors: true,
            webServiceError: "Something went wrong, Please try again"
          });
        }
        
      }
    });
  };

  handleClick = () => {
    this.setState({
      showErrors: false,
      usernameError: "",
      passwordError: ""
    });
  };

  resetInputValues = () => {
    this.setState({
      isLoading: false,
      showErrors: false,
      usernameError: "",
      passwordError: "",
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className={this.props.isShowLogin ? "popup popup--open" : "popup"}>
        <div class="popup__header">
          <div
            title="Close"
            class="close layout--center"
            onClick={event => {
              this.props.handler();
              this.resetInputValues();
            }}
          >
            X
          </div>
        </div>
        <div class="popup__body layout--center">
          <div class="popup__body-inner">
            <div class="form">
              <div class="form__title">
                JOIN <span class="highlight">#</span>DEVRANT
              </div>
              <div class="form__description">
                Vote and comment on others' rants. Post your own.
              </div>

              <form name="login" onSubmit={this.validate}>
                <div class="login">
                  {!this.state.isLoading && (
                    <input
                      ref="username_input"
                      type="text"
                      placeholder="USERNAME"
                      value={this.state.username}
                      onChange={event => {
                        this.setState({ username: event.target.value });
                      }}
                      onClick={this.handleClick}
                    />
                  )}
                  {!this.state.isLoading && (
                    <input
                      ref="password_input"
                      type="password"
                      placeholder="PASSWORD"
                      value={this.state.password}
                      onChange={event => {
                        this.setState({ password: event.target.value });
                      }}
                      onClick={this.handleClick}
                    />
                  )}

                  {this.state.showErrors && !this.state.isLoading && (
                    <div>
                      <div class="form__error">{this.state.usernameError}</div>
                      <div class="form__error">{this.state.passwordError}</div>
                      <div class="form__error">{this.state.webServiceError}</div>
                    </div>
                  )}
                  {this.state.isLoading && <Spinner />}

                  <input type="submit" value="LET ME IN" disabled={this.state.isLoading}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
