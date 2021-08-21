function validate(schema) {
  return function (req, res, next) {
    const { error } = schema.validate({
      header: req.headers,
      body: req.body,
      query: req.query,
    })

    if (error) return res.status(400).json({ errors: error.details })
    else {
      next()
    }
  }
}

module.exports = {
  validate,
}
