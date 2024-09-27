import PropTypes from 'prop-types'
function Contact(props)
{
    return(
        <div className="contactList">
            <p>Name: {props.name}</p>
            <p>Phone Number: {props.phn}</p>
            <p>Available Now: {props.isavailable?"Yes":"No"}</p>
        </div>
    );
}
Contact.propTypes={
    name:PropTypes.string,
    phn:PropTypes.number,
    isavailable:PropTypes.bool,
};
Contact.defaultProps={
    name:"Guide",
    phn:9999999999,
    isavailable:false,
};
export default Contact