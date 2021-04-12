
export const setPopoverPosition = (popover, trigger, placement) => {
  const position = {
    top: 0,
    left: 0
  }
  const { left, right, top, bottom } = trigger.getBoundingClientRect()

  switch (placement) {
    /* top */
    case 'top' :
      position.left = left + (trigger.offsetWidth / 2) - (popover.offsetWidth / 2)
      position.top = top - popover.offsetHeight
      break
    case 'top-left':
      position.left = left
      position.top = top - popover.offsetHeight
      break
    case 'top-right':
      position.left = right - popover.offsetWidth
      position.top = top - popover.offsetHeight
      break
    /* left */
    case 'left':
      position.left = left - popover.offsetWidth
      position.top = top + (trigger.offsetHeight / 2) - (popover.offsetHeight / 2)
      break
    case 'left-top':
      position.left = left - popover.offsetWidth
      position.top = top
      break
    case 'left-bottom':
      position.left = left - popover.offsetWidth
      position.top = bottom - popover.offsetHeight
      break
      /* right */
    case 'right':
      position.left = right
      position.top = top + (trigger.offsetHeight / 2) - (popover.offsetHeight / 2)
      break
    case 'right-top':
      position.left = right
      position.top = top
      break
    case 'right-bottom':
      position.left = right
      position.top = bottom - popover.offsetHeight
      break
      /* bottom */
    case 'bottom':
      position.left = left + (trigger.offsetWidth / 2) - (popover.offsetWidth / 2)
      position.top = bottom
      break
    case 'bottom-left':
      position.left = left
      position.top = bottom
      break
    case 'bottom-right':
      position.left = right - popover.offsetWidth
      position.top = bottom
      break
    default:
      position.left = left + (trigger.offsetWidth / 2) - (popover.offsetWidth / 2)
      position.top = top - popover.offsetHeight
      break
  }

  popover.style.top = `${position.top}px`
  popover.style.left = `${position.left}px`
}
