const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes(); //eslint-disable-line

routes.add('/menus', 'menus');
