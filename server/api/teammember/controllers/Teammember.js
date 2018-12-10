'use strict';

/**
 * Teammember.js controller
 *
 * @description: A set of functions called "actions" for managing `Teammember`.
 */

module.exports = {

  /**
   * Retrieve teammember records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.teammember.search(ctx.query);
    } else {
      return strapi.services.teammember.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a teammember record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.teammember.fetch(ctx.params);
  },

  /**
   * Count teammember records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.teammember.count(ctx.query);
  },

  /**
   * Create a/an teammember record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.teammember.add(ctx.request.body);
  },

  /**
   * Update a/an teammember record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.teammember.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an teammember record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.teammember.remove(ctx.params);
  },

  /**
   * Add relation to a/an teammember record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.teammember.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an teammember record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.teammember.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an teammember record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.teammember.removeRelation(ctx.params, ctx.request.body);
  }
};
