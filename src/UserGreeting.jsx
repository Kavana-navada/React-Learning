import propTypes from 'prop-types';
function UserGreeting(props){
        if(props.isloggedin)
        {
           return ( <h2 className="welcome-msg">Hi {props.name}</h2>);
        }
        else
        {
            return(<h2 className="welcome-msg" style={{backgroundColor:'red'}}>Please log in to continue</h2>)
        }
   
}
UserGreeting.proptypes={
    isloggedin:propTypes.bool,
    name:propTypes.string,
}
UserGreeting.defaultProps={
    isloggedin:false,
    name:"Guest",
}
export default UserGreeting