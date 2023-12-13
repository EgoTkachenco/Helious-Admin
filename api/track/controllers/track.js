"use strict";
const _ = require("lodash");

module.exports = {
  async find(ctx) {
    const entities = await strapi.services.track.find(ctx.query);

    return entities.map((entity) => {
      entity.preview = entity.preview?.url || "";
      entity.audio = entity.audio?.url || "";
      entity.audio_male = entity.audio_male?.url || "";
      entity.audio_female = entity.audio_female?.url || "";
      entity.video = entity.video?.url || "";
      entity.category = entity.category?.id;
      return _.pick(entity, [
        "id",
        "name",
        "preview",
        "audio",
        "audio_male",
        "audio_female",
        "video",
        "category",
      ]);
    });
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.track.findOne({ id });
    entity.preview = entity.preview?.url || "";
    entity.audio = entity.audio?.url || "";
    entity.audio_male = entity.audio_male?.url || "";
    entity.audio_female = entity.audio_female?.url || "";
    entity.video = entity.video?.url || "";
    entity.category = entity.category.id;
    return _.pick(entity, [
      "id",
      "name",
      "preview",
      "audio",
      "audio_male",
      "audio_female",
      "video",
      "category",
    ]);
  },
};
