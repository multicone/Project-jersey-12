const servers = require('./servers.js');
const components = require('./components.js');
const tags = require('./tags.js');
const users = require('./users/index.js');
const basicInfo = require('./basicInfo');

module.exports = { ...basicInfo, ...servers, ...components, ...tags, ...users };
