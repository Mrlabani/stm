export default function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).send('No URL provided');
  const streamUrl = decodeURIComponent(url);
  res.redirect(`/player.html?url=${encodeURIComponent(streamUrl)}`);
}
