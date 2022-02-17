const res = require('express/lib/response');
//const jwt = require('jsonwebtoken');
const { LikesModel } = require('../models');
// Revisar función
const createLike = async (req, res) => {
    const { itemId } = req.body
    if (!itemId) {
        return res.status(400).send({ message: 'No pudiste votar' });
    }
    try {

      const body = { name, itemId };
      const likeMovie = await LikesModel.create(itemId)
      if (likeMovie) {
        return res.status(201).send({ message: 'ok!', likeMovie})
      }
    } catch (err) {
        return res
        .status(500)
        .send({ message: 'No es posible votar ahora!', error: err.message });
    };
}

const deleteLike = async (req, res) => {
      const { itemId } = req.body
      if (!itemId) {
          return res.status(400).send({ message: 'No se pudo borrar' });
      }
      try {
        const body = { itemId };
        const dislikeMovie = await LikesModel.deleteOne(itemId)
        if (likeMovie) {
          return res.status(201)
        }
      } catch (err) {
          return res
          .status(500)
          .send({ message: 'No pudiste borrarlo, chato', error: err.message });
      };
}



module.exports = { createLike, deleteLike }
