// Documents
import author from './documents/author'
import page from './documents/page'
import post from './documents/post'
import postCategory from './documents/postCategory'
import faq from './documents/faq'
import service from './documents/service'
import project from './documents/project'
import projectCategory from './documents/projectCategory'
import testimonial from './documents/testimonial'
import form from './documents/form'
import redirect from './documents/redirect'

// Singletons
import settings from './singletons/settings'
import generalSettings from './singletons/generalSettings'
import navigationSettings from './singletons/navigationSettings'
import blogArchivePage from './singletons/blogArchivePage'
import servicesPage from './singletons/servicesPage'
import projectsPage from './singletons/projectsPage'

// Objects
import seoObject from './objects/seoObject'
import buttonObject from './objects/buttonObject'

// Page Builder Blocks
import heroBlock from './page-builder/blocks/heroBlock'
import headerBlock from './page-builder/blocks/headerBlock'
import freeformBlock from './page-builder/blocks/freeformBlock'
import featureCardsBlock from './page-builder/blocks/featureCardsBlock'
import featuresMinimalBlock from './page-builder/blocks/featuresMinimalBlock'
import mediaBlock from './page-builder/blocks/mediaBlock'
import testimonialBlock from './page-builder/blocks/testimonialBlock'
import logoBlock from './page-builder/blocks/logoBlock'
import formBlock from './page-builder/blocks/formBlock'
import callToActionBlock from './page-builder/blocks/callToActionBlock'
import portableTextBlock from './page-builder/blocks/portableTextBlock'
import servicesBlock from './page-builder/blocks/servicesBlock'

// Page Builder Objects
import singleImageObject from './page-builder/objects/singleImageObject'
import spacerObject from './page-builder/objects/spacerObject'
import headingObject from './page-builder/objects/headingObject'
import richTextObject from './page-builder/objects/richTextObject'
import videoObject from './page-builder/objects/videoObject'
import callToActionObject from './page-builder/objects/callToActionObject'

export const schemaTypes = [
  // Documents
  author,
  page,
  post,
  postCategory,
  faq,
  service,
  projectsPage,
  project,
  projectCategory,
  testimonial,
  form,
  redirect,

  // Singletons
  settings,
  generalSettings,
  navigationSettings,
  blogArchivePage,
  servicesPage,

  // Objects
  seoObject,
  buttonObject,

  // Page Builder Blocks
  heroBlock,
  headerBlock,
  freeformBlock,
  featureCardsBlock,
  featuresMinimalBlock,
  mediaBlock,
  testimonialBlock,
  logoBlock,
  formBlock,
  callToActionBlock,
  portableTextBlock,
  servicesBlock,

  // Page Builder Objects
  singleImageObject,
  spacerObject,
  headingObject,
  richTextObject,
  videoObject,
  callToActionObject,
]
