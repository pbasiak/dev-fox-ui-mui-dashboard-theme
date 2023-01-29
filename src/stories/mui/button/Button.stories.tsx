import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Button } from '@mui/material';
import { StorybookContainer } from '../storybook-container/StorybookContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <StorybookContainer><Box display='flex' gap={2} flexDirection='column'>
  <Box display='flex' gap={2}>
    <Button {...args} variant='outlined'>Button</Button>
    <Button {...args} variant='contained'>Button</Button>
    <Button {...args} variant='text'>Button</Button>
  </Box>
  <Box display='flex' gap={2}>
    <Button {...args} size='small' variant='outlined'>Button</Button>
    <Button {...args} size='small'  variant='contained'>Button</Button>
    <Button {...args} size='small'  variant='text'>Button</Button>
  </Box>
</Box></StorybookContainer>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  color: 'secondary',
};

