"use strict";
const _ = require("lodash");

module.exports = {
  async find(ctx) {
    const entity = await strapi.services["about-us"].find();
    return _.pick(entity, ["title", "description"]);
  },
};
