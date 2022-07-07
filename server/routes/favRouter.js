const router = require('express').Router();
const { Card } = require('../db/models');

router.get('/', async (req, res) => {
  const result = await Card.findAll({ raw: true });
  res.json(result)
});

router.post('/', async (req, res) => {
  try {
    const { imageURL, comment } = req.body;
    const [currFav, created] = await Card.findOrCreate({
      where: { imageURL: req.body.imageURL },
      defaults: { imageURL, comment },
    });
    if (!created) {
      res.json({ created: 'error' });
    } else {
      res.json({ currFav });
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
