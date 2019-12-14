import React from 'react'
import Axios from 'axios'
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
                   const resInformation = response.data;
                   this.setState({cuisine_info: resInformation})
                   console.log(this.state.cuisine_info)
               })
               .catch(error => {   
                 console.log(error);
               });
      
    
        }
    render(){
        return(
            <div>
                <p>hello from CuisineInfo</p>
            </div>
        )
    }
}