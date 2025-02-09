import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
        <tr>
  <td className="time">8 am</td>
  <Event event='Morning Run 'subset='Flower trail' color='green' />
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time">9 am</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <Event event='Yolk 🍳' color ='yellow'/>
  <td></td>
</tr>
<tr>
  <td className="time">10 am</td>
  <Event event='Breakfast' color='yellow' />
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time">11 am</td>
  <td></td>
  <td></td>
  <Event event='yoga class' color='pink' />
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time">12 pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time">1 pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <Event event='plant based burger🍔' subset='plant-ory'color='green' />
  <td></td>
</tr>
<tr>
  <td className="time">2 pm</td>
  <td></td>
  <Event event='pilates 🧘🏻‍♀️' subset='P tribe'color='blue' />
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time">3 pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time">4 pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time">5 pm</td>
  <td></td>
  <td></td>
  <Event event='Spin Class 🤸‍♂️' subset='Spinner Round'color='blue' />
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time">6 pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <Event event='boba with friends 🧋' subset='Tea DM'color='pink' />
</tr>
<tr>
  <td className="time">7 pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time">8 pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <Event event='Dinner datedate🍴' color='pink' />
  <td></td>
</tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar