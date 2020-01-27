const apiRequest = {
  getRequest: function(URL) {
    return fetch(`http://json.ffwagency.md/${URL}`).then(response =>
      response.json()
    );
  }
};

export default apiRequest;
