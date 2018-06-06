import Promise from 'bluebird'
import jQuery from 'jquery'

window.jQuery = window.$ = jQuery

// jQuery = $ = require('jquery') // eslint-disable-line no-global-assign
jQuery.cachedScript = function (url, options) {
  // Allow user to set any option except for dataType, cache, and url
  options = jQuery.extend(options || {}, {
    dataType: 'script',
    cache: true,
    url: url
  })
  // Use $.ajax() since it is more flexible than $.getScript
  // Return the jqXHR object so we can chain callbacks
  return new Promise((resolve, reject) => {
    jQuery.ajax(options).done((script, textStatus) => {
      resolve(script, textStatus)
    }).fail((jqxhr, settings, exception) => {
      reject(exception)
    })
  })
}
