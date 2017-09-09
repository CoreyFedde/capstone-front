'use strict'
const store = require('../store.js')
const config = require('../config.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

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

let dataArray = []

const getDataArray = function (event) {
  // dataArray = []
  getLoans()
    .then(function (data) {
      // console.log("dataArray: ", dataArray)
      // console.log("Access to dataArray?", dataArray)
      // console.log("data:", data)
      // console.log("fourth data:", data.loans[4])
      // console.log("fourth data principal", data.loans[4].principal)
      for (var i = 0; i < data.loans.length; i++) {
        let dataPoint = data.loans[i].principal
        // console.log("dataPoint:", dataPoint)
        dataArray.push(dataPoint)
      }
    })
}

const onGetLoans = function (event) {
  getLoans()
    .then(ui.onGetLoansSuccess)
}

const onGetOneLoan = function (data) {
  getOneLoan(this.value)
    .then(ui.onGetLoanSuccess)
}

const onCreateLoan = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  createLoan(data)
    .then(function (data) {
      console.log('on create loan worked')
    })
}

const onDeleteLoan = function (data) {
  deleteLoan(this.dataset.id)
    .then(() => {
    })
}

// const onUpdateLoan = function () {
//   event.preventDefault()
//   console.log('this', this)
//   const data = getFormFields(this)
//   console.log('data', data)
//   updateLoan(data)
//     .then(function (data) {
//       console.log('on update loan worked')
//     })
// }
const openUpdateLoanModal = function () {
  const loanName = $(this).attr('data-loanNameUpdateInput')
  const loanLender = $(this).attr('data-lenderUpdateInput')
  const loanPrincipal = $(this).attr('data-principalUpdateInput')
  const loanInterest = $(this).attr('data-interestUpdateInput')
  const loanLength = $(this).attr('data-lengthUpdateInput')
  const loanStart = $(this).attr('data-dateUpdateInput')
  const loanMinimum = $(this).attr('data-minimumUpdateInput')
  const loanCurrent = $(this).attr('data-currentPaymentUpdateInput')
  const loanId = $(this).attr('data-id')
  $('#loanNameUpdateInput').val(loanName)
  $('#lenderUpdateInput').val(loanLender)
  $('#principalUpdateInput').val(loanPrincipal)
  $('#interestUpdateInput').val(loanInterest)
  $('#lengthUpdateInput').val(loanLength)
  $('#dateUpdateInput').val(loanStart)
  $('#minimumUpdateInput').val(loanMinimum)
  $('#currentPaymentUpdateInput').val(loanCurrent)
  $('#fileId').text(loanId)
  // $('#updateSubmit').data(id, fileId)
}

const onUpdateLoan = function (event) {
  const id = $('#fileId').text()
  const data = getFormFields(event.target)
  event.preventDefault()
  updateLoan(data, id)
    .then(() => { console.log('udpated') })
}

module.exports = {
  dataArray,
  getDataArray,
  getLoans,
  getOneLoan,
  createLoan,
  deleteLoan,
  updateLoan,
  onGetLoans,
  onGetOneLoan,
  onCreateLoan,
  onDeleteLoan,
  onUpdateLoan,
  openUpdateLoanModal
}
