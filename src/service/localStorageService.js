const LocalStorageService = (function () {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }
  function _getAccessToken() {
    return localStorage.getItem("accessToken");
  }
  function _setUsername(username) {
    localStorage.setItem("username", username);
  }
  function _getUsername() {
    return localStorage.getItem("username");
  }

  function _clearTokenSerivce() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
  }

  return {
    getService: _getService,
    setAccessToken: _setAccessToken,
    getAccessToken: _getAccessToken,
    setUsername: _setUsername,
    getUsername: _getUsername,
    cleanService: _clearTokenSerivce,
  };
})();
export default LocalStorageService;
