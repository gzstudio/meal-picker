import React from 'react'
import Spinner from './component/Spinner'

class Home extends React.Component {
    constructor() {
        super();
        this.places = ['Thai', 'Italian', 'Japanese', 'Brazillian', 'Mexican', 'Fastfood', 'Chinese', 'Pizza', 'Healthy'];
      }
      
      render(props) {
        return (
            <div className="App">
              <h1>What should I eat for {props.mealTime} </h1>
              <Spinner items={this.places} />
            </div>
          );

      }
}

export default Home;