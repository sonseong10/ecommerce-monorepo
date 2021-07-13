import remark from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

const renderer = remark().use(remarkGfm).use(remarkHtml)

const renderMarkdown = (source) => {
  return renderer.processSync(source).toString()
}

export default renderMarkdown
