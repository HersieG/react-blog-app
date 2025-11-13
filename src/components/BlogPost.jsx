import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

function BlogPost() {
  const post = {
    title: "Stranger Things 5 in the MOVIES?",
    content:
      "Netflix has confirmed that the final season of Stranger Things will be shown in cinemas! It will only be shown inside of the US and Canada.",
    author: "Cody Howell",
    date: "October 22, 2025",
  };
  return (
    <article className="">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>
        By {post.author} on {post.date}
      </small>

      <section style={{ marginTop: "1rem" }}>
        <CommentBox />
        <CommentList />
      </section>
    </article>
  );
}

export default BlogPost;
