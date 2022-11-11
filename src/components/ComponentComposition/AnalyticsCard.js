/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '../../CanvasJSReact/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class AnalyticsCard extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Simple Column Chart with Index Labels"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ x: 10, y: 71 },
					{ x: 20, y: 55 },
					{ x: 30, y: 50 },
					{ x: 40, y: 65 },
					{ x: 50, y: 71 },
					{ x: 60, y: 68 },
					{ x: 70, y: 38 },
					{ x: 80, y: 92, indexLabel: "Highest" },
					{ x: 90, y: 54 },
					{ x: 100, y: 60 },
					
				]
			}]
		}
		
		return (
		<div style={{height:'80%',overflow:'auto'}}>
			<CanvasJSChart options = {options} style={{height:'90%',overflow:'hidden'}}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}