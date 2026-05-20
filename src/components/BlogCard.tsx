interface Props { title: string; excerpt: string; date: string; readTime: string; category: string; slug: string }
export default function BlogCard({ title, excerpt, date, readTime, category }: Props) {
  return (
    <div className="blog-card">
      <span className="blog-card-category">{category}</span>
      <h3 className="blog-card-title">{title}</h3>
      <p className="blog-card-excerpt">{excerpt}</p>
      <div className="blog-card-meta"><span>{date}</span><span>{readTime} read</span></div>
    </div>
  )
}
