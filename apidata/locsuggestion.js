//GET  "https://api.amctheatres.com/v2/location-suggestions/?query=66062"

module.exports = {
  "pageSize": 10,
  "pageNumber": 1,
  "count": 1,
  "_embedded": {
    "suggestions": [
      {
        "title": "66062",
        "type": "zipcode",
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/location-suggestions/?query=66062&pageNumber=1&pageSize=10",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/locations": {
            "href": "https://api.amctheatres.com/v2/locations?latitude=38.860511&longitude=-94.77581",
            "templated": false
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://api.amctheatres.com/v2/location-suggestions/?query=66062&pageNumber=1&pageSize=10",
      "templated": false
    }
  }
}