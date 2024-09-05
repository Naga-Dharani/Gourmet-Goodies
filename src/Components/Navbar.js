import React, { Component } from "react";
import logo from "../asstes/media/images/logo1.png"

class Navbar extends Component{
    render(){
        return(<>
        <table cellpadding="10" cellspacing="0" >
            <tr bgcolor="772A2A"  >
                <th width="1000"> Aziz Nagar, Chilkur Road, Beside Hp Petrol Bunk, Hyderabad, Telangana, India 500075</th>
                <th  width="200">Choose Country: INDIA</th>
                <th  width="100">My Account</th>
                <th  width="200">My Wish List(0)</th>
                <th  width="100">Sign in</th>

            </tr>
        </table>
        

        


        <table cellpadding="0" cellspacing="0" >
          <tr bgcolor="772A2A" >
            <th width="10"><img src={logo} alt="" width="300px" height="150px"/></th>
            <th  width="400">New Order&Customer Support<br/>080-35038296</th>
            <th  width="1000"><form><input type="text" ></input></form></th>
          </tr>
        </table>

        <table cellpadding="10" cellspacing="0">
            <tr bgcolor="772A2A">
                <th width="300">SHOP BY DEPARTMENT</th>
                <th width="200">HOME</th>
                <th width="200">SHOP</th>
                <th width="200">ABOUT US</th>
                <th width="200">BLOG</th>
                <th width="200">CONTACT</th>
                <th width="300">MY ACCOUNT</th>
        
            </tr>
        </table>


        
        
        
        </>);
    }
}
export default Navbar;