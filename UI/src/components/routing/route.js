import  React, {useState, useEffect } from "react";

import { HashRouter as Router , Switch, Route } from "react-router-dom";
import DelLayout  from "../deliveryMan/lDelayout";
import Login from '../login/login'
import AdminLayout from '../admin/adminLayout'

const Routing = (props) => {


    return (<Router>
         <Switch>
     <Route exact path="/" component={Login} /> 
     <Route exact path="/deliveriman" component={DelLayout} />
     <Route exact path="/admin" component={AdminLayout} />


    </Switch>
    </Router>)
   


}


export default Routing

