'use strict';

var Request = require('./request'),
    template = require('../template'),
    util = require('./util');

module.exports = function(options) {
  var requestData = template.mkcalendar({ props: options.props });

  function transformRequest(xhr) {
    util.setRequestHeaders(xhr, options);
  }

  return new Request({
    method: 'MKCALENDAR',
    requestData: requestData,
    transformRequest: transformRequest
  });
};
