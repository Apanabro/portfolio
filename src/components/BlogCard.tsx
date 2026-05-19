import { styled } from "../styles/stitches.config"

const Card = styled("div", { background:"$bgCard", borderRadius:"$lg", border:"1px solid $border", padding:"$5", transition:"all $smooth", cursor:"pointer", "&:hover":{ borderColor:"$primary", transform:"translateY(-2px)" } })
const Cat = styled("span", { fontSize:"$xs", color:"$primaryLight", background:"$bgHover", padding:"2px 10px", borderRadius:"$full" })
const Title = styled("h3", { fontSize:"$lg", margin:"$3 0 $2", fontFamily:"$heading" })
const Excerpt = styled("p", { fontSize:"$sm", color:"$textMuted", lineHeight:1.6, marginBottom:"$3" })
const Meta = styled("div", { display:"flex", justifyContent:"space-between", fontSize:"$xs", color:"$textDim" })

interface Props { title: string; excerpt: string; date: string; readTime: string; category: string; slug: string }
export default function BlogCard({ title, excerpt, date, readTime, category, slug }: Props) {
  return (
    <Card>
      <Cat>{category}</Cat>
      <Title>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
      <Meta><span>{date}</span><span>{readTime} read</span></Meta>
    </Card>
  )
}