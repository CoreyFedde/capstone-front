'use strict'
const store = require('../store.js')
const config = require('../config.js')

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
const newLoan = function (data) {
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

module.exports = {
}
