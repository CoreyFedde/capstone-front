'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const user = require('./auth/user.js')
const ui = require('./auth/auth-ui.js')

$(() => {
  setAPIOrigin(location, config)
  $('#signUpForm').on('submit', user.onSignUp)
  $('#signInForm').on('submit', user.onLogIn)
  $('#changePasswordForm').on('submit', user.onChangePassword)
  $('#logOutButton').on('click', user.onLogOut)
  $('#changePasswordButton').hide()
  $('#logOutButton').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
