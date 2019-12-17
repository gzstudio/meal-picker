import React from 'react'
import Axios from 'axios'
import Navegation from './Navigation'
import Card from './Card'
import { Link } from '@reach/router'
export default class CuisineInfo extends React.Component{
    state ={
        cuisine_info: []
    }

    
        async componentDidMount(){
            const url_key = 'ce01c524c280392f934d5bb8228b2277'
            await Axios({
               method: "GET",
               url: `https://developers.zomato.com/api/v2.1/search?entity_id=260&entity_type=city&cuisines=${this.props.id}&sort=rating&order=asc`,
               headers: {
                 "user-key": url_key,
                 "content-type": "application/json"
               }
             })
               .then(response => {
                   const resInformation = response.data.restaurants;
                   this.setState({cuisine_info: resInformation})
                   console.log(this.state.cuisine_info)
               })
               .catch(error => {   
                 console.log(error);
               });

    
        }
    render(){
        const getResult = this.state.cuisine_info.map(e =>{
            return e.restaurant
        })
        const getInfo = getResult.map((r) =>  <div className="col-4" key={r.id}>
        <Link to={'/restaurant/'+ r.id}><Card  resturant_title={r.name} cuisine={r.cuisines} location_name={r.location.address}
         card_img={r.featured_image} /></Link>
        </div> )
        return(
            <div>
                <Navegation />
                <h1>Search Results</h1>
                <div className="row">
                    {getInfo}
                </div>
            </div>
        )
    }
}