module.exports = {
  parseURL(link) {
    return link.match(/(?<=https\:\/\/twitter\.com\/).+?\/status\/\d+/)?.[0];
  },

  generatePayload(link) {
    return { id: link };
  },

  generateURL(path) {
    return "https://ssstwitter.com/" + path.replace(/^\/+/, "");
  },

  getVideos(html) {
    const links = html
      .match(/"https\:\/\/video\.twimg\.com\/ext_tw_video\/.*?"/g)
      ?.map((match) => match.replace(/"/g, ""));

    return links;
  },
};
