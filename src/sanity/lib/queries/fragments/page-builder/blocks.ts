import { baseQuery, buttonQuery, mediaQuery, paddingQuery } from "../misc";

export const heroBlockQuery = `
  _type == "heroBlock" => {
    ${baseQuery},
    heading,
    content[],
    mediaType,
    bottomCornerRadius,
    buttons[]{
      ${buttonQuery}
    },
    image { 
      height,
      ${mediaQuery}
    },
    dialogType,
    videoUrl,
    overlayType,
    anchorId
  }
`

export const headerBlockQuery = `
  _type == "headerBlock" => {
    ${baseQuery},
    heading,
    content[],
    bottomCornerRadius,
    anchorId
  }
`

export const featureBlockQuery = `
  _type == "featureBlock" => {
    ${baseQuery},
    heading,
    features[] {
      title,
      description,
      icon { 
        ${mediaQuery}
      },
      pageReference->{
        _id,
        title,
        "slug": slug.current
      },
    },
    anchorId
  }
`

export const featureCardsBlockQuery = `
  _type == "featureCardsBlock" => {
    ${baseQuery},
    heading,
    buttons[]{
      ${buttonQuery}
    },
    features[] {
      _key,
      title,
      description,
      items,
      image { 
        ${mediaQuery}
      },
      button {
        ${buttonQuery}
      },  
    },
    showCallToAction,
    callToActionHeading,
    callToActionContent,
    callToActionButtons[] {
      ${buttonQuery}
    },
    anchorId,
    ${paddingQuery}
  }
`

export const featuresMinimalBlockQuery = `
  _type == "featuresMinimalBlock" => {
    ${baseQuery},
    heading,
    content,
    buttons[] {
      ${buttonQuery}
    },
    features,
    enableBorderTop,
    cornerRadiusTop,
    enableBorderBottom,
    cornerRadiusBottom,
    anchorId,
    ${paddingQuery}
  }
`

export const callToActionBlockQuery = `
  _type == "callToActionBlock" => {
    ${baseQuery},
    heading,
    content,
    buttons[] {
      ${buttonQuery}
    },
    anchorId,
    ${paddingQuery}
  }
`

export const logoBlockQuery = `
  _type == "logoBlock" => {
    ${baseQuery},
    heading,
    logos[] {
      _key,
      title,
      image { 
        ${mediaQuery}
      },
      size,
      link
    },
    anchorId
  }
`
export const testimonialBlockQuery = `
  _type == "testimonialBlock" => {
    ${baseQuery},
    heading,
    eyebrow,
    testimonials[]->{
      _id,
      name,
      jobTitle,
      company,
      quote,
      avatar { 
        ${mediaQuery}
      },
      logo { 
        ${mediaQuery}
      },
    },
    anchorId,
    cornerRadiusTop,
    cornerRadiusBottom,
    ${paddingQuery}
  }
`

export const freeformBlockQuery = `
  _type == "freeformBlock" => {
    ${baseQuery},
    title,
    columnsPerRow,
    columns[] {
      _key,
      _type,
      title,
      spacing,
      alignment,
      items[] {
        _key,
        _type,
        image { 
          aspectRatio,
          ${mediaQuery}
        },
        heading,
        headingText,
        headingTag,
        headingSize,
        richTextContent,
        buttonText,
        buttonVariant,
        buttonType,
        buttonPageReference->{
          _id,
          title,
          "slug": slug.current
        },
        buttonExternalUrl,
        spacing
      },
    },
    anchorId,
    border
  }
`

export const portableTextBlockQuery = `
  _type == "portableTextBlock" => {
    ${baseQuery},
    title,
    content[],
    alignment,
    anchorId,
    ${paddingQuery}
  }
`

export const blogArchiveBlockQuery = `
  _type == "blogArchiveBlock" => {
    ${baseQuery},
    heading,
    "categories": *[_type == "postCategory"] {
      _id,
      title,
      "slug": slug.current,
    },
    anchorId,
    ${paddingQuery}
  }
`

export const servicesBlockQuery = `
  _type == "servicesBlock" => {
    ${baseQuery},
    heading,
    services[]->{
      _id,
      title,
      shortDescription,
      image { 
        ${mediaQuery}
      },
      "slug": slug.current,
    },
    buttons[]{
      ${buttonQuery}
    },
    background,
    topCornerRadius,
    anchorId,
    ${paddingQuery}
  }
`

export const formBlockQuery = `
  _type == "formBlock" => {
    ${baseQuery},
    heading,
    content[],
    form->{
      title,
      submitButtonText,
      fields
    },
    anchorId,
    ${paddingQuery}
  }
`

export const mediaBlockQuery = `
  _type == "mediaBlock" => {
    ${baseQuery},
    backgroundType,
    backgroundWidth,
    image { 
      ${mediaQuery}
    },
    overlayType,
    dialogType,
    videoUrl,
    anchorId
  }
`