import React from "react";

 function Home(){
    return(<>


  <img src={ require("../asstes/media/images/homepage.jpg")}  width="100%" alt=""/>
  <br/>
  <br/>

  <table align="center" cellpadding="0" cellspacing="20"  >
    <tr>
        <th width="400"> Safe Payments<br/>100% secure payments</th>
        <th width="400">Shop With Confidence<br/>Safe and Secure Environment</th>
        <th width="400">Dedicate Help Center<br/>IST 9:30AM to 6:00PM</th>
    </tr>
  </table>
  <br/>

  <table cellpadding="0" cellspacing="20">
    <tr>
        <th><img src={ require("../asstes/media/images/banner1.jpg")}  width="100%" alt=""/></th>
        <th><img src={ require("../asstes/media/images/banner2.jpg")} width="100%"alt=""/></th>
        <th><img src={ require("../asstes/media/images/banner3.jpg")} width="100%"alt=""/></th>
    </tr>
  </table>
    
    
    
    
    
    
    </>);




 }
 export default Home;