const UserStatus = (props) => {
    if(props.isLoggedIn && props.isAdmin){
        return <h5>Welcome, Admin</h5>
    }else{
        return <h5>Welcome, Guest</h5>
    }
}

export default UserStatus;