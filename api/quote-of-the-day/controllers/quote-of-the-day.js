"use strict";
const _ = require("lodash");

module.exports = {
  async find(ctx) {
    let entity = await strapi.services["quote-of-the-day"].find({}, [
      "quote",
      "quote.preview",
    ]);
    entity = entity.quote;
    entity.preview = entity.preview?.url || "";
    return _.pick(entity, ["text", "preview"]);
  },
};
