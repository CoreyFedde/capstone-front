'use strict'
const store = require('../store')
const loansTemplate = require('../templates/show-loans.handlebars')
const loanTemplate = require('../templates/show-loan.handlebars')
const loanSelectTemplate = require('../templates/loan-select.handlebars')
const chart = require('../d3-charts.js')

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

let pieData = []

const onGetLoanSuccess = function (data) {
  const loanHtml = loanTemplate({ loan: data.loan })
  $('#reviewBoard').append(loanHtml)
  $('#interestBoard').append(loanHtml)
  $('#paymentBoard').append(loanHtml)
  $('.loan-info').hide()
  getPieData(data)
}

const getPieData = function (data) {
  let dataPoint = data.loan.principal
  let secondDataPoint = data.loan.total_interest
  pieData.push(dataPoint)
  pieData.push(secondDataPoint)
  console.log(pieData)
}

module.exports = {
  onGetLoansSuccess,
  onGetLoanSuccess,
  pieData
}
