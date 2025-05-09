function customRenderer(element, root) {
    let el = document.createElement(element.key)
    for (const prop in element.props) {
        el.setAttribute(prop, element.props[prop])
    }
    el.innerHTML = element.text
    root.appendChild(el)
}

const myElement = {
    key: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    text: 'click to go to google'
}


const root = document.querySelector('#root')
customRenderer(myElement, root)