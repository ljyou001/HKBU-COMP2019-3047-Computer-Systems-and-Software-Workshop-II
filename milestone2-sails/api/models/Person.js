/**
 * Person.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: "string"
    },
    
    image: {
      type: "string"
    },

    estate: {
      type: "string"
    },

    bedrooms: {
      type: "number"
    },

    grossarea:{
      type: "number"
    },

    tenants:{
      type: "number"
    },

    rent:{
      type: "number"
    },
    
    highlighted: {
      type: "string"
    },

    includes: {
      collection: 'User',
      via: 'rents'
    }

  },

};

