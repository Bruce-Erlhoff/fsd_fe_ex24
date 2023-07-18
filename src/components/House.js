const House = (props) => {
    console.log(props.houses);
    const myhouses = props.houses;
    if (props.houses.length === 0) {
        return <p>Loading...</p>;
      }
    return (      
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="bg-primary text-light">Featured House</h2>
                </div>
            </div>
           
            <div className="row row-custom-left">
                <div className="col-sm-12">
                   <h4> County: {myhouses[0].county}  </h4>
                </div>
            </div>
           
            <div className="row row-custom-left">
                <div className="col-sm-12">
                    <h4> Address: {myhouses[0].address}</h4>
                </div>
            </div>

            <div className="row row-custom-left">
                <div className="col-sm-12">
                    <h4>Price: $ {myhouses[0].price} USD </h4>
                </div>
            </div>
           
            <div className="row">
                <div className="col-sm-12">
                    <img className="w-100" src={`images/${myhouses[0].photo}`} alt="house here" />
                </div>
            </div>
        </div>
     );
}
 
export default House;
