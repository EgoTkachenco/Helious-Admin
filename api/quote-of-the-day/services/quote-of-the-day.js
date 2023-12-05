"use strict";

module.exports = {
  async updateRandomQuote() {
    const sql = `SELECT * FROM quotes ORDER BY RAND() LIMIT 1;`;
    let result = await strapi.connections.default.raw(sql);
    result = result.toJSON();
    console.log(result);
    if (!result[0]) return;
    const quote = result[0];
    console.log(quote);
    if (!quote) return;

    const quote_of_the_day = await this.find({}, []);
    if (quote.id !== quote_of_the_day.quote) {
      await this.createOrUpdate({ quote: quote.id });
    } else {
      await this.updateRandomQuote();
    }
  },
};
