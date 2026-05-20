import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"
import BlogCard from "../components/BlogCard"

interface BlogPost { title: string; excerpt: string; date: string; readTime: string; category: string; slug: string }

export default function Blog() {
  return (
    <AnimatedSection className="container" style={{ minHeight:"100vh", paddingBottom:"var(--space-16)" }}>
      <h1 className="blog-title">Blog</h1>
      <p className="blog-subtitle">Thoughts, tutorials, and insights on web development</p>
      <div className="blog-grid">
        {(portfolio.blogPosts as BlogPost[]).map((p,i) => <BlogCard key={i} title={p.title} excerpt={p.excerpt} date={p.date} readTime={p.readTime} category={p.category} slug={p.slug} />)}
      </div>
    </AnimatedSection>
  )
}
