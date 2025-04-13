import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Enzig Studio Website',

  projectId: '6odvfcqu',
  dataset: 'enzig-production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
