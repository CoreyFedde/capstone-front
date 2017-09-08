'use strict'

const loansView = function () {
  $('.loans-view').show()
  $('.loan-overview-view').hide()
  $('.loan-interest-view').hide()
  $('.loan-payment-slider-view').hide()
}

const reviewView = function () {
  $('.loans-view').hide()
  $('.loan-overview-view').show()
  $('.loan-interest-view').hide()
  $('.loan-payment-slider-view').hide()
}

const interestView = function () {
  $('.loans-view').hide()
  $('.loan-overview-view').hide()
  $('.loan-interest-view').show()
  $('.loan-payment-slider-view').hide()
}

const paymentView = function () {
  $('.loans-view').hide()
  $('.loan-overview-view').hide()
  $('.loan-interest-view').hide()
  $('.loan-payment-slider-view').show()
}
module.exports = {
  loansView,
  reviewView,
  interestView,
  paymentView
}
