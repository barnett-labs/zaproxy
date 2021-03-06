/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright the ZAP development team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';

/**
 * This file was automatically generated.
 */
function Core(clientApi) {
  this.api = clientApi;
}

/**
 * Gets the alert with the given ID, the corresponding HTTP message can be obtained with the 'messageId' field and 'message' API method
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.alert = function (id, callback) {
  this.api.request('/core/view/alert/', {'id' : id}, callback);
};

/**
 * Gets the alerts raised by ZAP, optionally filtering by URL and paginating with 'start' position and 'count' of alerts
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.alerts = function (baseurl, start, count, callback) {
  this.api.request('/core/view/alerts/', {'baseurl' : baseurl, 'start' : start, 'count' : count}, callback);
};

/**
 * Gets the number of alerts, optionally filtering by URL
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.numberOfAlerts = function (baseurl, callback) {
  this.api.request('/core/view/numberOfAlerts/', {'baseurl' : baseurl}, callback);
};

/**
 * Gets the name of the hosts accessed through/by ZAP
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.hosts = function (callback) {
  this.api.request('/core/view/hosts/', callback);
};

/**
 * Gets the sites accessed through/by ZAP (scheme and domain)
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.sites = function (callback) {
  this.api.request('/core/view/sites/', callback);
};

/**
 * Gets the URLs accessed through/by ZAP
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.urls = function (callback) {
  this.api.request('/core/view/urls/', callback);
};

/**
 * Gets the HTTP message with the given ID. Returns the ID, request/response headers and bodies, cookies and note.
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.message = function (id, callback) {
  this.api.request('/core/view/message/', {'id' : id}, callback);
};

/**
 * Gets the HTTP messages sent by ZAP, request and response, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.messages = function (baseurl, start, count, callback) {
  this.api.request('/core/view/messages/', {'baseurl' : baseurl, 'start' : start, 'count' : count}, callback);
};

/**
 * Gets the number of messages, optionally filtering by URL
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.numberOfMessages = function (baseurl, callback) {
  this.api.request('/core/view/numberOfMessages/', {'baseurl' : baseurl}, callback);
};

/**
 * Gets ZAP version
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.version = function (callback) {
  this.api.request('/core/view/version/', callback);
};

/**
 * Gets the regular expressions, applied to URLs, to exclude from the Proxy
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.excludedFromProxy = function (callback) {
  this.api.request('/core/view/excludedFromProxy/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.homeDirectory = function (callback) {
  this.api.request('/core/view/homeDirectory/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.stats = function (keyprefix, callback) {
  this.api.request('/core/view/stats/', {'keyPrefix' : keyprefix}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionHttpStateEnabled = function (callback) {
  this.api.request('/core/view/optionHttpStateEnabled/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionUseProxyChain = function (callback) {
  this.api.request('/core/view/optionUseProxyChain/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionProxyChainName = function (callback) {
  this.api.request('/core/view/optionProxyChainName/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionProxyChainPort = function (callback) {
  this.api.request('/core/view/optionProxyChainPort/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionProxyChainSkipName = function (callback) {
  this.api.request('/core/view/optionProxyChainSkipName/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionUseProxyChainAuth = function (callback) {
  this.api.request('/core/view/optionUseProxyChainAuth/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionProxyChainRealm = function (callback) {
  this.api.request('/core/view/optionProxyChainRealm/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionProxyChainUserName = function (callback) {
  this.api.request('/core/view/optionProxyChainUserName/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionProxyChainPassword = function (callback) {
  this.api.request('/core/view/optionProxyChainPassword/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionProxyChainPrompt = function (callback) {
  this.api.request('/core/view/optionProxyChainPrompt/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionHttpState = function (callback) {
  this.api.request('/core/view/optionHttpState/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionTimeoutInSecs = function (callback) {
  this.api.request('/core/view/optionTimeoutInSecs/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionSingleCookieRequestHeader = function (callback) {
  this.api.request('/core/view/optionSingleCookieRequestHeader/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionProxyExcludedDomains = function (callback) {
  this.api.request('/core/view/optionProxyExcludedDomains/', callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.optionProxyExcludedDomainsEnabled = function (callback) {
  this.api.request('/core/view/optionProxyExcludedDomainsEnabled/', callback);
};

/**
 * Shuts down ZAP
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.shutdown = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/shutdown/', {'apikey' : apikey}, callback);
};

/**
 * Creates a new session, optionally overwriting existing files. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.newSession = function (name, overwrite, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/newSession/', {'name' : name, 'overwrite' : overwrite, 'apikey' : apikey}, callback);
};

/**
 * Loads the session with the given name. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.loadSession = function (name, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/loadSession/', {'name' : name, 'apikey' : apikey}, callback);
};

/**
 * Saves the session with the name supplied, optionally overwriting existing files. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.saveSession = function (name, overwrite, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/saveSession/', {'name' : name, 'overwrite' : overwrite, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.snapshotSession = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/snapshotSession/', {'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.clearExcludedFromProxy = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/clearExcludedFromProxy/', {'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.excludeFromProxy = function (regex, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/excludeFromProxy/', {'regex' : regex, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setHomeDirectory = function (dir, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setHomeDirectory/', {'dir' : dir, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.generateRootCA = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/generateRootCA/', {'apikey' : apikey}, callback);
};

/**
 * Sends the HTTP request, optionally following redirections. Returns the request sent and response received and followed redirections, if any.
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.sendRequest = function (request, followredirects, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/sendRequest/', {'request' : request, 'followRedirects' : followredirects, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.deleteAllAlerts = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/deleteAllAlerts/', {'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.runGarbageCollection = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/runGarbageCollection/', {'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.clearStats = function (keyprefix, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/clearStats/', {'keyPrefix' : keyprefix, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionProxyChainName = function (string, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionProxyChainName/', {'String' : string, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionProxyChainSkipName = function (string, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionProxyChainSkipName/', {'String' : string, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionProxyChainRealm = function (string, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionProxyChainRealm/', {'String' : string, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionProxyChainUserName = function (string, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionProxyChainUserName/', {'String' : string, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionProxyChainPassword = function (string, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionProxyChainPassword/', {'String' : string, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionHttpStateEnabled = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionHttpStateEnabled/', {'Boolean' : bool, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionUseProxyChain = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionUseProxyChain/', {'Boolean' : bool, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionProxyChainPort = function (integer, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionProxyChainPort/', {'Integer' : integer, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionUseProxyChainAuth = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionUseProxyChainAuth/', {'Boolean' : bool, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionProxyChainPrompt = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionProxyChainPrompt/', {'Boolean' : bool, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionTimeoutInSecs = function (integer, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionTimeoutInSecs/', {'Integer' : integer, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setOptionSingleCookieRequestHeader = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/core/action/setOptionSingleCookieRequestHeader/', {'Boolean' : bool, 'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.proxypac = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.requestOther('/core/other/proxy.pac/', {'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.rootcert = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.requestOther('/core/other/rootcert/', {'apikey' : apikey}, callback);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.setproxy = function (proxy, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.requestOther('/core/other/setproxy/', {'proxy' : proxy, 'apikey' : apikey}, callback);
};

/**
 * Generates a report in XML format
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.xmlreport = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.requestOther('/core/other/xmlreport/', {'apikey' : apikey}, callback);
};

/**
 * Generates a report in HTML format
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.htmlreport = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.requestOther('/core/other/htmlreport/', {'apikey' : apikey}, callback);
};

/**
 * Gets the message with the given ID in HAR format
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.messageHar = function (id, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.requestOther('/core/other/messageHar/', {'id' : id, 'apikey' : apikey}, callback);
};

/**
 * Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.messagesHar = function (baseurl, start, count, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.requestOther('/core/other/messagesHar/', {'baseurl' : baseurl, 'start' : start, 'count' : count, 'apikey' : apikey}, callback);
};

/**
 * Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any.
 * This component is optional and therefore the API will only work if it is installed
 **/
Core.prototype.sendHarRequest = function (request, followredirects, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.requestOther('/core/other/sendHarRequest/', {'request' : request, 'followRedirects' : followredirects, 'apikey' : apikey}, callback);
};

module.exports = Core;
