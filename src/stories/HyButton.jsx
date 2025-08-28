import React, { useState } from 'react';

const icons = {
  violet: {
    main: (props) => (
      <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath={`url(#clip0)`}>
          <circle cx={props.size/2} cy={props.size/2} r={(props.size/2)-1} stroke={props.iconColor} strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0"><rect width={props.size} height={props.size} fill="white"/></clipPath>
        </defs>
      </svg>
    ),
    second: (props) => (
      <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath={`url(#clip0s)`}>
          <ellipse
            cx={(props.size / 2).toFixed(4)}
            cy={(props.size / 2).toFixed(4)}
            rx={((props.size / 2) * 0.83).toFixed(2)}
            ry={((props.size / 2) * 0.83).toFixed(2)}
            stroke={props.secondIconColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0s"><rect width={props.size} height={props.size} fill="white"/></clipPath>
        </defs>
      </svg>
    ),
  },
};

const states = {
  primary: {
    base: {
      bg: "bg-violet-600 text-white border-violet-600 outline-violet-600",
      iconColor: "white",
      secondIconColor: "#344054",
      outlineColor: "outline-violet-600",
    },
    hover: {
      bg: "bg-violet-700 text-white border-violet-700 outline-violet-700",
      iconColor: "white",
      secondIconColor: "#344054",
      outlineColor: "outline-violet-700"
    }
  },
  white: {
    base: {
      bg: "bg-white text-gray-900 border-gray-200 outline-gray-200",
      iconColor: "#101828",
      secondIconColor: "#344054",
      outlineColor: "outline-gray-200",
    },
    hover: {
      bg: "bg-gray-100 text-gray-900 border-gray-500 outline-gray-500",
      iconColor: "#101828",
      secondIconColor: "#344054",
      outlineColor: "outline-gray-500"
    }
  },
  success: {
    base: {
      bg: "bg-emerald-700 text-white border-emerald-700 outline-emerald-700",
      iconColor: "white",
      secondIconColor: "#344054",
      outlineColor: "outline-emerald-700"
    },
    hover: {
      bg: "bg-emerald-800 text-white border-emerald-800 outline-emerald-800",
      iconColor: "white",
      secondIconColor: "#344054",
      outlineColor: "outline-emerald-800"
    }
  },
  error: {
    base: {
      bg: "bg-red-600 text-white border-red-600 outline-red-600",
      iconColor: "white",
      secondIconColor: "#344054",
      outlineColor: "outline-red-600",
    },
    hover: {
      bg: "bg-red-700 text-white border-red-700 outline-red-700",
      iconColor: "white",
      secondIconColor: "#344054",
      outlineColor: "outline-red-700"
    }
  },
  warning: {
    base: {
      bg: "bg-amber-300 text-gray-900 border-amber-300 outline-amber-300",
      iconColor: "#101828",
      secondIconColor: "#344054",
      outlineColor: "outline-amber-300"
    },
    hover: {
      bg: "bg-amber-400 text-gray-900 border-amber-400 outline-amber-400",
      iconColor: "#101828",
      secondIconColor: "#344054",
      outlineColor: "outline-amber-400"
    }
  },
  secondary: {
    base: {
      bg: "bg-gray-100 text-gray-900 border-gray-500 outline-gray-500",
      iconColor: "#101828",
      secondIconColor: "#344054",
      outlineColor: "outline-gray-500"
    },
    hover: {
      bg: "bg-gray-200 text-gray-900 border-gray-600 outline-gray-600",
      iconColor: "#101828",
      secondIconColor: "#344054",
      outlineColor: "outline-gray-600"
    }
  },
  ghost: {
    base: {
      bg: "bg-transparent text-violet-600 border-transparent outline-transparent",
      iconColor: "#742AE9",
      secondIconColor: "#344054",
      outlineColor: "outline-transparent"
    },
    hover: {
      bg: "bg-violet-100 text-violet-700 border-violet-100 outline-violet-100",
      iconColor: "#742AE9",
      secondIconColor: "#344054",
      outlineColor: "outline-violet-100"
    }
  },
  outline: {
    base: {
      bg: "bg-white text-violet-600 border-violet-600 outline-violet-600",
      iconColor: "#742AE9",
      secondIconColor: "#344054",
      outlineColor: "outline-violet-600"
    },
    hover: {
      bg: "bg-violet-50 text-violet-700 border-violet-700 outline-violet-700",
      iconColor: "#742AE9",
      secondIconColor: "#344054",
      outlineColor: "outline-violet-700"
    }
  },
  muted: {
    base: {
      bg: "bg-gray-300 text-gray-400 border-gray-300 outline-gray-300",
      iconColor: "white",
      secondIconColor: "#344054",
      outlineColor: "outline-gray-300"
    },
    hover: {
      bg: "bg-gray-400 text-gray-500 border-gray-400 outline-gray-400",
      iconColor: "white",
      secondIconColor: "#344054",
      outlineColor: "outline-gray-400"
    }
  },
};

const sizes = {
  xs: { height: 'h-6', px: 'px-2', py: 'py-[3px]', gap: 'gap-1.5', text: 'text-[11px] leading-[18px]', rounded: 'rounded-md', icon: 12 },
  sm: { height: 'h-7', px: 'px-2', py: 'py-[3px]', gap: 'gap-1.5', text: 'text-xs leading-tight', rounded: 'rounded-md', icon: 12 },
  md: { height: 'h-8', px: 'px-2.5', py: 'py-[3px]', gap: 'gap-1.5', text: 'text-sm leading-snug', rounded: 'rounded-lg', icon: 16 },
  lg: { height: 'h-10', px: 'px-3', py: 'py-[3px]', gap: 'gap-1.5', text: 'text-base leading-relaxed', rounded: 'rounded-[10px]', icon: 20 },
  xl: { height: 'h-12', px: 'px-3.5', py: 'py-[3px]', gap: 'gap-1.5', text: 'text-lg leading-[30px]', rounded: 'rounded-xl', icon: 24 },
  iconXs: { height: 'size-6', p: 'p-1.5', gap: 'gap-2', rounded: 'rounded-md', icon: 12 },
  iconSm: { height: 'size-7', p: 'p-1.5', gap: 'gap-2', rounded: 'rounded-md', icon: 14 },
  iconMd: { height: 'size-8', p: 'p-1.5', gap: 'gap-2', rounded: 'rounded-lg', icon: 16 },
  iconLg: { height: 'size-10', p: 'p-1.5', gap: 'gap-2', rounded: 'rounded-[10px]', icon: 20 },
  iconXl: { height: 'size-12', p: 'p-1.5', gap: 'gap-2', rounded: 'rounded-xl', icon: 24 },
};

function getStateStyles({ state, hover, disabled }) {
  if (disabled) {
    return states.muted.base;
  }
  return !hover ? states[state]?.base ?? states.primary.base : states[state]?.hover ?? states.primary.hover;
}

const HyButton = ({
  children = 'Button',
  leadingIcon,
  trailingIcon,
  size = 'md',
  state = 'primary',
  visible = true,
  rounded,
  as = 'button',
  outline = false,
  iconOnly = false,
  disabled = false,
  onClick,
  className = '',
  ariaLabel = 'Button',
  containerProps = {},
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  if (!visible) return null;

  const currentSize = sizes[size];
  const showLabel = !iconOnly && children;
  const stateStyles = getStateStyles({ state, hover: hovered, disabled });

  const Tag = as || 'button';

  return (
    <Tag
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={[
        // container
        'inline-flex justify-center items-center overflow-hidden',
        (currentSize?.height || '') + ' ' + (currentSize?.px || currentSize?.p || '') + ' ' + (currentSize?.py || ''),
        currentSize?.gap || '',
        currentSize?.rounded || rounded,
        'outline outline-1 outline-offset-[-1px] ' + (stateStyles.outlineColor || ''),
        stateStyles.bg || '',
        (stateStyles.text || ''),
        'transition-all',
        'border',
        hovered ? 'ring-indigo-200' : '',
        className,
        disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer select-none',
        (!iconOnly && 'font-medium font-[Inter]')
      ].filter(Boolean).join(' ')}
      tabIndex={disabled ? -1 : 0}
      type={as === 'button' ? 'button' : undefined}
      aria-label={ariaLabel}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...containerProps}
      {...props}
    >
      <span className="flex flex-row items-center gap-1.5">
        {!!leadingIcon &&
          <span data-svg-wrapper className="relative">
            {typeof leadingIcon === 'function'
              ? leadingIcon({ size: currentSize.icon, iconColor: stateStyles.iconColor, secondIconColor: stateStyles.secondIconColor })
              : leadingIcon}
          </span>
        }
        {showLabel && <span className={`justify-start ${currentSize.text}`}>{children}</span>}
        {!!trailingIcon &&
          <span data-svg-wrapper className="relative">
            {typeof trailingIcon === 'function'
              ? trailingIcon({ size: currentSize.icon, iconColor: stateStyles.iconColor, secondIconColor: stateStyles.secondIconColor })
              : trailingIcon}
          </span>
        }
      </span>
    </Tag>
  );
};

// Example Button Panel (palette, for demonstration - not render default!)
const buttonList = [
  // label, state, size, outline, iconOnly
  { children: 'Button', size: 'xs', state: 'primary' },
  { children: 'Button', size: 'sm', state: 'primary' },
  { children: 'Button', size: 'md', state: 'primary' },
  { children: 'Button', size: 'lg', state: 'primary' },
  { children: 'Button', size: 'xl', state: 'primary' },
  { children: 'Button', size: 'xs', state: 'white' },
  { children: 'Button', size: 'xs', state: 'success' },
  { children: 'Button', size: 'xs', state: 'error' },
  { children: 'Button', size: 'xs', state: 'warning' },
  { children: 'Button', size: 'xs', state: 'secondary' },
  // ...add palette test items as needed
];

const colorDemoGrid = [
  { state: 'primary', color: 'bg-violet-600', border: 'border-violet-600', text: 'text-white', label: 'Primary', labelColor: 'text-violet-600' },
  { state: 'success', color: 'bg-emerald-700', border: 'border-emerald-700', text: 'text-white', label: 'Success', labelColor: 'text-emerald-700' },
  { state: 'error', color: 'bg-red-600', border: 'border-red-600', text: 'text-white', label: 'Error', labelColor: 'text-red-600' },
  { state: 'warning', color: 'bg-amber-300', border: 'border-amber-300', text: 'text-gray-900', label: 'Warning', labelColor: 'text-amber-700' },
  { state: 'white', color: 'bg-white', border: 'border-gray-200', text: 'text-gray-900', label: 'White', labelColor: 'text-gray-900' },
  { state: 'secondary', color: 'bg-gray-100', border: 'border-gray-200', text: 'text-gray-900', label: 'Secondary', labelColor: 'text-slate-700' },
];

const iconPalette = [
  // Icon buttons (xs, sm, md, lg, xl)
  { iconOnly: true, size: 'iconXs', state: 'primary' },
  { iconOnly: true, size: 'iconSm', state: 'primary' },
  { iconOnly: true, size: 'iconMd', state: 'primary' },
  { iconOnly: true, size: 'iconLg', state: 'primary' },
  { iconOnly: true, size: 'iconXl', state: 'primary' },
];

const DispatchIcon = (props) => (
  <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <circle cx={props.size/2} cy={props.size/2} r={(props.size/2)-1} stroke={props.iconColor ?? 'white'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0"><rect width={props.size} height={props.size} fill="white"/></clipPath>
    </defs>
  </svg>
);

const CircleSecondaryIcon = (props) => (
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
);

// The actual export so the component is directly usable
export default HyButton;