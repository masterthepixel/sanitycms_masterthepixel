// Utility types for page builder blocks
export type PageBuilderType<T extends string> = Extract<
  | {
      _type: "heroBlock";
      _id: string;
      _key: string;
      heading?: string;
      content?: any[];
      mediaType?: string;
      bottomCornerRadius?: string;
      buttons?: ButtonType[];
      image?: any;
      dialogType?: string;
      videoUrl?: string;
      overlayType?: string;
      anchorId?: string;
    }
  | {
      _type: "headerBlock";
      _id: string;
      _key: string;
      heading?: string;
      content?: any[];
      bottomCornerRadius?: string;
      anchorId?: string;
    }
  | {
      _type: "featureBlock";
      _id: string;
      _key: string;
      heading?: string;
      features?: any[];
      anchorId?: string;
    }
  | {
      _type: "featureCardsBlock";
      _id: string;
      _key: string;
      heading?: string;
      buttons?: ButtonType[];
      features?: any[];
      showCallToAction?: boolean;
      callToActionHeading?: string;
      callToActionContent?: any;
      callToActionButtons?: ButtonType[];
      anchorId?: string;
      paddingTop?: string;
      paddingBottom?: string;
    }
  | {
      _type: "featuresMinimalBlock";
      _id: string;
      _key: string;
      heading?: string;
      content?: any;
      buttons?: ButtonType[];
      features?: any;
      enableBorderTop?: boolean;
      cornerRadiusTop?: string;
      enableBorderBottom?: boolean;
      cornerRadiusBottom?: string;
      anchorId?: string;
      paddingTop?: string;
      paddingBottom?: string;
    }
  | {
      _type: "callToActionBlock";
      _id: string;
      _key: string;
      heading?: string;
      content?: any;
      buttons?: ButtonType[];
      anchorId?: string;
      paddingTop?: string;
      paddingBottom?: string;
    }
  | {
      _type: "logoBlock";
      _id: string;
      _key: string;
      heading?: string;
      logos?: any[];
      anchorId?: string;
    }
  | {
      _type: "testimonialBlock";
      _id: string;
      _key: string;
      heading?: string;
      eyebrow?: string;
      testimonials?: any[];
      anchorId?: string;
      cornerRadiusTop?: string;
      cornerRadiusBottom?: string;
      paddingTop?: string;
      paddingBottom?: string;
    }
  | {
      _type: "freeformBlock";
      _id: string;
      _key: string;
      title?: string;
      columnsPerRow?: string;
      columns?: any[];
      anchorId?: string;
      border?: string;
    }
  | {
      _type: "portableTextBlock";
      _id: string;
      _key: string;
      title?: string;
      content?: any[];
      alignment?: string;
      anchorId?: string;
      paddingTop?: string;
      paddingBottom?: string;
    }
  | {
      _type: "blogArchiveBlock";
      _id: string;
      _key: string;
      heading?: string;
      categories?: any[];
      anchorId?: string;
      paddingTop?: string;
      paddingBottom?: string;
    }
  | {
      _type: "servicesBlock";
      _id: string;
      _key: string;
      heading?: string;
      services?: any[];
      buttons?: ButtonType[];
      background?: string;
      topCornerRadius?: string;
      anchorId?: string;
      paddingTop?: string;
      paddingBottom?: string;
    }
  | {
      _type: "formBlock";
      _id: string;
      _key: string;
      heading?: string;
      content?: any[];
      form?: FormType;
      anchorId?: string;
      paddingTop?: string;
      paddingBottom?: string;
    }
  | {
      _type: "mediaBlock";
      _id: string;
      _key: string;
      backgroundType?: string;
      backgroundWidth?: string;
      image?: any;
      overlayType?: string;
      dialogType?: string;
      videoUrl?: string;
      anchorId?: string;
    },
  { _type: T }
>;

// Button type used in page builder blocks
export type ButtonType = {
  _key?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'underline' | string;
  buttonType?: string;
  buttonWidth?: 'auto' | 'fullWidth' | string;
  buttonFileUrl?: {
    asset?: {
      url?: string;
    };
  };
  buttonPageReference?: {
    _id?: string;
    _type?: string;
    title?: string;
    slug?: string;
  };
  buttonEmailAddress?: string;
  buttonExternalUrl?: string;
  buttonAnchorLocation?: string;
  buttonAnchorId?: string;
};

// Form type used in form blocks
export type FormType = {
  title?: string;
  submitButtonText?: string;
  fields?: FormFieldType[];
};

// Form field type
export type FormFieldType = {
  name?: string;
  isRequired?: boolean;
  inputType?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
};