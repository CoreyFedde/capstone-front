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
  $('#changePasswordButton').hide()
  $('#logOutButton').hide()
  $('#loanForm').on('submit', api.onCreateLoan)
  $('#getLoansButton').on('click', api.getDataArray)
  // $('#getLoansButton').on('click', function () {
  //   console.log("this is the index dataArray: ", dataArray)
  // })
  $('#graph').on('click', charts.graph)
  $('#graph').on('click', function () {
    console.log("worked")
  })
  $('#board').on('click', '.remove-button', api.onDeleteLoan)
  $('#loanUpdateForm').on('submit', api.onUpdateLoan)
  $('#board').on('click', '.update-button', api.openUpdateLoanModal)
})

// let graph = function () {
// let svg = d3.select("body").append("svg")
//           .attr("height","100%")
//           .attr("width","100%");
//
// svg.selectAll("rect")
//     .data(dataArray)
//     .enter().append("rect")
//           .attr("class", "bar")
//           .attr("height", function(d, i) {return (d * 10)})
//           .attr("width","40")
//           .attr("x", function(d, i) {return (i * 60) + 25})
//           .attr("y", function(d, i) {return 400 - (d * 10)})
//
// svg.selectAll("text")
//     .data(dataArray)
//     .enter().append("text")
//     .text(function(d) {return d})
//            .attr("class", "text")
//            .attr("x", function(d, i) {return (i * 60) + 36})
//            .attr("y", function(d, i) {return 415 - (d * 10)})
//          }
// // d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div")
//     .style("width", function(d) { return d * 10 + "px"; })
//     .text(function(d) { return d; });

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
