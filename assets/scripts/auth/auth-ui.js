'use strict'
const store = require('../store.js')
const api = require('./../api/api.js')

const onSignUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  $('.form-control').val('')
  $('.form-control').attr('')
}
const onLogInSuccess = (data) => {
  api.getDataArray()
  api.onGetLoans()
  $('.signed-in').show()
  $('.signed-out').hide()
  $('#signInModal').modal('hide')
  $('#signUpModal').modal('hide')
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#signInButton2').hide()
  $('#signUpButton2').hide()
  $('.cover').hide()
  $('#changePasswordButton').show()
  $('#logOutButton').show()
  $('.poster-board').show()
  $('.create-list-box').show()
  $('.form-control').val('')
  $('.form-control').attr('placeholder', '')
  $('#instructions').text('Never run out of movie ideas again!')
  $('html, body').animate({
    scrollTop: $('#listStart').offset().top
  }, 1000)
}
const onChangePasswordSuccess = (data) => {
  $('.form-control').val('')
  $('.form-control').attr('placeholder', '')
  $('#changePasswordModal').modal('hide')
}
const onLogOutSuccess = (data) => {
  clear()
  $('.signed-in').hide()
  $('.signed-out').show()
  $('.form-control').val('')
  $('.form-control').attr('placeholder', '')
  $('#signInButton').show()
  $('#signUpButton').show()
  $('#signInButton2').show()
  $('#signUpButton2').show()
  $('.cover').show()
  $('#changePasswordButton').hide()
  $('#logOutButton').hide()
  $('.poster-board').hide()
  $('.create-list-box').hide()
  $('#headerBox').removeClass('highlight')
  $('#changingText').text('Your Indie_List')
}

const failure = () => {
  $('.form-control').val('')
}

const signUpFailure = () => {
  $('.form-control').val('')
  $('.signUpFormElement').attr('placeholder', 'Oops! Please try again.')
}

const signInFailure = () => {
  $('.form-control').val('')
  $('.signInFormElement').attr('placeholder', 'Oops! Please try again.')
}

const changePasswordFailure = () => {
  $('.form-control').val('')
  $('.changePasswordFormElement').attr('placeholder', 'Oops! Please try again.')
}
const clear = function () {
  $('#board').empty()
}
module.exports = {
  onSignUpSuccess,
  onLogInSuccess,
  onChangePasswordSuccess,
  onLogOutSuccess,
  failure,
  signUpFailure,
  signInFailure,
  changePasswordFailure,
  clear
}
