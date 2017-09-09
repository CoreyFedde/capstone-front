'use strict'
const store = require('../store')
const loansTemplate = require('../templates/show-loans.handlebars')
const loanSelectTemplate = require('../templates/loan-select.handlebars')

const onGetLoansSuccess = function (data) {
  // console.log("onGetLoansSuccess data:", data)
  const loanSelectHtml = loanSelectTemplate({ loans: data.loans })
  const loansHtml = loansTemplate({ loans: data.loans })
  $('#board').append(loansHtml)
  // $('#board').show()
  $('#reviewBoard').prepend(loanSelectHtml)
  $('.loan-info').hide()
}

module.exports = {
  onGetLoansSuccess
}
