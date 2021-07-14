const express = require('express');
const router = express.Router();

router.get('/:id', function (request, response)
{
  response.status(200).json({id: request.params.id})
});

module.exports = router;