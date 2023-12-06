"use strict";
const _ = require("lodash");

module.exports = {
  async find(ctx) {
    const entities = await strapi.services.category.find(ctx.query);

    return entities.map((entity) => {
      entity.preview = entity.preview?.url || "";
      return _.pick(entity, ["id", "name", "preview"]);
    });
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.category.findOne({ id });
    entity.preview = entity.preview?.url || "";
    entity.tracks = entity.tracks.map((track) => {
      track.preview = track.preview?.url || "";
      return _.pick(track, ["id", "name", "preview"]);
    });
    return _.pick(entity, ["id", "name", "preview", "tracks"]);
  },
};
