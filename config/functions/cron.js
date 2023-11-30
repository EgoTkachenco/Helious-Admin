"use strict";

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Every day at 1am.
   */
  "0 1 * * *": () => {
    strapi.services["quote-of-the-day"].updateRandomQuote();
  },
  // "0 * * * * *": () => {
  //   console.log("cron test");
  // },
};
