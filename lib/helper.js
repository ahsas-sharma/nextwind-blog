// endpoint: api/posts
export default async function getPost(id) {
  const res = await fetch(`${process.env.baseURL}/api/posts`);
  const posts = await res.json();

  if (id) {
    return posts.find((post) => post.id == id);
  }
  return posts;
}
