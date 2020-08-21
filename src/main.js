const parent = dom.create('<div id="parent"></div>')

dom.wrap(test, parent)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'Hi, I am Yang')

const title = dom.attr(test, 'title')

dom.text(test, '你好，这是新的内容')
console.log(dom.text(test))

console.log(`title: ${title}`)

dom.style(test, { border: '1px solid red', color: 'blue' })
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')

console.log(dom.class.has(test, 'blue'))

const fn = () => {
  console.log('点击了')
}

dom.on(test, 'click', fn)

dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)
const test2 = dom.find('#test2')[0]
console.log(dom.find('.red', test2)[0])

console.log(dom.parent(test))

console.log(dom.siblings(dom.find('#s2')[0]))

const s2 = dom.find('#s2')[0]

console.log(dom.siblings(s2))

console.log(dom.next(s2))

console.log(dom.previous(s2))

const t = dom.find('#travel')[0]

console.log(dom.children(t))
dom.each(dom.children(t), n => dom.style(n, 'color', 'red'))

console.log(dom.index(s2))
