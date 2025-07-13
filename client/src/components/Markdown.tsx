import React from "react";
import MarkdownIt from "markdown-it";
// from my backend implementation
import anchor from "markdown-it-anchor";
import hljs from "markdown-it-highlightjs";

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})
  .use(anchor)
  .use(hljs);

interface Props {
  children: string;
}

// here I want to have it that the markdown component will anclose markdown and transform it into HTML
const Markdown: React.FC<Props> = ({ children }) => {
  const htmlContent = md.render(children);
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Markdown;
