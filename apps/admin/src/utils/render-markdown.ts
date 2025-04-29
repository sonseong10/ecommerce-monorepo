import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import type { Compatible } from 'vfile'

const renderer = remark().use(remarkGfm).use(remarkHtml)

const renderMarkdown = (source?: Compatible) => {
  return renderer.processSync(source).toString()
}

export default renderMarkdown
