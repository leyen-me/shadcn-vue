import type { MarkdownRenderer } from 'vitepress'
import { parseProps } from './utils'

export default function (md: MarkdownRenderer) {
  function addRenderRule(type: string) {
    const defaultRender = md.renderer.rules[type]
    md.renderer.rules[type] = (tokens, idx, options, env, self) => {
      const token = tokens[idx]
      const content = token.content.trim()
      if (!content.match(/^<SimpleComponentPreview\s/) || !content.endsWith('/>'))
        return defaultRender!(tokens, idx, options, env, self)

      const props = parseProps(content)
      const { attrs } = props
      const demoScripts = `<SimpleComponentPreview ${attrs ?? ''} v-bind='${JSON.stringify(props)}'></SimpleComponentPreview>`.trim()
      return demoScripts
    }
  }
  addRenderRule('html_block')
  addRenderRule('html_inline')
}
