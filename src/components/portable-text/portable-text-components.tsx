import Video from './components/video';
import CallToAction from './components/call-to-action';
import SingleImage from './components/single-image';
import { PortableTextComponents } from '@portabletext/react';
import { portableTextHeadings } from './components/headings';

export const portableTextComponents: PortableTextComponents = {
  types: {
    callToActionObject: (data) => {
      return <CallToAction data={data.value} />
    },
    singleImageObject: (data) => {
      return <SingleImage data={data.value}/>
    },
    videoObject: (data) => {
      return <Video data={data.value}/>
    }
  },
  block: {
    ...portableTextHeadings
  },
}