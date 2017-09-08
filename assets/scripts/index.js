'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const user = require('./auth/user.js')
const authUi = require('./auth/auth-ui.js')
const api = require('./api/api.js')
const d3 = require("d3")
const charts = require('./d3-charts.js')
// let dataArray = api.dataArray

$(() => {
  setAPIOrigin(location, config)
  $('#signUpForm').on('submit', user.onSignUp)
  $('#signInForm').on('submit', user.onLogIn)
  $('#changePasswordForm').on('submit', user.onChangePassword)
  $('#logOutButton').on('click', user.onLogOut)
  $('#random').on('click', function () {
    console.log("anything")
  })
  $('#changePasswordButton').hide()
  $('#logOutButton').hide()
  $('.signed-in').hide()
  $('#loanForm').on('submit', api.onCreateLoan)
  $('#getLoansButton').on('click', api.onGetLoans)
  // $('#graph').on('click', api.getDataArray)
  $('#graph').on('click', charts.graph)
  $('#board').on('click', '.remove-button', api.onDeleteLoan)
  $('#loanUpdateForm').on('submit', api.onUpdateLoan)
  $('#board').on('click', '.update-button', api.openUpdateLoanModal)
})

// let dataArray = [10, 2]
// // var arcs = d3.pie()(data);
//
// // margin
// let margin = {top: 20, right: 20, bottom: 20, left: 20},
//   width = 500 - margin.right - margin.left,
//   height = 500 - margin.top - margin.bottom,
//   radius = width/2;
//
// // color range
// let color = d3.scaleOrdinal()
//     .range(["#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2"]);
//
// // pie chart arc. Need to create arcs before generating pie
// let arc = d3.arc()
//     .outerRadius(radius - 10)
//     .innerRadius(0);
//
// // donut chart arc
// let arc2 = d3.arc()
//     .outerRadius(radius - 10)
//     .innerRadius(radius - 100);
//
// // arc for the labels position
// let labelArc = d3.arc()
//     .outerRadius(radius - 40)
//     .innerRadius(radius - 40);
//
// // generate pie chart and donut chart
// let pie = d3.pie()
//     .sort(null)
//     .value(function(d) { return d; });
//
// // define the svg for pie chart
// let svg = d3.select("#visualizations").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
//
// // define the svg donut chart
// let svg2 = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
//
//
// // svg.selectAll(".arc")
// //     .data(pie(data))
// //     .enter().append("g")
// //     .attr("class", "arc");
//
//   // "g element is a container used to group other SVG elements"
//   let g = svg.selectAll(".arc")
//       .data(pie(dataArray))
//       .enter().append("g")
//       .attr("class", "arc");
//
//   // append path
//   g.append("path")
//       .attr("d", arc)
//       .style("fill", function(d) { return color(d.data); })
//     // transition
//     .transition()
//       .ease(d3.easeLinear)
//       .duration(2000)
//       .attrTween("d", tweenPie);
//
//   // append text
//   g.append("text")
//     .transition()
//       .ease(d3.easeLinear)
//       .duration(2000)
//     .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
//       .attr("dy", ".35em")
//       .text(function(d) { return d.data; });

  // import data
  // d3.csv("../../data.csv", function(error, data) {
  //   if (error) throw error;

      // parse data
      // data.forEach(function(d) {
      //     d.count = +d.count;
      //     d.fruit = d.fruit;
      // })
    // "g element is a container used to group other SVG elements"
  // let g2 = svg2.selectAll(".arc2")
  //     .data(pie(dataArray))
  //   .enter().append("g")
  //     .attr("class", "arc2");

   // append path
  // g2.append("path")
  //     .attr("d", arc2)
  //     .style("fill", function(d) { return color(d.data); })
  //   .transition()
  //     .ease(d3.easeLinear)
  //     .duration(2000)
  //     .attrTween("d", tweenDonut);

   // append text
  // g2.append("text")
  //   .transition()
  //     .ease(d3.easeLinear)
  //     .duration(2000)
  //   .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
  //     .attr("dy", ".35em")
  //     .text(function(d) { return d.data; });

// });

// Helper function for animation of pie chart and donut chart
function tweenPie(b) {
  b.innerRadius = 0;
  let i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
  return function(t) { return arc(i(t)); };
}

function tweenDonut(b) {
  b.innerRadius = 0;
  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
  return function(t) { return arc2(i(t)); };
}
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
