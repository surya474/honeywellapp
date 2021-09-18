import React ,{useState, useEffect} from 'react'
import socketIOClient from "socket.io-client";
import Userinfo  from './userDetails'
import CurrentLocation from '../Map/currentLocation'
import Direction from '../Map/direction'
import OrderService from '../../../services/deliveryman/orderService'
import Constants from '../../../constants/constants'
import Orders from '../../../mockdata/orders'

const CurrentOrder = (props) => {
  
      let [showDirections, setShowDirections] = useState(false)
      let [Delivered, setDelivered] = useState(false)
      let [currentOrder, setCurrentOrder] = useState(Orders[0])

      useEffect(() => {
        const socket = socketIOClient(`Constants.socketUrl/${localStorage.getItem('user')}`);
        socket.on("FromAPI", data => {
          setCurrentOrder(data);
        });

        return () => {
            socket.disconnect()
        }
    
      }, []);

      
      
      let onDeliver = () => {

        OrderService.deliveryComleted(currentOrder).then(res => console.log('delivery completed succesfully'))
        .catch(err=> {})

      }

   

   if(Delivered && !CurrentOrder){
       return (<div> No active orders</div>)
   }
   else{
    return(<>
        <Userinfo currentOrder ={currentOrder} showDirections = { () => setShowDirections(true)} stopDirections={()=> setShowDirections(false) } delivered={onDeliver}/>

        {showDirections ? <Direction currentOrder={currentOrder} /> : <CurrentLocation /> }
      </>
  )
   }
   
}


export default CurrentOrder