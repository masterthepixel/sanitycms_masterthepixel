import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './studio/masterthepixel/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'masterthepixel',

  projectId: '5ywyt4ng',
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})