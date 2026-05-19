import { styled } from "../styles/stitches.config"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"
import BlogCard from "../components/BlogCard"

const Title = styled("h1", { fontSize:"$4xl", textAlign:"center", marginBottom:"$2", paddingTop:"$16" })
const Subtitle = styled("p", { fontSize:"$sm", color:"$textMuted", textAlign:"center", marginBottom:"$10" })
const Grid = styled("div", { display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"$6", "@media(max-width:600px)":{ gridTemplateColumns:"1fr" } })

export default function Blog() {
  return (
    <AnimatedSection className="container" >
      <Title>Blog</Title>
      <Subtitle>Thoughts, tutorials, and insights on web development</Subtitle>
      <Grid>
        {portfolio.blogPosts.map((p,i) => <BlogCard key={i} title={p.title} excerpt={p.excerpt} date={p.date} readTime={p.readTime} category={p.category} slug={p.slug} />)}
      </Grid>
    </AnimatedSection>
  )
}