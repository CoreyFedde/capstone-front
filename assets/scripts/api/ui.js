'use strict'
const store = require('../store')
const loansTemplate = require('../templates/show-loans.handlebars')

const onGetLoansSuccess = function (data) {
  // console.log("onGetLoansSuccess data:", data)
  const loansHtml = loansTemplate({ loans: data.loans })
  $('#board').append(loansHtml)
  $('#board').show()
}

module.exports = {
  onGetLoansSuccess
}
