'use strict'
const store = require('../store')
const loansTemplate = require('../templates/show-loans.handlebars')
const loanTemplate = require('../templates/show-loan.handlebars')
const loanSelectTemplate = require('../templates/loan-select.handlebars')

const onGetLoansSuccess = function (data) {
  // console.log("onGetLoansSuccess data:", data)
  const loanSelectHtml = loanSelectTemplate({ loans: data.loans })
  const loansHtml = loansTemplate({ loans: data.loans })
  $('#board').append(loansHtml)
  // $('#board').show()
  $('#reviewBoard').prepend(loanSelectHtml)
  $('#interestBoard').prepend(loanSelectHtml)
  $('#paymentBoard').prepend(loanSelectHtml)
  $('.loan-info').hide()
}

const onGetLoanSuccess = function (data) {
  const loanHtml = loanTemplate({ loan: data.loan })
  $('#reviewBoard').append(loanHtml)
  $('#interestBoard').append(loanHtml)
  $('#paymentBoard').append(loanHtml)
  $('.loan-info').hide()
}

module.exports = {
  onGetLoansSuccess,
  onGetLoanSuccess
}
