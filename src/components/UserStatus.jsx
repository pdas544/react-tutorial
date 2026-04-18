const UserStatus = ({isLoggedIn, isAdmin}) => {
    if(isLoggedIn && isAdmin){
        return <h5>Welcome, Admin</h5>
    }else{
        return <h5>Welcome, Guest</h5>
    }
}

export default UserStatus;