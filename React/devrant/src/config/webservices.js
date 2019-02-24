import Constant from "./constants";
import StorageHelper from "./storage";

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
  
  userActivate: (username, password) => {
    return fetch(Constant.base_url + Constant.api_user_activate, {
      method: "POST",
      headers: {
        Accept: "application/json",
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
  },
  userDeactivate: () => {
    return fetch(Constant.base_url + Constant.api_user_deactivate, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Token": StorageHelper.getUserToken()
      }
    })
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(e => e);
  },

  getRantList: (isLogin) => {
    if (isLogin) {
      console.log("call get list with login");
      return fetch(Constant.base_url + Constant.api_get_rantlist, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Token": StorageHelper.getUserToken()
        }
      })
        .then(ApiUtils.checkStatus)
        .then(response => response.json())
        .then(responseJson => {
          return responseJson;
        })
        .catch(e => e);
    } else {
      console.log("call get list without");
      return fetch(Constant.base_url + Constant.api_get_rantlist, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(ApiUtils.checkStatus)
        .then(response => response.json())
        .then(responseJson => {
          return responseJson;
        })
        .catch(e => e);
    }
    
  },
};

export default webServiceHelper;
