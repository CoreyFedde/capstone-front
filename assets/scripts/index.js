'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const user = require('./auth/user.js')
const authUi = require('./auth/auth-ui.js')
const api = require('./api/api.js')

$(() => {
  setAPIOrigin(location, config)
  $('#signUpForm').on('submit', user.onSignUp)
  $('#signInForm').on('submit', user.onLogIn)
  $('#changePasswordForm').on('submit', user.onChangePassword)
  $('#logOutButton').on('click', user.onLogOut)
  $('#changePasswordButton').hide()
  $('#logOutButton').hide()
  $('#loanForm').on('submit', api.onCreateLoan)
  $('#getLoansButton').on('click', api.onGetLoans)
  $('#board').on('click', '.remove-button', api.onDeleteLoan)
  $('#loanUpdateForm').on('submit', api.onUpdateLoan)
  $('#board').on('click', '.update-button', api.openUpdateLoanModal)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
