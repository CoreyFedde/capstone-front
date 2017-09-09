'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const user = require('./auth/user.js')
const authUi = require('./auth/auth-ui.js')
const api = require('./api/api.js')
const apiUi = require('./api/ui.js')
const d3 = require("d3")
const charts = require('./d3-charts.js')
const views = require('./views/views.js')
// let dataArray = api.dataArray

$(() => {
  setAPIOrigin(location, config)
  // auth
  $('#signUpForm').on('submit', user.onSignUp)
  $('#signInForm').on('submit', user.onLogIn)
  $('#changePasswordForm').on('submit', user.onChangePassword)
  $('#logOutButton').on('click', user.onLogOut)
  // Default view state
  $('#changePasswordButton').hide()
  $('#logOutButton').hide()
  $('.signed-in').hide()
  $('.loans-view').show()
  $('.loan-overview-view').hide()
  $('.loan-interest-view').hide()
  $('.loan-payment-slider-view').hide()
  // View buttons
  $('#homeButton').on('click', views.loansView)
  $('#reviewButton').on('click', views.reviewView)
  $('#interestButton').on('click', views.interestView)
  $('#paymentButton').on('click', views.paymentView)
  // CRUD
  $('#loanForm').on('submit', api.onCreateLoan)
  $('#getLoansButton').on('click', api.onGetLoans)
  // $('#graph').on('click', api.getDataArray)
  $('#loanUpdateForm').on('submit', api.onUpdateLoan)
  $('#getLoanButton').on('click', api.onGetOneLoan)
  $('#board').on('click', '.remove-button', api.onDeleteLoan)
  $('#board').on('click', '.update-button', api.openUpdateLoanModal)
  $('#reviewBoard').on('change', '.loan-select', api.onGetOneLoan)
  $('#reviewBoard').on('click', '.remove-button', api.onDeleteLoan)
  $('#reviewBoard').on('click', '.update-button', api.openUpdateLoanModal)
  $('#interestBoard').on('change', '.loan-select', api.onGetOneLoan)
  $('#interestBoard').on('click', '.remove-button', api.onDeleteLoan)
  $('#interestBoard').on('click', '.update-button', api.openUpdateLoanModal)
  $('#paymentBoard').on('change', '.loan-select', api.onGetOneLoan)
  $('#paymentBoard').on('click', '.remove-button', api.onDeleteLoan)
  $('#paymentBoard').on('click', '.update-button', api.openUpdateLoanModal)
  $('#board').on('click', '.loan-head', function () {
    $(this).parent().children('ul').toggle()
  })
  // Graphing
  $('#graph').on('click', function () {
    charts.graphPie(apiUi.pieData)
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
