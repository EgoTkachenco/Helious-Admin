"use strict";
const _ = require("lodash");

module.exports = {
  async find(ctx) {
    const entities = await strapi.services.feedback.find(ctx.query);

    return entities.map((entity) =>
      _.pick(entity, ["id", "comment", "rate", "improvements"])
    );
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.feedback.findOne({ id });
    return _.pick(entity, ["id", "comment", "rate", "improvements"]);
  },
};
