import Constant from "./constants";

var ApiUtils = {
  checkStatus: function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else if (response.status == 401) {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};

const webServiceHelper = {
  sampleCall: () => {
    return fetch(Constant.sampleCall)
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(e => e);
  },
  userActivate: (username, password) => {
    return fetch(Constant.base_url + Constant.api_user_activate , {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(e => e);
  }
};

export default webServiceHelper;
