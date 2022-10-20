import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().required().messages({
    message: 'Username is required',
  }),
  password: Joi.string().required().messages({
    message: 'Password is required',
  }),
});

export default userSchema;