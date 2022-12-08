import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 按需引入图标
import {
  faBlog,
  faBars,
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
  faWindowMinimize,
  faImage,
  faImages,
  faXmark,
  faClock,
  faPen
} from '@fortawesome/free-solid-svg-icons'

library.add([
  faBlog,
  faBars,
  faHome,
  faUser,
  faTag, // not_use
  faHashtag, // not_use
  faSearch,
  faComments,
  faCircleInfo,
  faLocationDot, // not_use
  faQuoteLeft,
  faQuoteRight,
  faPaperPlane, // not_use
  faCaretUp, // not_use
  faCaretDown,
  faWindowMinimize,
  faImage, // not_use
  faImages,
  faXmark,
  faClock,
  faPen // not_use
])

Vue.component('font-awesome-icon', FontAwesomeIcon)
