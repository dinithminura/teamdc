
const localStorageHelper = {
    setUsername: (username) => {        
        localStorage.setItem('username', username);    
    },
    getUsername: () => {
        var name = localStorage.getItem('username');
        return name;
    },
    setUserToken:(token) => {        
        localStorage.setItem('token', token);    
    },
    getUserToken: () => {
        var token = localStorage.getItem('token');
        return token;
    },
    setLoginState:() => {        
        localStorage.setItem('isLogin', true);    
    },
    getLoginState: () => {
        var isLogin = localStorage.getItem('isLogin');
        return isLogin;
    }
}


export default localStorageHelper;