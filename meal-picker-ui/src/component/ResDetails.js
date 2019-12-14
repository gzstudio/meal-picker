import React from 'react'
import Axios from 'axios'
import Navigation from './Navigation'
import './ResDetails.css'


export default class ResDetails extends React.Component{
   
   state={
       res_info:[]
   }
   
    async componentDidMount(){
        const url_key = 'ce01c524c280392f934d5bb8228b2277'
        await Axios({
           method: "GET",
           url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.id}`,
           headers: {
             "user-key": url_key,
             "content-type": "application/json"
           }
         })
           .then(response => {
               const resInformation = response.data;
               this.setState({res_info: resInformation})
               console.log(this.state.res_info)
           })
           .catch(error => {   
             console.log(error);
           });
  

      }
    render(){
        // if(this.state.res_info !== null){
        //     const photos = this.state.res_info.map(e => {
        //         console.log(e.photos)
        //     })
        // }
        return(
            <React.Fragment>
            <Navigation />
            <div className="container-fluid gal-holder no-gutters">
                <div className="row no-gutters">
                <div className="col-6"><img className="img-fluid" src={this.state.res_info.featured_image} /></div>
                <div className="col-3 no-gutters">
                <div className="col-12"><img className="img-fluid" src={this.state.res_info.featured_image} /></div>
                <div className="col-12"><img className="img-fluid" src={this.state.res_info.featured_image} /></div>
                </div>
                <div className="col-3 no-gutters">
                <div className="col-12"><img className="img-fluid" src={this.state.res_info.featured_image} /></div>
                <div className="col-12"><img className="img-fluid" src={this.state.res_info.featured_image} /></div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p>{this.state.res_info.cuisines}</p>
                        <h1>{this.state.res_info.name}</h1>
                        <p>{this.state.res_info.highlights}</p>
                        <h3>Opening Hours</h3>
                        {this.state.res_info.timings}
                    </div>
                    <div className="col-6">
                        {/* <p>{this.state.res_info.location.address}</p> */}
                    </div>
                </div>
                
            </div>
            </React.Fragment>
        )
    }
}

