import React from 'react'
import { storiesOf } from '@storybook/react'
import storiesFromMarkdown from '../../.storybook/lib/storiesFromMarkdown'

const stories = storiesOf('Layout', module)

storiesFromMarkdown(require.context('.', true, /\.md$/))
  .forEach(({title, story}) => {
    stories.add(title, story)
  })
