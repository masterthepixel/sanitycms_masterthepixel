export interface PostFrontmatter {
  title: string
  slug: string
  date: string
  excerpt: string
  seo: {
    title: string
    description: string
    keywords?: string[]
  }
  coverImage: string
  categories?: string[]
  draft?: boolean
}

export interface PageFrontmatter {
  title: string
  slug: string
  seo: {
    title: string
    description: string
  }
  draft?: boolean
}

export interface Post extends PostFrontmatter {
  content: string
}

export interface Page extends PageFrontmatter {
  content: string;
  pageBuilder?: any[];
  _type?: string;
  _id?: string;
}

// Site settings types
export interface GeneralSettings {
  _type: 'generalSettings'
  siteTitle: string
  siteLogo?: {
    asset?: {
      url: string
    }
  }
  copyright: string
  companyEmailAddress?: string
  companyPhoneNumber?: string
  companySocialMediaLinks?: Array<{
    _key: string
    title: string
    profileUrl: string
    icon?: {
      asset?: {
        url: string
      }
    }
  }>
  homePage?: {
    _ref: string
    _type: 'reference'
  }
}

export interface MarketingSettings {
  _type: 'marketingSettings'
  googleAnalyticsId?: string
  googleTagManagerId?: string
}

export interface NavigationSettings {
  _type: 'navigationSettings'
  navbar: {
    navbarMenuItems: Array<{
      _key: string
      title: string
      pageReference?: {
        _ref: string
        _type: 'reference'
      }
      pageReferences?: Array<{
        _ref: string
        _type: 'reference'
      }>
      menuItemType: string
      isButton?: boolean
    }>
  }
  slideOutMenu: {
    showSlideOutMenu: boolean
    slideOutMenuItems: Array<{
      _key: string
      title: string
      _type?: string
      menuItemType: string
      pageReference?: {
        _ref: string
        _type: 'reference'
      }
      pageReferences?: Array<{
        _ref: string
        _type: 'reference'
      }>
    }>
    slideOutMenuButtons: Array<{
      _key: string
      _type: string
      buttonText: string
      buttonType: string
      buttonVariant: string
      buttonWidth: string
      showButton: boolean
      buttonExternalUrl?: string
      buttonPageReference?: {
        _ref: string
        _type: 'reference'
      }
      buttonFileUrl?: {
        _type: 'file'
      }
    }>
    showCompanyDetailsSlideOutMenu: boolean
    slideOutMenuSettings: {
      companyEmailAddress?: string
      companyPhoneNumber?: string
      companySocialMediaLinks?: Array<{
        _key: string
        title: string
        profileUrl: string
        icon?: {
          asset?: {
            url: string
          }
        }
      }>
    }
  }
  footer: {
    footerColumns: Array<{
      _key: string
      title: string
      menuItems: Array<{
        _key: string
        title: string
        linkType: string
        pageReference?: {
          _ref: string
          _type: 'reference'
        }
        externalUrl?: string
      }>
    }>
    footerLegalMenuItems: Array<{
      _key: string
      title: string
      pageReference: {
        _ref: string
        _type: 'reference'
      }
    }>
  }
}

export interface BlogSettings {
  _type: 'blogSettings'
  showRelatedPosts: boolean
  showTableOfContents: boolean
  showPostsByCategory: boolean
}

export interface SiteSettings {
  generalSettings: GeneralSettings
  marketingSettings: MarketingSettings
  navigationSettings: NavigationSettings
  blogSettings: BlogSettings
}