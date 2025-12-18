import { defineQuery} from "next-sanity";
import { buttonQuery } from "../fragments/misc";

export const navigationSettingsQuery = defineQuery(`*[_type == 'navigationSettings'][0] {
  "navbar": {
    navbarMenuItems[] {
      _key,
      title,
      pageReference->{
        _id,
        _type,
        title,
        "slug": slug.current
      },
      pageReferences[]->{
        _id,
        _type,
        title,
        "slug": slug.current
      },
      menuItemType,
      isButton,
    },
  },
  "slideOutMenu": {
    showSlideOutMenu,
    slideOutMenuItems[] {
      _key,
      title,
      _type,
      menuItemType,
      pageReference->{
        _id,
        _type,
        title,
        "slug": slug.current
      },
      pageReferences[]->{
        _id,
        _type,
        title,
        "slug": slug.current
      },
    },
    slideOutMenuButtons[] {
      ${buttonQuery}
    },
    showCompanyDetailsSlideOutMenu,
    "slideOutMenuSettings": *[_type == 'generalSettings'][0] {
      companyEmailAddress,
      companyPhoneNumber,
      companySocialMediaLinks[] {
        _key,
        title,
        profileUrl,
        icon {
          asset->{
            url
          }
        }
      }
    }
  },
  "footer": {
    footerColumns[] {
      _key,
      title,
      menuItems[] {
        _key,
        title,
        linkType,
        pageReference->{
          _id,
          title,
          "slug": slug.current
        },
        externalUrl
      },
    },
    footerLegalMenuItems[] {
      _key,
      title,
      pageReference->{
        _id,
        title,
        "slug": slug.current
      },
    },
  }
}`); 