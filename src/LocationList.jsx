import PropTypes from 'prop-types';
function LocationList(props)
{
    const location=props.items;
    const category=props.category;

    location.sort((a,b)=>b.days-a.days);
    const locationItem=location.map(place=><li key={place.id}>{place.name}:&nbsp;{place.days}</li>)
    
return(
            <>
                <h4>{category}</h4>
                <ol>{locationItem}</ol>
                {/* <ul>{listItems}</ul> */}
            </>);
}
LocationList.propTypes={
                    category:PropTypes.string,
                    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                                            name:PropTypes.string,
                                                            days:PropTypes.number}))
}

function CostlyList(props)
{
    const location=props.items;
    const category=props.category;
    const highdays=location.filter(place=>place.days>3);
    const listItems=highdays.map(highday=> < li key={highday.id}>{highday.name}:{highday.days}</li>)
   
    return(
        <>
            <h4>{category}</h4>
            <ul>{listItems}</ul>
        </>);
}
export  {LocationList,CostlyList};
