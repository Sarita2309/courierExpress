import React, { Component } from 'react';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import CourierDetails from './containers/courierDetails/courierDetails'

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/courierDetails' component={CourierDetails}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
