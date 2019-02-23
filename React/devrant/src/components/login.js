import React from "react";
import Spinner from "./spinner";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: "",
      password: "",
      showErrors: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closePopup = () => {
    this.setState({});
  };

  validate = () => {
    return true;
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.validate) {
      console.log("PASS");
      this.setState({
        isLoading: true
      });
    } else {
      console.log("Failed");
    }
  };

  handleBlur = () => {
    this.setState({
      showErrors: false
    });
  };

  render() {
    return (
      <div className={this.props.isShowLogin ? "popup popup--open" : "popup"}>
        <div class="popup__header">
          <div
            title="Close"
            class="close layout--center"
            onClick={this.props.handler}
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
              {!this.state.isLoading && (
                <form name="login" onSubmit={this.handleSubmit}>
                  <div class="login">
                    <input
                      ref="username_input"
                      type="text"
                      placeholder="USERNAME"
                      value={this.state.username}
                      onChange={event => {
                        this.setState({ username: event.target.value });
                      }}
                      onBlur={this.handleBlur}
                    />
                    <input
                      ref="password_input"
                      type="password"
                      placeholder="PASSWORD"
                      value={this.state.password}
                      onChange={event => {
                        this.setState({ password: event.target.value });
                      }}
                      onBlur={this.handleBlur}
                    />

                    {this.state.isLoading && <Spinner />}
                    {this.state.showErrors && (
                      <div>
                      <div class="form__error">Some fields are missing !</div>
                      <div class="form__error">Some fields are missing !</div>
                      </div>
                    )}

                    <input type="submit" value="LET ME IN" />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
