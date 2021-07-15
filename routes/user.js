const express = require('express');
const pool = require('../helpers/database');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/:id', async function (request, response)
{
  try {
    const sqlQuery =
      'SELECT id, name, email, password, created_at FROM users WHERE id=?';
    const rows = await pool.query(sqlQuery, request.params.id);
    response.status(200).json(rows);
  } catch (error) {
    response.status(400).send(error.message);
  }
  // response.status(200).json({id: request.params.id}) 
});

router.post('/register', async function (request, result)
{
  try
  {
    const { name, email, password } = request.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const sqlQuery =
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const res = await pool.query(sqlQuery, [name, email, encryptedPassword]);
    result.status(200).json(res);
  } catch (error) {
    result.status(400).send(error.message);
  }
});

module.exports = router;