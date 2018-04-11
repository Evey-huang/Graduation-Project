import marked from "marked";
import highligher from "~/plugins/highlight.js";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code) {
    return highligher.highlightAuto(code).value;
  }
});

const renderer = new marked.Renderer();

// 段落解析
const paragraphParse = text => `<p>${text}</p>`;

// A链接解析
const linkParse = (href, title, text) => {
  const isSelf = href.includes("sky-cloud");
  const isImage = text.includes("<img>");

  return `<a href="${href}"
             target="_blank"
             class="${isImage ? "image-link" : "link"}"
             title="${title || (isImage ? href : text)}"
             ${isSelf ? "" : 'rel="external nofollow"'}>${text}</a>`
    .replace(/\s+/g, " ")
    .replace("\n", "");
};

// 图片解析
const imageParse = (src, title, alt) => {
  return `<img src="${src}"
               title="${title || alt || "sky-cloud"}"
               alt="${alt || title || src}"
               onclick="if(window.utils) window.utils.openImgPopup('${src}')"/>`
    .replace(/\s+/g, " ")
    .replace("\n", "");
};

renderer.link = linkParse;
renderer.image = imageParse;
renderer.paragraph = paragraphParse;

export default (content, tags, parseHtml = false) => {
  renderer.text = text => text;

  // 如果是解析评论，则不解析html内容
  marked.setOptions({ sanitize: !parseHtml });

  if (typeof content !== "string") {
    return "";
  }

  // 返回解析内容
  return marked(content, { renderer });
};
