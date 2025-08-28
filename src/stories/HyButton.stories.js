import { fn } from '@storybook/test';
import HyButton from './HyButton';

export default {
  title: 'Components/HyButton',
  component: HyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible button component supporting multiple sizes, states, icon options, variants, and boolean states. Designed for versatile UI usage.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'white',
        'success',
        'error',
        'warning',
        'ghost',
        'outline',
        'muted'
      ],
      description: 'Button state (semantic and stylistic variants).',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'iconXs', 'iconSm', 'iconMd', 'iconLg', 'iconXl'],
      description: 'Button size, including icon sizes.',
    },
    leadingIcon: { control: false },
    trailingIcon: { control: false },
    outline: {
      control: { type: 'boolean' },
      description: 'Outline style for button.',
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: 'Whether the button is icon only.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button.',
    },
    visible: {
      control: { type: 'boolean' },
      description: 'Set button visible or not.',
    },
    rounded: {
      control: { type: 'text' },
      description: 'Additional rounded style override.',
    },
    as: {
      control: { type: 'text' },
      description: 'Tag to render as (button, a, etc).',
    },
    onClick: {
      action: 'clicked',
      description: 'Button click event.',
    },
    children: {
      control: { type: 'text' },
      description: 'Button label or children.',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Aria-label for accessibility.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional custom class.',
    },
    containerProps: {
      control: false,
      description: 'Extra container properties.',
    }
  },
  args: {
    state: 'primary',
    size: 'md',
    outline: false,
    iconOnly: false,
    disabled: false,
    visible: true,
    as: 'button',
    children: 'Button',
    rounded: undefined,
    leadingIcon: (props) => (
      <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <circle cx={props.size/2} cy={props.size/2} r={(props.size/2)-1} stroke={props.iconColor ?? 'white'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0"><rect width={props.size} height={props.size} fill="white"/></clipPath>
        </defs>
      </svg>
    ),
    trailingIcon: (props) => (
      <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <ellipse
            cx={(props.size / 2).toFixed(4)}
            cy={(props.size / 2).toFixed(4)}
            rx={((props.size / 2) * 0.83).toFixed(2)}
            ry={((props.size / 2) * 0.83).toFixed(2)}
            stroke={props.secondIconColor ?? "#344054"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0"><rect width={props.size} height={props.size} fill="white"/></clipPath>
        </defs>
      </svg>
    ),
    onClick: fn(),
    ariaLabel: 'Button',
    className: '',
    containerProps: {},
  },
};

export const Default = {
  name: 'Default (All Props Enabled)',
  args: {
    // Inherit all args from default export (all functionality enabled)
  },
};

export const Primary = {
  args: {
    state: 'primary',
    children: 'Primary Button',
    onClick: fn(),
  },
};

export const Secondary = {
  args: {
    state: 'secondary',
    children: 'Secondary Button',
    onClick: fn(),
  },
};

export const Success = {
  args: {
    state: 'success',
    children: 'Success Button',
    onClick: fn(),
  },
};

export const Error = {
  args: {
    state: 'error',
    children: 'Error Button',
    onClick: fn(),
  },
};

export const Warning = {
  args: {
    state: 'warning',
    children: 'Warning Button',
    onClick: fn(),
  },
};

export const White = {
  args: {
    state: 'white',
    children: 'White Button',
    onClick: fn(),
  },
};

export const Ghost = {
  args: {
    state: 'ghost',
    children: 'Ghost Button',
    onClick: fn(),
  },
};

export const Outline = {
  args: {
    state: 'outline',
    children: 'Outline Button',
    onClick: fn(),
  },
};

export const Muted = {
  args: {
    state: 'muted',
    children: 'Muted Button',
    onClick: fn(),
  },
};

export const WithLeadingIcon = {
  name: 'With Leading Icon',
  args: {
    leadingIcon: (props) => (
      <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <circle cx={props.size/2} cy={props.size/2} r={(props.size/2)-1} stroke={props.iconColor ?? 'white'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0"><rect width={props.size} height={props.size} fill="white"/></clipPath>
        </defs>
      </svg>
    ),
    trailingIcon: undefined,
    children: 'With Leading Icon',
    onClick: fn(),
  },
};

export const WithTrailingIcon = {
  name: 'With Trailing Icon',
  args: {
    leadingIcon: undefined,
    trailingIcon: (props) => (
      <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <ellipse
            cx={(props.size / 2).toFixed(4)}
            cy={(props.size / 2).toFixed(4)}
            rx={((props.size / 2) * 0.83).toFixed(2)}
            ry={((props.size / 2) * 0.83).toFixed(2)}
            stroke={props.secondIconColor ?? "#344054"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0"><rect width={props.size} height={props.size} fill="white"/></clipPath>
        </defs>
      </svg>
    ),
    children: 'With Trailing Icon',
    onClick: fn(),
  },
};

export const WithBothIcons = {
  name: 'With Leading and Trailing Icons',
  args: {
    leadingIcon: (props) => (
      <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <circle cx={props.size/2} cy={props.size/2} r={(props.size/2)-1} stroke={props.iconColor ?? 'white'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0"><rect width={props.size} height={props.size} fill="white"/></clipPath>
        </defs>
      </svg>
    ),
    trailingIcon: (props) => (
      <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <ellipse
            cx={(props.size / 2).toFixed(4)}
            cy={(props.size / 2).toFixed(4)}
            rx={((props.size / 2) * 0.83).toFixed(2)}
            ry={((props.size / 2) * 0.83).toFixed(2)}
            stroke={props.secondIconColor ?? "#344054"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0"><rect width={props.size} height={props.size} fill="white"/></clipPath>
        </defs>
      </svg>
    ),
    children: 'With Both Icons',
    onClick: fn(),
  },
};

export const Sizes = {
  name: 'Sizes (Dropdown)',
  args: {
    children: 'Button',
    leadingIcon: undefined,
    trailingIcon: undefined,
    onClick: fn(),
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Change button size',
    },
  },
};

export const IconSizes = {
  name: 'Icon Only Sizes',
  args: {
    iconOnly: true,
    leadingIcon: (props) => (
      <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <circle cx={props.size/2} cy={props.size/2} r={(props.size/2)-1} stroke={props.iconColor ?? 'white'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0"><rect width={props.size} height={props.size} fill="white"/></clipPath>
        </defs>
      </svg>
    ),
    trailingIcon: undefined,
    children: undefined,
    onClick: fn(),
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['iconXs', 'iconSm', 'iconMd', 'iconLg', 'iconXl'],
      description: 'Icon-only size options',
    },
  },
};

export const OutlineVariant = {
  name: 'Outline Variant',
  args: {
    outline: true,
    state: 'outline',
    children: 'Outline Button',
    onClick: fn(),
  },
};

export const Disabled = {
  name: 'Disabled State',
  args: {
    disabled: true,
    children: 'Disabled Button',
    onClick: fn(),
  },
};

export const Invisible = {
  name: 'Invisible (Not Rendered)',
  args: {
    visible: false,
    children: 'Invisible Button',
    onClick: fn(),
  },
};

export const CustomRounded = {
  name: 'Custom Rounded',
  args: {
    rounded: 'rounded-full',
    children: 'Full rounded button',
    onClick: fn(),
  },
};

export const CustomClassName = {
  name: 'With Custom Class Name',
  args: {
    className: 'ring-2 ring-red-500',
    children: 'Custom Class Styles',
    onClick: fn(),
  },
};

export const AsLink = {
  name: 'Rendered As Link (a tag)',
  args: {
    as: 'a',
    children: 'Link Style Button',
    href: '#',
    onClick: fn(),
  },
};

export const AllStatesDropdown = {
  name: 'All States (Dropdown)',
  args: {
    children: 'State Variant',
    onClick: fn(),
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'white',
        'success',
        'error',
        'warning',
        'ghost',
        'outline',
        'muted',
      ],
    },
  },
};

export const BooleanStates = {
  name: 'Boolean States Toggle',
  args: {
    disabled: false,
    visible: true,
    outline: false,
    iconOnly: false,
    children: 'Toggle Booleans',
    onClick: fn(),
  },
  argTypes: {
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
    outline: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
  },
};