import { setPopoverPosition } from './popper.js'

const textMap = {}
const handelMouseOver = (el, binding) => {
  const isShow = el.offsetWidth < el.scrollWidth || el.offsetHeight < el.scrollHeight
  if (isShow) {
    const placement = binding.value.placement || 'top'
    const popper = document.createElement('div')
    popper.classList.add('v-tooltip__popper', `v-tooltip--${placement}`)

    const arrow = document.createElement('div')
    arrow.className = 'v-tooltip__arrow'
    popper.appendChild(arrow)

    const content = document.createElement('div')
    content.className = 'v-tooltip__content'
    content.innerHTML = textMap[el.sy]
    popper.appendChild(content)

    document.body.appendChild(popper)

    setPopoverPosition(popper, el, placement)
  }
}
const handelMouseOut = () => {
  const dom = document.querySelector('.v-tooltip__popper')
  dom && dom.parentNode.removeChild(dom)
}

const vEllipsis = {
  bind (el, binding, vnode) {
    const { style } = el
    style.overflow = 'hidden'
    style.textOverflow = 'ellipsis'
    const props = binding.value
    if (props.line && props.line > 1) {
      style.display = '-webkit-box'
      style.webkitBoxOrient = 'vertical'
      style.webkitLineClamp =  props.line
    } else {
      style.whiteSpace = 'nowrap'
    }
    el.addEventListener('mouseover', handelMouseOver.bind(this, el, binding, vnode), false)
    el.addEventListener('mouseout', handelMouseOut, false)
  },
  inserted (el, binding, vnode) {
    const sy = Symbol(vnode)
    el.sy = sy
    textMap[sy] = binding.value.text || binding.value
  },
  componentUpdated (el, binding) {
    textMap[el.sy] = binding.value.text || binding.value
  },
  unbind (el) {
    delete textMap[el.sy]
    el.removeEventListener('mouseover', handelMouseOver)
    el.removeEventListener('mouseout', handelMouseOut)
  }
}
export default vEllipsis
