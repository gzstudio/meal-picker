import React from 'react';
import Axios from 'axios';




class searchLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            location: "",
            longitude: "",
            latitude: "",
            street_number: "",
            street_name: "",
            suburb: "",
            region: "",
            formatted_address: "",
            myLocLong: "",
            myLocLat: "",
            resolvedLoc: "",
            resolvedSuburb: "",
            entity_id: "",
            entity_type: "",
            searchResult: "",
            restaurant_name: [],
            restaurant_location: [],
            restaurant_photo: [],
            cuisines_available: [],
            selected_category: "Takeaway",
            }
            
        
        this.googleApi = "AIzaSyAnhc0QVawRAJP9z0c07bkJCp8wyoai_gk"
        this.handleChangeStreetNo = this.handleChangeStreetNo.bind(this);
        this.handleChangeStreetName = this.handleChangeStreetName.bind(this);
        this.handleChangeSuburb = this.handleChangeSuburb.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
        
        console.log(props)

    }

    handleChangeStreetNo(e) {
        this.setState({street_number: e.target.value})
    }
    handleChangeStreetName(e) {
        this.setState({street_name: e.target.value})
    }
    handleChangeSuburb(e) {
        this.setState({suburb: e.target.value})
    }
    handleChangeState(e) {
        this.setState({region: e.target.value})
    }

    drawMap() {
        let mapDiv = document.createElement("div");
        let mapSrc = "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&maptype=roadmap&markers=${this.state.address}&key=AIzaSyAnhc0QVawRAJP9z0c07bkJCp8wyoai_gk";

        
    }






    handleSubmit(e) {

        const address = `${ this.state.street_number }${this.state.street_name.replace(/\s/g,"+")},+${this.state.suburb.replace(/\s+/g, '+')},+${this.state.region.replace(/\s+/g, '+')}`;
        Axios(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${this.googleApi}`)
             .then(response => {
                 const locationData = response.data;
                 const longitude = locationData.results[0].geometry.location.lng;
                 const latitude = locationData.results[0].geometry.location.lat;
                 const formatted_address = locationData.results[0].formatted_address;
                 this.setState({longitude: longitude})
                 this.setState({latitude: latitude})
                 this.setState({formatted_address: formatted_address})

             },

             Axios({
                method:"GET",
                url: `https://developers.zomato.com/api/v2.1/locations?query=${this.state.region}&lat=${this.state.latitude}&lon=${this.state.longitude}`,
                headers: {
                  "user-key": "ac7e711aadc63ab23f578cab5c3051d4",
                  "content-type": "application/json"
                }
              })
              .then(response => {
                const entity_id = response.data.location_suggestions[0].entity_id;
                const entity_type = response.data.location_suggestions[0].entity_type;
    
                this.setState({entity_id:entity_id})
                this.setState({entity_type:entity_type})
                console.log(entity_id);
                console.log(entity_type);
            })


             )
            



        console.log(`${this.state.latitude},${this.state.longitude}`);


       



        e.preventDefault()

    }


    

    







    
    render() {
        return (

            <div className="main-container">
            <h1>input your address manually</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Street no </label>
              <input
                type="text"
                name="street_no"
                onChange={this.handleChangeStreetNo}
              />

              <label>Street Name </label>
              <input
                type="text"
                name="street_name"
                onChange={this.handleChangeStreetName}
              />

              <label>Suburb/City</label>
              <input
                type="text"
                name="suburb"
                onChange={this.handleChangeSuburb}
              />

              <label>State</label>
              <input 
                type="text" 
                name="state" 
                onChange={this.handleChangeState} 
              />

              <input type="submit" value="Submit" />

              <br />

              <div style={{
                  color: "red",
                  height: "500px",
                  width: "500px",
                  border: "red solid 5px"
                }}>
                  {/* <img src="https://maps.googleapis.com/maps/api/staticmap?center=276Chisholm+road,Auburn+nsw&zoom=13&size=300x300&maptype=roadmap&markers=276Chisholm+road,Auburn+nsw&key=AIzaSyAnhc0QVawRAJP9z0c07bkJCp8wyoai_gk" alt="map description"/> */}
              </div>

              {/* <div
                style={{
                  color: "red",
                  height: "100px",
                  width: "500px",
                  border: "red solid 5px"
                }}
              >
                <h4>
                  longitude: {this.state.longitude} <br /> latitude:
                  {this.state.latitude} <br />
                  {this.state.formatted_address}
                </h4>
              </div> */}
            </form>
                
            </div>
        )
    }
}



export default searchLocation;

