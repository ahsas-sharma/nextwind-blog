import data from "../data";

export default function handler(req, res) {
  const { postId } = req.query;
  if (postId) {
    const post = data.Posts.find((post) => post.id == postId);
    if (post) return res.status(200).json(post);
    return res.status(404).json({ error: "No post found with given id." });
  }
}
