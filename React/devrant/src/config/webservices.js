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
  sampleCall2: () => {
    return fetch(Constant.sampleCall, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .then( responseJson => {
        return true;
      })
      .catch(e => e);
  }
};

export default webServiceHelper;
