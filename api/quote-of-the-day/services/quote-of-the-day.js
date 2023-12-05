"use strict";

module.exports = {
  async updateRandomQuote() {
    const sql = `SELECT * FROM quotes ORDER BY RAND() LIMIT 1;`;
    const result = await strapi.connections.default.raw(sql);
    console.log(result);
    if (!result?.rows || result.rows.length === 0) return;
    const quote = result.rows[0];
    if (!quote) return;

    const quote_of_the_day = await this.find({}, []);
    if (quote.id !== quote_of_the_day.quote) {
      await this.createOrUpdate({ quote: quote.id });
    } else {
      await this.updateRandomQuote();
    }
  },
};
