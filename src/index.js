const { default: axios } = require("axios");

const {
  generatePayload,
  generateURL,
  getVideos,
  parseURL,
} = require("./functions.js");

async function TwitterVideoDownloader(link) {
  const path = parseURL(link);
  const payload = generatePayload(link);
  const url = generateURL(path);

  const { data } = await axios.post(url, JSON.stringify(payload));

  const videos = getVideos(data);

  return {
    status: "sucess",
    results: videos?.length ?? 0,
    data: videos ?? [],
  };
}

module.exports = TwitterVideoDownloader;
