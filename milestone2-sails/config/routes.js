/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //'/': { view: 'pages/homepage' },
  '/': 'person/index',
  'GET /person/create':'PersonController.create',
  'POST /person/create':'PersonController.create',
  'GET /person/view/:id': 'PersonController.view',
  'GET /person/update/:id': 'PersonController.update',
  'POST /person/update/:id': 'PersonController.update',
  '/person/admin': 'PersonController.admin',
  'GET /person/search': 'PersonController.search',

  
  'GET /person/:id/rent': 'PersonController.populate',
  'GET /user/login':'UserController.login', 
  'POST /user/login': 'UserController.login',
  'POST /user/logout': 'UserController.logout',

  'DELETE /person/:id': 'PersonController.delete',
  

  'GET /user/logout': 'UserController.logout',
  'GET /user/rent': 'UserController.populate',
  'GET /user/add/:fk': 'UserController.add',
  'POST /user/add/:fk': 'UserController.add',
  'GET /user/remove/:fk': 'UserController.remove',
  'POST /user/remove/:fk': 'UserController.remove',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
