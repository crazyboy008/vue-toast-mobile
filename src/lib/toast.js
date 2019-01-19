import ToastComponent from './toast.vue'
import { mergeOptions } from './util'

const Toast = {}
Toast.install = (Vue, options) => {
  if (options === undefined || options === null) {
    options = {
      content: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      content: options
    }
  }
  const ToastBox = Vue.extend(ToastComponent)
  let component
  if (!component) {
    component = new ToastBox({
      data: options
    }).$mount()
    if (typeof window !== 'undefined') document.createElement("div")
  }
  const $toast = {
    show(options) {
      if (typeof options === 'object') {
        mergeOptions(component, options)
      } else if (typeof options === 'string' || typeof options === 'number') {
        component.content = options
      }
      this.watcher && this.watcher()
      this.watcher = component.$watch('showValue', (val) => {
        val && options.onShow && options.onShow(component)
        if (!val && options.onHide) {
          options.onHide(component)
          this.watcher && this.watcher()
        }
        if (val && typeof window !== 'undefined') document.querySelector('body').appendChild(component.$el)
        else {
          if (typeof window !== 'undefined') document.body.removeChild(component.$el);
        }
      })
      component.show()
    },
    hide () {
      component.hide()
      component.$nextTick(() => {
        this.watcher && this.watcher()
        this.watcher = null
      })
    }
  }
  Vue.prototype.$toast = $toast
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Toast);
}

export default Toast
