const Payments = require('../models/payments')
require('dotenv').config()
const stripe = require('stripe')(process.env.API_KEY);

const PaymentsController = {

  Index: (req, res) => {
    Payments.find({ paid: false }).exec((err, payments) => {
      if (err) {
        throw err;
      }
      res.json({
        payments: payments
      })
    });
  },

  CreateInvoice: (req, res) => {
    const item = {
      title: req.body.title,
      price: req.body.price,
      paid: false
    };
    const payment = new Payments(item)
    payment.save((err) => {
      if (err) {
        throw err;
      }
      res.status(200)
    })
  },

  Pay: async (req, res) => {
    let successUrl;
    if (process.env.REACT_APP_HEROKU_TEST_URL) {
      successUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/payments/update`; // change to cancel url when made
    } else {
      successUrl = "http://localhost:9000/backend/payments/update"; // change to success url when made
    }

    let cancelUrl;
    if (process.env.REACT_APP_HEROKU_TEST_URL) {
      cancelUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}`; // change to cancel url when made
    } else {
      cancelUrl = "http://localhost:3000/noticeboard"; // change to cancel url when made
    }

    const sessions = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: req.params.title,
            },
            unit_amount: req.params.price,
          },
          quantity: 1,
        }
      ],
      mode: 'payment',
      success_url: `${successUrl}/${req.params.id}`,
      cancel_url: cancelUrl,
    });
    res.redirect(303, sessions.url)
  
  },

  PayAll: async (req, res) => {
    let successUrl;
    if (process.env.REACT_APP_HEROKU_TEST_URL) {
      successUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/payments/updatemany`; // change to cancel url when made
    } else {
      successUrl = "http://localhost:9000/backend/payments/updatemany"; // change to success url when made
    }

    let cancelUrl;
    if (process.env.REACT_APP_HEROKU_TEST_URL) {
      cancelUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}`; // change to cancel url when made
    } else {
      cancelUrl = "http://localhost:3000/noticeboard"; // change to cancel url when made
    }

    const sessions = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "All",
            },
            unit_amount: req.params.price,
          },
          quantity: 1,
        }
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
    res.redirect(303, sessions.url)
  },

  Update: (req,res) => {
    let redirectUrl;
    if (process.env.REACT_APP_HEROKU_TEST_URL) {
      redirectUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}/payments`; // change to cancel url when made
    } else {
      redirectUrl = "http://localhost:3000/payments"; // change to success url when made
    }

    Payments.updateOne(
      { _id: req.params.id },
      { paid: true },
      {},
      (err, payment) => {
        if (err) {
          throw err;
        }
        res.redirect(303, redirectUrl)
      }
    )
  },


  UpdateMany: (req,res) => {
    let redirectUrl;
    if (process.env.REACT_APP_HEROKU_TEST_URL) {
      redirectUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}/payments`; // change to cancel url when made
    } else {
      redirectUrl = "http://localhost:3000/payments"; // change to success url when made
    }
    Payments.updateMany(
      {},
      { "$set": { paid: true }},
      {},
      (err, payment) => {
        if (err) {
          throw err;
        }
        res.redirect(303, redirectUrl)
      }
    )
  },
}

module.exports = PaymentsController