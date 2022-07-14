// import './style.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.store('text', 'Hello World')

Alpine.data('counter', () => ({
  cnt: 0,
  onClickButton () {
    this.cnt++
  }
}))

Alpine.start()
