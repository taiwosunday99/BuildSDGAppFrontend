import React, { Component } from 'react'
import estimator from './../estimator';

 class FrontendDesign extends Component {
   state = {
     population: "",
     time: "",
     reportedCases: "",
     hospitalBeds: "",
     period: "",
   };

   handleChange = (e) => {
     this.setState({
       [e.target.id]: e.target.value,
     });

   };

   handleSubmit = (e) => {
     e.preventDefault();

     console.log(this.state);
     const inputData = {
         ...this.state,
   region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 4,
      avgDailyIncomePopulation: 0.73
    }
     }
     const estimates = estimator(inputData);
     console.log(estimates);
   };
   render() {
     return (
       <div className="container">
         <form onSubmit={this.handleSubmit} className="white">
           <h5>Estimator UI</h5>
           <label for="population">Population</label>
           <div className="input-field">
             <input
               type="number"
               placeholder="data-population"
               id="population"
               data-population
               onChange={this.handleChange}
             />
           </div>
           <label for="time">Time Elapse</label>
           <div className="input-field">
             <input
               type="number"
               placeholder="data-time-to-elapse"
               id="time"
               data-time-to-elapse
               onChange={this.handleChange}
             />
           </div>
           <label for="reportedCases">Reported Cases</label>
           <div className="input-field">
             <input
               type="number"
               placeholder="data-reported-cases"
               id="reportedCases"
               data-reported-cases
               onChange={this.handleChange}
             />
           </div>
           <label for="hospitalBeds">Hospital Beds</label>
           <div className="input-field">
             <input
               type="number"
               placeholder="data-total-hospital-beds"
               id="hospitalBeds"
               data-total-hospital-beds
               onChange={this.handleChange}
             />
           </div>
           <label for="period">Select Period</label>
           <select
             className="browser-default"
             id="period"
             data-period-type
             onChange={this.handleChange}
           >
             <option value="days">Days</option>
             <option value="weeks">Weeks</option>
             <option value="months">Months</option>
           </select>
           <div className="input-field">
             <button className="btn waves-effect waves-light" data-go-estimate>
               Submit Data
             </button>
           </div>
         </form>
       </div>
     );
   }
 }

export default FrontendDesign;
