'use strict'
const store = require('../store.js')
const config = require('../config.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const getLoans = function () {
  return $.ajax({
    url: config.apiOrigin + '/loans/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getOneLoan = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/loans/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createLoan = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/loans/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteLoan = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/loans/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateLoan = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/loans/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const onGetLoans = function (event) {
  getLoans()
    .then(function (data) {
      console.log('on get loans worked')
    })
}

const onGetOneLoan = function (event) {
  getOneLoan()
    .then(function (data) {
      console.log('on get one loan worked')
    })
}

const onCreateLoan = function (event) {
  console.log('this', this)
  event.preventDefault()
  const data = getFormFields(this)
  console.log('data', data)
  createLoan(data)
    .then(function (data) {
      console.log('on create loan worked')
    })
}

const onDeleteLoan = function (data) {
  deleteLoan(this.id)
    .then(() => {
      console.log('on delete loan worked')
    })
}

const onUpdateLoan = function () {
  event.preventDefault()
  console.log('this', this)
  const data = getFormFields(this)
  console.log('data', data)
  updateLoan(data)
    .then(function (data) {
      console.log('on update loan worked')
    })
}

module.exports = {
  getLoans,
  getOneLoan,
  createLoan,
  deleteLoan,
  updateLoan,
  onGetLoans,
  onGetOneLoan,
  onCreateLoan,
  onDeleteLoan,
  onUpdateLoan

}
