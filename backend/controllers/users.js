import User from '../models/user.js'

export const index = (req, res, next) => {
    User.findOne({ _id: req.query.id }).lean().exec((err, user) => {
        return res.send({...user});
    });
  };