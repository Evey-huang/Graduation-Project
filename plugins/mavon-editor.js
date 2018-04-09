let mavonEditor
if (process.browser) {
  const Editor = require('mavon-editor') || require('mavon-editor').default
  mavonEditor = Editor.mavonEditor
}
export default mavonEditor
