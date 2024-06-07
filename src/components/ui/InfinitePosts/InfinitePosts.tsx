export type Post = {
  id: string
  content: string
  author_id: string
  created_at: number
}
interface Props {
  posts: Post[]
  subscription: any
}
export const InfinitePosts: React.FC<Props> = ({ posts, subscription }) => {
  if (!posts.length) {
    return <div>no posts...</div>
  } else {
    return (
      <section>
        {posts.map((post) => (
          <div key={post.id}>{post.content}</div>
        ))}
      </section>
    )
  }
}
