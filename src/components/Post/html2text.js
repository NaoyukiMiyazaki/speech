export default function html2text(html) {
  const div = document.createElement('div')
  div.innerHTML = replaceRuby(html)
  return div.textContent
}

function replaceRuby(html) {
  return html.replace(/<rb>.*?<\/rb>|<rp>.*?<\/rp>/g, '')
}