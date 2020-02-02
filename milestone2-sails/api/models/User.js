/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username: {
      type: "string",
      unique: true,
      required: true
    },

    password: {
      type: "string",
      required: true
    },

    role: {
      type: 'string',
      enum: ['admin', 'client'],
      defaultsTo: 'everyone'
    },

    rents: {
      collection: 'Person',
      via: 'includes'
    },

  },

  customToJSON: function () {
    return _.omit(this, ['password'])
  },

};

