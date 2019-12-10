import React from 'react'
import Spinner from './component/Spinner'
import Axios from 'axios'

class Home extends React.Component {
    constructor() {
        super();
        this.places = ['Thai', 'Italian', 'Japanese', 'Brazillian', 'Mexican', 'Fastfood', 'Chinese', 'Pizza', 'Healthy'];
        this.state = {
            cousineName: []
        }
      }
      
      componentDidMount () {
        const url_key = '7a0bd3849072d2062b7589cf8c8ab6e3'
        Axios({
           method: "GET",
           url: `https://developers.zomato.com/api/v2.1/cuisines?city_id=260`,
           headers: {
             "user-key": url_key,
             "content-type": "application/json"
           }
         })
           .then(response => {
               const cuisineName = response.data.cuisines;
               this.setState({cousineName: cuisineName})
               console.log(cuisineName)
           })
           .catch(error => {   
             console.log(error);
           });
   }

      render(props) {
        return (
            <div className="App">
              <h1>What should I eat for ? </h1>
              <Spinner items={this.places} />
            </div>
          );

      }
}

export default Home;