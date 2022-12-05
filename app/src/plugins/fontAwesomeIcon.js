import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 按需引入图标
import {
  faBlog,
  faHome,
  faUser,
  faTag,
  faHashtag,
  faSearch,
  faComments,
  faCircleInfo,
  faLocationDot,
  faQuoteLeft,
  faQuoteRight,
  faPaperPlane,
  faCaretUp,
  faCaretDown,
  faImage,
  faImages,
  faXmark,
  faClock,
  faGear,
  faPen,
  faMinus
} from '@fortawesome/free-solid-svg-icons'

library.add([
  faBlog,
  faHome,
  faUser,
  faTag,
  faHashtag,
  faSearch,
  faComments,
  faCircleInfo,
  faLocationDot,
  faQuoteLeft,
  faQuoteRight,
  faPaperPlane,
  faCaretUp,
  faCaretDown,
  faImage,
  faImages,
  faXmark,
  faClock,
  faGear,
  faPen,
  faMinus
])

Vue.component('font-awesome-icon', FontAwesomeIcon)
