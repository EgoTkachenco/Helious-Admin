"use strict";

module.exports = {
  async updateRandomQuote() {
    const sql = `SELECT * FROM quotes ORDER BY RAND() LIMIT 1;`;
    let result = await strapi.connections.default.raw(sql);
    if (!result[0] || !result[0][0]) return;

    const quote = result[0][0];
    const quote_of_the_day = await this.find({}, []);
    if (quote.id !== quote_of_the_day.quote) {
      await this.createOrUpdate({ quote: quote.id });
    } else {
      await this.updateRandomQuote();
    }
  },
};
