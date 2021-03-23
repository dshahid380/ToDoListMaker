class AuthenticationService{
    registerSuccessfulLogin(username){
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        if(sessionStorage.getItem('authenticatedUser') !==null) 
            return true 
        return false 
    }
}

export default new AuthenticationService()