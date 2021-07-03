import React from 'react'
import SurplusOrDeficit from './SurplusOrDeficit'

const DaySummary = ({day}) => {
    return (
        <ul> 
            <SurplusOrDeficit day={day}/>           
            Weight: {day.pounds} lbs. <br/>
            Calories Consumed: {day.calories_consumed} <br/>
            Calories Expended: {day.calories_expended} <br/>
            Basal Metabolic Rate: {day.bmr} <br/>
            Thermic Effect of Food: {day.tef} <br/>
            Total Daily Energy Expenditure: {day.tdee} 
             
        </ul>
    )
}

export default DaySummary