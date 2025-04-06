export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).send('No URL provided');
  res.redirect(url);
}
