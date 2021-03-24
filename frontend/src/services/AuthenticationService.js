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

    getLoggedInUsername(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) 
            return ''
        return user 
    }
}

export default new AuthenticationService()