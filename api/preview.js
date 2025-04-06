export default function handler(req, res) {
  const thumb = 'https://via.placeholder.com/800x450.png?text=Preview'; // Dummy thumbnail
  res.redirect(thumb);
}
