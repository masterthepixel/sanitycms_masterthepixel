import { Studio } from 'sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <Studio config={config} />
}