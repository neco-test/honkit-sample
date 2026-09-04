module.exports = {
  "root": "./docs",
  "plugins": [
    "-lunr",
    "elasticsearch",
    "flexible-alerts",
    "folding-content",
    "intopic-toc",
    "toggle-chapters",
    "uml"
  ],
  "pluginsConfig": {
    "elasticsearch": {
      "host": "",
      "index": "",
      "maxResults": 50,
    },
    "flexible-alerts": {
      "style": "flat"
    }
  }
};
