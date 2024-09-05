import React from 'react'

export default function Footer() {
  return (
    <div>

        <table cellpadding="0" cellspacing="0">
            <tr>
              <th width="600px"><img src={ require("../asstes/media/images/logo1.png")}  width="200px" height="200px" alt=""/></th>
              <th width="200px">INFORMATION</th>
              <th width="200px">QUICK LINKS</th>
              <th width="200px">IMPORTANT LINKS</th>
              <th width="300px">FOLLOW US ON</th>
            </tr>
            <tr>
                <td rowspan="6"> The smallest countryside, a beautiful childhood was my past. it is<br/> a glorious experience but remains like the memory of a past lofe.
                    <br/><p>Dedicated Help Center(IST 9:30 AM TO 6:00 PM)</p><h3>080-35038296</h3>Add:Aziz Nagar, Chikur Road, Beside HP Petrol Bunk, Hyderabad,<br/> Telangana
                </td>
                <td>Custom Service</td>
                <td>About Us</td>
                <td>Refund Policy</td>
                <td>Facebook</td>
            </tr>
            <tr>
                <td>F.A.Q.'S</td>
                <td>Contact Us</td>
                <td>Privacy Policy</td>
                <td>Twitter</td>
             </tr>
             <tr>
                <td></td>
                <td>Ordering Tracking</td>
                <td>Tearms of Service</td>
                <td>Youtube</td>
             </tr>
             <tr>
                <td></td>
                <td></td>
                <td>Shipping Policy</td>
                <td>Insatgram</td>
             </tr>
        </table>
      
    </div>
  )
}
