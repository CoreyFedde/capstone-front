'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const config = require('../config.js')
const ui = require('./auth-ui.js')
// API
const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const logOut = function () {
  return $.ajax({
    url: config.apiOrigin + `/sign-out/` + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateUser = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  signUp(data)
    .then(function (response) {
      ui.onSignUpSuccess()
      console.log('signed up')
      const authData = {
        credentials: {
          email: data.credentials.email,
          password: data.credentials.password
        }
      }
      signIn(authData)
        .then(function (data) {
          console.log('signed in through promise')
          store.user = data.user
          ui.onLogInSuccess()
        })
        .catch(ui.failure)
    })
    .catch(ui.signUpFailure)
}

const onLogIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  signIn(data)
    .then(function (data) {
      console.log('signed in')
      store.user = data.user
      ui.onLogInSuccess()
      $('.form-control').val('')
      $('.form-control').attr('placeholder', '')
      // $('#tempText').text('Nice! You logged in! Now click on New Game to start a game!')
    })
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('changed password')
  changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onLogOut = function (event) {
  event.preventDefault()
  console.log('logged out')
  logOut()
    .then(ui.onLogOutSuccess)
    .catch(ui.failure)
}
const onUpdateUser = function () {
  event.preventDefault()
  const data = getFormFields(this)
  updateUser(data)
    .then(function (data) {
      console.log('on UpdateUser worked')
    })
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePassword,
  onLogOut,
  updateUser,
  onUpdateUser
}
