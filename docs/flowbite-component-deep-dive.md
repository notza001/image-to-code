# Flowbite React Component Deep Dive

> Comprehensive knowledge base for component patterns - Research date: 2026-02-03

## Table of Contents

1. [Component Overview](#component-overview)
2. [Core Components](#core-components)
   - [Button](#button)
   - [Card](#card)
   - [Badge](#badge)
   - [Alert](#alert)
   - [Modal](#modal)
   - [Navbar](#navbar)
   - [Table](#table)
   - [Avatar](#avatar)
   - [Dropdown](#dropdown)
   - [Sidebar](#sidebar)
   - [Tabs](#tabs)
   - [Tooltip](#tooltip)
3. [Layout Components](#layout-components)
   - [Accordion](#accordion)
   - [Breadcrumb](#breadcrumb)
   - [Carousel](#carousel)
   - [Footer](#footer)
   - [Timeline](#timeline)
   - [List Group](#list-group)
4. [Feedback Components](#feedback-components)
   - [Progress Bar](#progress-bar)
   - [Spinner](#spinner)
   - [Toast](#toast)
   - [Rating](#rating)
   - [Pagination](#pagination)
5. [Form Components](#form-components)
   - [TextInput](#textinput)
   - [Textarea](#textarea)
   - [Select](#select)
   - [Checkbox](#checkbox)
   - [Radio](#radio)
   - [Toggle Switch](#toggle-switch)
   - [File Input](#file-input)
   - [Floating Label](#floating-label)
   - [Datepicker](#datepicker)
6. [Overlay Components](#overlay-components)
   - [Drawer](#drawer)
   - [Popover](#popover)
   - [Banner](#banner)
7. [Typography Components](#typography-components)
   - [Blockquote](#blockquote)
   - [List](#list)
   - [KBD (Keyboard)](#kbd-keyboard)
8. [Utility Components](#utility-components)
   - [Button Group](#button-group)
   - [Clipboard](#clipboard)
9. [Theme Customization](#theme-customization)
10. [Quick Reference for Image-to-Code](#quick-reference-for-image-to-code)
11. [Pages That Could Not Be Accessed](#pages-that-could-not-be-accessed)

---

## Component Overview

Flowbite React provides **32+ open-source UI components** built with React, Flowbite, and Tailwind CSS. All components feature:

- Light and dark mode support
- Full TypeScript support
- Tailwind CSS utility classes
- Customizable themes
- Accessibility features

### Complete Component List

| Category | Components |
|----------|------------|
| **Actions** | Button, Button Group, Clipboard |
| **Navigation** | Navbar, Sidebar, Breadcrumb, Pagination, Tabs, Dropdown |
| **Data Display** | Card, Table, Avatar, Badge, List Group, Timeline, Rating |
| **Feedback** | Alert, Modal, Toast, Progress, Spinner, Tooltip, Popover |
| **Forms** | TextInput, Textarea, Select, Checkbox, Radio, Toggle, File Input, Floating Label, Datepicker |
| **Layout** | Accordion, Carousel, Footer, Drawer |
| **Typography** | Blockquote, List, KBD |
| **Marketing** | Banner |

---

## Core Components

### Button

**Import:**
```jsx
import { Button } from "flowbite-react";
```

**Visual Pattern:** Rectangular clickable element with text/icon, rounded corners, hover/focus states.

**Variants:**

| Variant | Prop | Description |
|---------|------|-------------|
| Solid | `color="blue"` | Filled background |
| Outline | `outline` | Transparent with border |
| Pill | `pill` | Fully rounded corners |
| Gradient Mono | `gradientMonochrome="blue"` | Single color gradient |
| Gradient Duo | `gradientDuoTone="purpleToBlue"` | Two-color gradient |

**Colors:** `default`, `alternative`, `dark`, `light`, `green`, `red`, `yellow`, `purple`, `blue`, `cyan`, `gray`, `indigo`, `lime`, `pink`, `teal`

**Sizes:**
| Size | Classes |
|------|---------|
| `xs` | `h-8 px-3 text-xs` |
| `sm` | `h-9 px-3 text-sm` |
| `md` | `h-10 px-5 text-sm` |
| `lg` | `h-12 px-5 text-base` |
| `xl` | `h-[52px] px-6 text-base` |

**Key Props:**
- `disabled` - Disables interaction (adds `opacity-50`)
- `iconOnly` - Icon-only button
- `as` - Render as different element (e.g., `as={Link}`)

**Common Tailwind Classes:**
```css
/* Base */
relative flex items-center justify-center rounded-lg text-center font-medium
focus:outline-none focus:ring-4

/* Disabled */
opacity-50 cursor-not-allowed
```

---

### Card

**Import:**
```jsx
import { Card } from "flowbite-react";
```

**Visual Pattern:** Container with border, shadow, optional image, padding for content.

**Variants:**

| Variant | Description |
|---------|-------------|
| Default | Title + description, clickable via `href` |
| With Image | `imgSrc`, `imgAlt` props |
| Horizontal | `horizontal` prop for side-by-side layout |
| Pricing | Features list with checkmarks |
| E-commerce | Product with rating, price, buy button |
| User Profile | Avatar, name, title, action buttons |
| With Form | Integrated form elements |

**Key Props:**
- `href` - Makes card clickable
- `imgSrc` / `imgAlt` - Image source and alt
- `renderImage` - Custom image renderer (for Next.js Image)
- `horizontal` - Side-by-side layout

**Common Tailwind Classes:**
```css
/* Base */
flex rounded-lg border border-gray-200 bg-white shadow-md
dark:border-gray-700 dark:bg-gray-800

/* Children container */
flex h-full flex-col justify-center gap-4 p-6

/* Horizontal */
flex-col md:max-w-xl md:flex-row

/* Image */
rounded-t-lg

/* Hover (when href) */
hover:bg-gray-100 dark:hover:bg-gray-700
```

---

### Badge

**Import:**
```jsx
import { Badge } from "flowbite-react";
```

**Visual Pattern:** Small inline label/tag with colored background.

**Colors:** `info` (cyan), `gray`, `failure` (red), `success` (green), `warning` (yellow), `indigo`, `purple`, `pink`, `blue`, `cyan`, `dark`, `light`, `green`, `lime`, `red`, `teal`, `yellow`

**Sizes:** `xs`, `sm`

**Key Props:**
- `color` - Background/text color
- `size` - Badge dimensions
- `icon` - Icon component

**Common Tailwind Classes:**
```css
/* Base */
flex h-fit items-center gap-1 font-semibold

/* Sizes */
p-1 text-xs          /* xs */
p-1.5 text-sm        /* sm */

/* With text */
rounded px-2 py-0.5

/* Icon only */
rounded-full p-1.5
```

---

### Alert

**Import:**
```jsx
import { Alert } from "flowbite-react";
```

**Visual Pattern:** Colored box with optional icon, text, and dismiss button.

**Colors:** `info`, `success`, `warning`, `failure`, `gray`, `blue`, `pink`, `lime`, `dark`, `indigo`, `purple`, `teal`, `light`

**Key Props:**
- `color` - Alert color scheme
- `icon` - Icon component (e.g., `HiInformationCircle`)
- `onDismiss` - Makes alert dismissible
- `rounded` - Applies `rounded-lg`
- `withBorderAccent` - Adds `border-t-4`
- `additionalContent` - Extra content below main text

**Common Tailwind Classes:**
```css
/* Base */
flex flex-col gap-2 p-4 text-sm

/* Icon */
mr-3 inline h-5 w-5 shrink-0

/* Dismiss button */
-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2

/* Border accent */
border-t-4
```

---

### Modal

**Import:**
```jsx
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
```

**Visual Pattern:** Overlay dialog with header, body, footer sections.

**Sizes:** `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`

**Positions:** `center`, `top-left`, `top-center`, `top-right`, `center-left`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`

**Key Props:**
- `show` - Controls visibility
- `onClose` - Close callback
- `dismissible` - Click backdrop to close
- `popup` - Compact confirmation style
- `size` - Modal width
- `position` - Modal placement
- `initialFocus` - Ref for initial focus

**Sub-Components:**
- `ModalHeader` - Title and close button
- `ModalBody` - Content area
- `ModalFooter` - Action buttons

**Common Tailwind Classes:**
```css
/* Root container */
fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto

/* Content wrapper */
relative h-full w-full p-4 md:h-auto

/* Inner modal */
relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow
dark:bg-gray-700

/* Body */
flex-1 overflow-auto p-6

/* Header */
flex items-start justify-between rounded-t border-b p-5

/* Footer */
flex items-center gap-2 rounded-b border-gray-200 p-6
```

---

### Navbar

**Import:**
```jsx
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
```

**Visual Pattern:** Horizontal navigation bar with logo, links, mobile menu toggle.

**Variants:**
- Default - Logo + links + toggle
- With CTA - Includes action button
- With Dropdown - User avatar + dropdown menu

**Key Props:**

| Component | Props |
|-----------|-------|
| `Navbar` | `fluid`, `rounded` |
| `NavbarBrand` | `as`, `href` |
| `NavbarLink` | `href`, `active` |

**Common Tailwind Classes:**
```css
/* Container */
px-2 py-2.5 sm:px-4

/* Layout */
flex flex-wrap items-center justify-between

/* Brand */
text-xl font-semibold dark:text-white

/* Link */
block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100
dark:text-white dark:hover:bg-gray-700

/* Active link */
bg-primary-700 text-white

/* Responsive */
md:flex md:w-auto
```

---

### Table

**Import:**
```jsx
import { Table, TableHead, TableBody, TableRow, TableHeadCell, TableCell } from "flowbite-react";
```

**Visual Pattern:** Data grid with header row, body rows, optional actions.

**Variants:**
- Default - Basic table
- Striped - `striped` prop for alternating backgrounds
- Hoverable - `hoverable` prop for row hover effects
- With Checkboxes - Bulk action support

**Key Props:**
- `striped` - Alternating row backgrounds
- `hoverable` - Row hover effects

**Common Tailwind Classes:**
```css
/* Container */
overflow-x-auto

/* Table */
divide-y

/* Header cell */
bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase
text-gray-500 dark:bg-gray-700 dark:text-gray-400

/* Body cell */
whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white

/* Striped rows */
odd:bg-white even:bg-gray-50
odd:dark:bg-gray-800 even:dark:bg-gray-700

/* Hover */
hover:bg-gray-50 dark:hover:bg-gray-600
```

---

### Avatar

**Import:**
```jsx
import { Avatar, AvatarGroup } from "flowbite-react";
```

**Visual Pattern:** Circular/rounded image representing a user.

**Sizes:**
| Size | Classes |
|------|---------|
| `xs` | `h-6 w-6` |
| `sm` | `h-8 w-8` |
| `md` | `h-10 w-10` |
| `lg` | `h-20 w-20` |
| `xl` | `h-36 w-36` |

**Status Indicators:** `online`, `offline`, `busy`, `away`

**Key Props:**
- `img` - Image URL or component
- `alt` - Accessibility text
- `rounded` - Circular shape
- `bordered` - Ring border
- `placeholder` - Default when no image
- `placeholderInitials` - Display initials
- `status` - Status dot
- `statusPosition` - Dot position
- `size` - Dimensions
- `color` - Ring color
- `stacked` - For grouped avatars

**Common Tailwind Classes:**
```css
/* Base */
rounded-full

/* Bordered */
ring-2 ring-gray-300 dark:ring-gray-500

/* Status dot */
absolute h-3 w-3 rounded-full border-2 border-white

/* Status colors */
bg-green-400    /* online */
bg-red-400      /* busy */
bg-yellow-400   /* away */
bg-gray-400     /* offline */

/* Status positions */
-bottom-1 -right-1
-top-1 -right-1
```

---

### Dropdown

**Import:**
```jsx
import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from "flowbite-react";
```

**Visual Pattern:** Button that reveals a list of options on click.

**Placements:** `top`, `right`, `bottom`, `left`, `left-start`, `right-start`

**Key Props:**
- `label` - Trigger button text
- `size` - `sm`, `md`, `lg`
- `placement` - Position relative to trigger
- `inline` - Inline display mode
- `dismissOnClick` - Close on item click
- `enableTypeAhead` - Keyboard navigation
- `renderTrigger` - Custom trigger element

**DropdownItem Props:**
- `icon` - Icon before text
- `onClick` - Click handler
- `as` - Base element (Link, etc.)

**Common Tailwind Classes:**
```css
/* Content wrapper */
py-1 focus:outline-none

/* Floating container */
z-10 w-fit divide-y divide-gray-100

/* Item base */
flex w-full cursor-pointer items-center justify-start px-4 py-2

/* Item hover */
hover:bg-gray-100 dark:hover:bg-gray-600

/* Arrow icon */
ml-2 h-4 w-4
```

---

### Sidebar

**Import:**
```jsx
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarCollapse, SidebarLogo, SidebarCTA } from "flowbite-react";
```

**Visual Pattern:** Vertical navigation panel, typically on the left side.

**Variants:**
- Default - Basic navigation list
- With Logo - Brand identity at top
- Multi-level - Collapsible sections
- With CTA - Promotional content area
- Content Separator - Grouped items

**Key Props:**

| Component | Props |
|-----------|-------|
| `SidebarItem` | `href`, `icon`, `label`, `labelColor` |
| `SidebarCollapse` | `icon`, `label`, `chevronIcon`, `renderChevronIcon` |
| `SidebarLogo` | `href`, `img`, `imgAlt` |

**Common Tailwind Classes:**
```css
/* Root */
h-full w-64 overflow-y-auto overflow-x-hidden bg-gray-50 dark:bg-gray-800

/* Collapsed width */
w-16

/* Item */
rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:hover:bg-gray-700

/* Active item */
bg-gray-100 dark:bg-gray-700

/* Icons */
h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400

/* Group separator */
border-t border-gray-200 pt-4 mt-4 dark:border-gray-700

/* CTA */
mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700
```

---

### Tabs

**Import:**
```jsx
import { Tabs, TabItem } from "flowbite-react";
```

**Visual Pattern:** Horizontal navigation for switching between views.

**Variants:**
| Variant | `variant` prop |
|---------|----------------|
| Default | `"default"` |
| Underline | `"underline"` |
| Pills | `"pills"` |
| Full Width | `"fullWidth"` |

**Key Props:**

| Component | Props |
|-----------|-------|
| `Tabs` | `variant`, `aria-label`, `onActiveTabChange` |
| `TabItem` | `active`, `title`, `icon`, `disabled` |

**Common Tailwind Classes:**
```css
/* Tab list */
flex flex-wrap border-b border-gray-200

/* Tab item */
py-3 text-sm font-medium

/* Default active */
bg-gray-100 text-primary-600

/* Underline active */
border-b-2 border-primary-600 text-primary-600

/* Pills active */
rounded-lg bg-primary-600 text-white

/* Full width */
grid w-full

/* Disabled */
cursor-not-allowed opacity-50
```

---

### Tooltip

**Import:**
```jsx
import { Tooltip } from "flowbite-react";
```

**Visual Pattern:** Floating text that appears on hover/click.

**Placements:** `top`, `right`, `bottom`, `left`

**Styles:**
- `light` - White background, border
- `dark` - Gray-900 background
- `auto` - Adapts to theme

**Triggers:** `hover` (default), `click`

**Animation:** `duration-150`, `duration-300` (default), `duration-500`, `duration-1000`, or `false`

**Key Props:**
- `content` - Tooltip text
- `trigger` - `hover` or `click`
- `placement` - Position
- `style` - Visual style
- `animation` - Animation duration
- `arrow` - Show/hide arrow

**Common Tailwind Classes:**
```css
/* Base */
absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm

/* Arrow */
absolute z-10 h-2 w-2 rotate-45

/* Light style */
border border-gray-200 bg-white text-gray-900

/* Dark style */
bg-gray-900 text-white dark:bg-gray-700

/* Hidden state */
invisible opacity-0

/* Animation */
transition-opacity
```

---

## Layout Components

### Accordion

**Import:**
```jsx
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
```

**Visual Pattern:** Vertically stacked panels that expand/collapse.

**Key Props:**
- `collapseAll` - All panels closed by default

**Common Tailwind Classes:**
```css
/* Title */
text-gray-500 dark:text-gray-400
hover:bg-gray-100 dark:hover:bg-gray-800
focus:ring-4 focus:ring-gray-200

/* Content */
p-5 text-gray-500 dark:text-gray-400

/* Border */
rounded-lg border border-gray-200 dark:border-gray-700

/* Links */
text-cyan-600 hover:underline dark:text-cyan-500
```

---

### Breadcrumb

**Import:**
```jsx
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
```

**Visual Pattern:** Horizontal path showing current location.

**Key Props:**
- `href` - Makes item clickable
- `icon` - Icon component (e.g., `HiHome`)

**Common Tailwind Classes:**
```css
/* List */
flex items-center

/* Item */
group flex items-center

/* Chevron separator */
mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2

/* Link item */
text-sm font-medium text-gray-700 hover:text-gray-900
dark:text-gray-400 dark:hover:text-white

/* Non-link item */
text-sm font-medium text-gray-500 dark:text-gray-400

/* Icon */
mr-2 h-4 w-4

/* Background variant */
bg-gray-50 px-5 py-3 dark:bg-gray-800
```

---

### Carousel

**Import:**
```jsx
import { Carousel } from "flowbite-react";
```

**Visual Pattern:** Slideshow with controls and indicators.

**Key Props:**
- `slide` - Enable/disable auto-sliding
- `slideInterval` - Milliseconds between slides (default: 3000)
- `leftControl` / `rightControl` - Custom control elements
- `indicators` - Show/hide indicators
- `pauseOnHover` - Pause on interaction
- `onSlideChange` - Slide change callback

**Common Tailwind Classes:**
```css
/* Container sizing */
h-56 sm:h-64 xl:h-80 2xl:h-96

/* Slide content */
flex items-center justify-center

/* Backgrounds */
bg-gray-400 dark:bg-gray-700

/* Control buttons */
bg-white/30 hover:bg-white/50 group-focus:ring-4

/* Indicators */
h-3 w-3 rounded-full
```

---

### Footer

**Import:**
```jsx
import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
```

**Visual Pattern:** Page bottom section with links, copyright, social icons.

**Variants:**
- Default - Copyright + links
- With Logo - Brand identity
- Social Media Icons - Platform links
- Sitemap Links - Organized link groups

**Key Props:**
- `href` - Link destination
- `year` - Copyright year
- `by` - Copyright attribution
- `col` - Vertical link grouping
- `container` - Adds padding

**Common Tailwind Classes:**
```css
/* Root */
w-full rounded-lg bg-white shadow md:flex md:items-center md:justify-between
dark:bg-gray-800

/* Section title */
text-sm font-semibold uppercase text-gray-500 dark:text-white

/* Link */
text-gray-500 hover:underline dark:text-gray-400

/* Grid layout */
grid-cols-2 gap-8 md:grid-cols-4
```

---

### Timeline

**Import:**
```jsx
import { Timeline, TimelineItem, TimelinePoint, TimelineContent, TimelineTime, TimelineTitle, TimelineBody } from "flowbite-react";
```

**Visual Pattern:** Chronological list of events with markers.

**Variants:**
- Vertical (default)
- Horizontal - `horizontal` prop

**Common Tailwind Classes:**
```css
/* Vertical root */
relative border-l border-gray-200 dark:border-gray-700

/* Horizontal root */
sm:flex

/* Item (vertical) */
mb-10 ml-6

/* Item (horizontal) */
relative mb-6 sm:mb-0

/* Point marker */
absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200
dark:border-gray-900 dark:bg-gray-700

/* Time */
mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500

/* Title */
text-lg font-semibold text-gray-900 dark:text-white

/* Body */
mb-4 text-base font-normal text-gray-500 dark:text-gray-400
```

---

### List Group

**Import:**
```jsx
import { ListGroup, ListGroupItem } from "flowbite-react";
```

**Visual Pattern:** Vertical list of items, links, or buttons.

**Key Props:**
- `href` - Converts to link
- `active` - Highlights item
- `disabled` - Disables interaction
- `onClick` - Click handler
- `icon` - Icon component

**Common Tailwind Classes:**
```css
/* Root */
list-none rounded-lg border border-gray-200 bg-white text-left text-sm
font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700

/* Item base */
flex w-full items-center border-b border-gray-200 px-4 py-2
dark:border-gray-600

/* Active */
bg-cyan-700 text-white dark:bg-gray-800

/* Hover (inactive) */
hover:bg-gray-100 hover:text-cyan-700 dark:hover:bg-gray-600

/* Disabled */
cursor-not-allowed bg-gray-100 text-gray-900

/* Icon */
mr-2 h-4 w-4 fill-current
```

---

## Feedback Components

### Progress Bar

**Import:**
```jsx
import { Progress } from "flowbite-react";
```

**Visual Pattern:** Horizontal bar showing completion percentage.

**Sizes:**
| Size | Height |
|------|--------|
| `sm` | `h-1.5` |
| `md` | `h-2.5` |
| `lg` | `h-4` |
| `xl` | `h-6` |

**Colors:** `dark`, `blue`, `red`, `green`, `yellow`, `indigo`, `purple`, `cyan`, `gray`, `lime`, `pink`, `teal`

**Key Props:**
- `progress` - 1-100 percentage
- `size` - Bar height
- `color` - Bar color
- `textLabel` - Label text
- `labelText` - Show percentage
- `labelProgress` - Show progress indicator
- `progressLabelPosition` - `inside` or `outside`

**Common Tailwind Classes:**
```css
/* Container */
w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700

/* Progress bar */
space-x-2 rounded-full text-center font-medium leading-none
text-primary-300 dark:text-primary-100
```

---

### Spinner

**Import:**
```jsx
import { Spinner } from "flowbite-react";
```

**Visual Pattern:** Animated circular loading indicator.

**Sizes:**
| Size | Classes |
|------|---------|
| `xs` | `h-3 w-3` |
| `sm` | `h-4 w-4` |
| `md` | `h-6 w-6` |
| `lg` | `h-8 w-8` |
| `xl` | `h-10 w-10` |

**Colors:**
| Color | Fill Class |
|-------|------------|
| `info` | `fill-cyan-600` |
| `success` | `fill-green-500` |
| `failure` | `fill-red-600` |
| `warning` | `fill-yellow-400` |
| `pink` | `fill-pink-600` |
| `purple` | `fill-purple-600` |
| `default` | `fill-primary-600` |
| `gray` | `fill-gray-600` |

**Key Props:**
- `aria-label` - Required accessibility attribute
- `size` - Spinner dimensions
- `color` - Fill color
- `light` - Light variant

**Common Tailwind Classes:**
```css
/* Base */
inline animate-spin text-gray-200 dark:text-gray-600
```

---

### Toast

**Import:**
```jsx
import { Toast, ToastToggle } from "flowbite-react";
```

**Visual Pattern:** Small notification box with icon and message.

**Color Patterns:**
| Type | Icon Container Classes |
|------|----------------------|
| Success | `bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200` |
| Error | `bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200` |
| Warning | `bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200` |

**Key Props:**
- `onDismiss` - Custom dismissal handler

**Common Tailwind Classes:**
```css
/* Root */
flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500
shadow dark:bg-gray-800 dark:text-gray-400

/* Icon container */
inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg

/* Message */
ml-3 text-sm font-normal

/* Toggle button */
-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400
hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300
```

---

### Rating

**Import:**
```jsx
import { Rating, RatingStar, RatingAdvanced } from "flowbite-react";
```

**Visual Pattern:** Star-based rating display with optional text.

**Sizes:**
| Size | Classes |
|------|---------|
| `sm` | `h-5 w-5` |
| `md` | `h-7 w-7` |
| `lg` | `h-10 w-10` |

**Key Props:**
- `filled` - Star fill state (default: true)
- `size` - Star dimensions
- `percentFilled` - For RatingAdvanced progress

**Common Tailwind Classes:**
```css
/* Container */
flex items-center

/* Star empty */
text-gray-300 dark:text-gray-500

/* Star filled */
text-yellow-400

/* Separator dot */
mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400

/* Advanced progress container */
mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700

/* Advanced progress fill */
h-5 rounded bg-yellow-400
```

---

### Pagination

**Import:**
```jsx
import { Pagination } from "flowbite-react";
```

**Visual Pattern:** Numbered page navigation with prev/next controls.

**Layouts:**
- `pagination` - Numbered pages (default)
- `navigation` - Only prev/next
- `table` - Shows entry counts

**Key Props:**
- `currentPage` - Active page
- `totalPages` - Total pages
- `totalItems` - Total items (table layout)
- `itemsPerPage` - Per page count (table layout)
- `onPageChange` - Page change callback
- `layout` - `pagination`, `navigation`, or `table`
- `showIcons` - Arrow icons on controls
- `previousLabel` / `nextLabel` - Custom button text

**Common Tailwind Classes:**
```css
/* Container */
inline-flex items-center -space-x-px

/* Button base */
border border-gray-300 bg-white text-gray-500
dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400

/* Hover */
enabled:hover:bg-gray-100 enabled:hover:text-gray-700
enabled:dark:hover:bg-gray-700

/* Active page */
bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700
dark:bg-gray-700 dark:text-white

/* Disabled */
cursor-not-allowed opacity-50
```

---

## Form Components

### TextInput

**Import:**
```jsx
import { TextInput, Label } from "flowbite-react";
```

**Visual Pattern:** Single-line text field with optional label, icons, addon.

**Sizes:** `sm`, `md`, `lg`

**Colors:** `gray`, `info`, `success`, `failure`, `warning`

**Key Props:**
- `sizing` - Input size
- `disabled` / `readOnly` - States
- `shadow` - Box shadow
- `icon` / `rightIcon` - Icon components
- `addon` - Text prefix
- `color` - Validation state color
- `type` - Input type
- `placeholder` - Placeholder text
- `required` - Required field

**Common Tailwind Classes:**
```css
/* Base */
block w-full border focus:outline-none focus:ring-1
disabled:cursor-not-allowed disabled:opacity-50

/* Sizes */
p-2 sm:text-xs        /* sm */
p-2.5 text-sm         /* md */
p-4 sm:text-base      /* lg */

/* Default color */
border-gray-300 bg-gray-50 text-gray-900
focus:border-cyan-500 focus:ring-cyan-500

/* Success */
border-green-500 bg-green-50 text-green-900

/* Failure */
border-red-500 bg-red-50 text-red-900
```

---

### Textarea

**Import:**
```jsx
import { Textarea, Label } from "flowbite-react";
```

**Visual Pattern:** Multi-line text input field.

**Colors:** `gray`, `info`, `success`, `failure`, `warning`

**Key Props:**
- `placeholder` - Placeholder text
- `required` - Required field
- `rows` - Number of visible rows
- `color` - Validation state
- `disabled` - Disabled state

**Common Tailwind Classes:**
```css
/* Base */
block w-full rounded-lg border p-2.5 text-sm focus:outline-none focus:ring-1
```

---

### Select

**Import:**
```jsx
import { Select, Label } from "flowbite-react";
```

**Visual Pattern:** Dropdown selection field.

**Key Props:**
- `required` - Required field
- Wraps native `<option>` elements

**Common Tailwind Classes:**
```css
/* Base */
block w-full rounded-lg border bg-gray-50 p-2.5 text-sm
text-gray-900 focus:border-cyan-500 focus:ring-cyan-500
```

---

### Checkbox

**Import:**
```jsx
import { Checkbox, Label } from "flowbite-react";
```

**Visual Pattern:** Square check box with optional label.

**Key Props:**
- `id` - Element ID
- `disabled` - Disabled state
- `defaultChecked` - Initial checked state

**Common Tailwind Classes:**
```css
/* Base */
h-4 w-4 appearance-none rounded border checked:bg-check-icon
focus:ring-2 focus:ring-offset-2

/* Colors */
border-gray-300 bg-gray-100 text-cyan-600 focus:ring-cyan-500
```

---

### Radio

**Import:**
```jsx
import { Radio, Label } from "flowbite-react";
```

**Visual Pattern:** Circular selection indicator.

**Key Props:**
- `id` - Element ID
- `name` - Radio group name
- `value` - Radio value
- `defaultChecked` - Initial checked state
- `disabled` - Disabled state

**Common Tailwind Classes:**
```css
/* Base */
h-4 w-4 appearance-none rounded-full border checked:bg-dot-icon

/* Colors */
border-gray-300 bg-gray-100 text-cyan-600 focus:ring-cyan-500
```

---

### Toggle Switch

**Import:**
```jsx
import { ToggleSwitch } from "flowbite-react";
```

**Visual Pattern:** Sliding on/off switch.

**Sizes:**
| Size | Classes |
|------|---------|
| `sm` | `h-5 w-9` |
| `md` | `h-6 w-11` |
| `lg` | `h-7 w-[52px]` |

**Key Props:**
- `checked` - Toggle state
- `onChange` - Change handler
- `label` - Label text
- `disabled` - Disabled state
- `color` - Toggle color
- `sizing` - Toggle size

**Common Tailwind Classes:**
```css
/* Base */
relative rounded-full after:absolute after:rounded-full

/* Track */
bg-gray-200 dark:bg-gray-700

/* Thumb */
after:bg-white after:transition-all

/* Checked */
bg-cyan-600 after:translate-x-full
```

---

### File Input

**Import:**
```jsx
import { FileInput, Label, HelperText } from "flowbite-react";
```

**Visual Pattern:** File upload field with browse button.

**Sizes:** `sm`, `md`, `lg`

**Key Props:**
- `id` - Element ID
- `multiple` - Allow multiple files
- `sizing` - Size variant

**Common Tailwind Classes:**
```css
/* Base */
block w-full cursor-pointer rounded-lg border

/* File button */
file:bg-gray-800 file:text-white hover:file:bg-gray-700
dark:file:bg-gray-600 dark:hover:file:bg-gray-500

/* Dropzone style */
flex h-64 w-full cursor-pointer flex-col items-center justify-center
rounded-lg border-2 border-dashed border-gray-300 bg-gray-50
hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700
```

---

### Floating Label

**Import:**
```jsx
import { FloatingLabel, HelperText } from "flowbite-react";
```

**Visual Pattern:** Input with label that floats above on focus/content.

**Variants:**
| Variant | Description |
|---------|-------------|
| `filled` | Rounded top, bottom border, gray background |
| `outlined` | Full rounded border, transparent background |
| `standard` | Bottom border only, transparent background |

**Sizes:** `sm`, `md`

**Colors:** `default`, `success`, `error`

**Key Props:**
- `variant` - Visual style
- `label` - Label text
- `sizing` - Input size
- `color` - Validation state
- `disabled` - Disabled state

**Common Tailwind Classes:**
```css
/* Filled */
px-2.5 pb-2.5 pt-5 bg-gray-50 border-0 border-b-2 rounded-t-lg

/* Outlined */
px-2.5 pb-2.5 pt-4 bg-transparent border rounded-lg

/* Standard */
px-0 py-2.5 bg-transparent border-0 border-b-2

/* Label animation */
peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
peer-focus:scale-75 peer-focus:-translate-y-4

/* Success */
border-green-600 text-green-600

/* Error */
border-red-600 text-red-600
```

---

### Datepicker

**Import:**
```jsx
import { Datepicker } from "flowbite-react";
```

**Visual Pattern:** Calendar popup for date selection.

**Key Props:**
- `language` - Localization (e.g., "pt-BR")
- `labelTodayButton` / `labelClearButton` - Custom button text
- `filterDate` - Date filtering function
- `minDate` / `maxDate` - Date range limits
- `weekStart` - First day of week (0-6)
- `autoHide` - Auto-close after selection
- `title` - Header text
- `inline` - Always visible calendar
- `value` - Controlled date state
- `onChange` - Change callback

**Common Tailwind Classes:**
```css
/* Positioning */
absolute top-10 z-50

/* Calendar container */
p-4 rounded-lg shadow-lg bg-white dark:bg-gray-700

/* Grid */
grid-cols-7  /* days */
grid-cols-4  /* months/years */

/* Day cell */
text-sm text-center hover:bg-gray-100

/* Selected day */
bg-primary-700 text-white

/* Today */
bg-gray-100 dark:bg-gray-600
```

---

## Overlay Components

### Drawer

**Import:**
```jsx
import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
```

**Visual Pattern:** Slide-out panel from screen edge.

**Positions:** `left` (default), `right`, `top`, `bottom`

**Key Props:**
- `open` - Controls visibility
- `onClose` - Close callback
- `position` - Placement location
- `backdrop` - Show/hide overlay
- `bodyScrolling` - Allow page scrolling
- `edge` - Show drawer edge when closed

**Common Tailwind Classes:**
```css
/* Base */
fixed z-40 transition-transform

/* Left */
top-0 left-0 h-screen w-80 -translate-x-full

/* Right */
top-0 right-0 h-screen w-80 translate-x-full

/* Top */
top-0 left-0 right-0 w-full -translate-y-full

/* Bottom */
bottom-0 left-0 right-0 w-full translate-y-full

/* Open state */
translate-x-0 translate-y-0

/* Backdrop */
fixed inset-0 z-30 bg-gray-900/50
```

---

### Popover

**Import:**
```jsx
import { Popover } from "flowbite-react";
```

**Visual Pattern:** Floating content box with arrow pointing to trigger.

**Placements:** `top`, `right`, `bottom` (default), `left`

**Triggers:** `hover` (default), `click`

**Key Props:**
- `content` - Popover content
- `trigger` - Interaction type
- `placement` - Position
- `arrow` - Show/hide arrow
- `open` - Controlled state
- `onOpenChange` - State callback

**Common Tailwind Classes:**
```css
/* Container */
w-64 text-sm rounded-lg border border-gray-200 bg-white shadow-sm
dark:border-gray-600 dark:bg-gray-800

/* Header */
border-b bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700

/* Arrow */
h-2 w-2 rotate-45
```

---

### Banner

**Import:**
```jsx
import { Banner, BannerCollapseButton } from "flowbite-react";
```

**Visual Pattern:** Full-width marketing/notification bar.

**Variants:**
- Top position (bottom border)
- Bottom position (top border)
- Marketing CTA
- Newsletter sign-up
- Informational

**Common Tailwind Classes:**
```css
/* Top position */
border-b border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700

/* Bottom position */
border-t border-gray-200

/* Marketing */
w-[calc(100%-2rem)] lg:max-w-7xl rounded-lg shadow-sm

/* Layout */
flex justify-between items-center gap-x-3
```

---

## Typography Components

### Blockquote

**Import:**
```jsx
import { Blockquote } from "flowbite-react";
```

**Visual Pattern:** Styled quote with optional icon, attribution.

**Variants:**
- Default - Basic quote
- Solid background - With border and background
- With icon - Quotation mark icon
- User testimonial - Avatar, name, title

**Alignments:** left (default), center, right

**Common Tailwind Classes:**
```css
/* Base */
text-xl font-semibold italic text-gray-900 dark:text-white

/* Solid background */
my-4 border-l-4 border-gray-300 bg-gray-50 p-4
dark:border-gray-500 dark:bg-gray-800

/* Attribution */
mt-6 flex items-center justify-center space-x-3
```

---

### List

**Import:**
```jsx
import { List, ListItem } from "flowbite-react";
```

**Visual Pattern:** Ordered or unordered list with customizable markers.

**Key Props:**
- `ordered` - Numbered list
- `unstyled` - No markers
- `horizontal` - Inline items
- `nested` - Indented sublists
- `icon` (ListItem) - Custom marker icon

**Common Tailwind Classes:**
```css
/* Default (unordered) */
list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400

/* Ordered */
list-inside list-decimal

/* Unstyled */
list-none

/* Horizontal */
flex list-none flex-wrap

/* Nested */
mt-2 ps-5

/* With icon */
flex items-center
```

---

### KBD (Keyboard)

**Import:**
```jsx
import { Kbd } from "flowbite-react";
```

**Visual Pattern:** Inline keyboard key representation.

**Key Props:**
- `children` - Key text
- `icon` - Icon for arrow/symbol keys

**Common Tailwind Classes:**
```css
/* Base */
rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5
text-xs font-semibold text-gray-800
dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100
```

---

## Utility Components

### Button Group

**Import:**
```jsx
import { Button, ButtonGroup } from "flowbite-react";
```

**Visual Pattern:** Horizontally stacked buttons as single unit.

**Key Props:**
- `outline` - Outline variant
- `color` - Button colors

**Common Tailwind Classes:**
```css
/* Base */
inline-flex rounded-md shadow-sm

/* Icons */
me-2 h-4 w-4
```

---

### Clipboard

**Import:**
```jsx
import { Clipboard, ClipboardWithIcon, ClipboardWithIconText } from "flowbite-react";
```

**Visual Pattern:** Copy-to-clipboard button/input combination.

**Variants:**
- `Clipboard` - Basic button
- `ClipboardWithIcon` - Icon-only inside input
- `ClipboardWithIconText` - Icon + text inside input

**Key Props:**
- `valueToCopy` - Text to copy
- `label` - Button label

**Common Tailwind Classes:**
```css
/* Input field */
rounded-lg border border-gray-300 bg-gray-50 p-2.5
focus:border-blue-500 focus:ring-blue-500

/* Button */
inline-flex items-center justify-center rounded-lg
bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300

/* Icon positioning */
absolute end-2 top-1/2 -translate-y-1/2
```

---

## Theme Customization

### Customization Methods

1. **Component-Level** - `className` prop
2. **Theme Provider** - Application-wide
3. **Component-Specific Themes** - `theme` prop

### Theme Resolution Order

1. Component `clearTheme` prop
2. Component `theme` prop
3. Nearest parent `ThemeProvider`
4. Default component theme

### Key Theme Props

- `theme` - Apply custom styling
- `clearTheme` - Remove specific values
- `applyTheme` - `merge` or `replace` strategy

### Example

```jsx
import { ThemeProvider, createTheme } from "flowbite-react";

const customTheme = createTheme({
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Button color="primary">Custom Button</Button>
    </ThemeProvider>
  );
}
```

---

## Quick Reference for Image-to-Code

### Common Pattern Recognition

| Visual Pattern | Component | Key Classes |
|---------------|-----------|-------------|
| Rounded button | Button | `rounded-lg px-5 py-2.5 text-sm font-medium` |
| Card with shadow | Card | `rounded-lg border shadow-md p-6` |
| Small colored label | Badge | `rounded px-2 py-0.5 text-xs font-semibold` |
| Alert box | Alert | `p-4 rounded-lg border-l-4` |
| Modal dialog | Modal | `fixed z-50 bg-white rounded-lg shadow` |
| Navigation bar | Navbar | `flex items-center justify-between px-4 py-2.5` |
| Data table | Table | `divide-y border-collapse` |
| User image circle | Avatar | `rounded-full h-10 w-10` |
| Dropdown menu | Dropdown | `z-10 divide-y rounded-lg shadow` |
| Side navigation | Sidebar | `h-full w-64 bg-gray-50` |
| Tab bar | Tabs | `flex flex-wrap border-b` |
| Tooltip box | Tooltip | `rounded-lg px-3 py-2 text-sm shadow-sm` |
| Progress indicator | Progress | `h-2.5 rounded-full bg-gray-200` |
| Loading spinner | Spinner | `animate-spin h-6 w-6` |
| Notification toast | Toast | `flex items-center p-4 rounded-lg shadow` |
| Star rating | Rating | `flex items-center text-yellow-400` |
| Page numbers | Pagination | `inline-flex -space-x-px` |

### Color Mapping

| Semantic | Tailwind |
|----------|----------|
| Primary | `cyan-600`, `blue-700` |
| Success | `green-500`, `green-600` |
| Danger/Failure | `red-500`, `red-600` |
| Warning | `yellow-400`, `orange-500` |
| Info | `cyan-500`, `blue-500` |
| Neutral | `gray-500`, `gray-600` |

### Size Scale

| Size | Padding | Font | Height |
|------|---------|------|--------|
| xs | `px-2 py-1` | `text-xs` | `h-6` |
| sm | `px-3 py-1.5` | `text-xs` | `h-8` |
| md | `px-4 py-2` | `text-sm` | `h-10` |
| lg | `px-5 py-2.5` | `text-base` | `h-12` |
| xl | `px-6 py-3` | `text-base` | `h-14` |

### Dark Mode Pattern

Always include dark mode variants:
```css
bg-white dark:bg-gray-800
text-gray-900 dark:text-white
border-gray-200 dark:border-gray-700
hover:bg-gray-100 dark:hover:bg-gray-700
```

### Interactive States

```css
/* Hover */
hover:bg-gray-100 hover:text-gray-900

/* Focus */
focus:outline-none focus:ring-4 focus:ring-blue-300

/* Active */
active:bg-gray-200

/* Disabled */
disabled:cursor-not-allowed disabled:opacity-50
```

---

## Pages That Could Not Be Accessed

The following URLs returned 404 errors during research:

1. `/docs/components/hr` - HR (Horizontal Rule) component
2. `/docs/components/mega-menu` - Mega Menu component
3. `/docs/components/speed-dial` - Speed Dial component
4. `/docs/components/video` - Video component
5. `/docs/forms/text-input` - Direct form component URLs
6. `/docs/typography/hr` - Typography HR component

**Note:** These components may exist under different URL paths, be part of the non-React Flowbite library only, or have been renamed/reorganized. The core 32+ components documented above were successfully researched and documented.

---

## Summary Statistics

- **Total Components Documented:** 35+
- **Categories:** 8 (Core, Layout, Feedback, Forms, Overlay, Typography, Utility, Customization)
- **Research Date:** 2026-02-03
- **Source:** https://flowbite-react.com/

This knowledge base provides comprehensive patterns for converting UI designs to Flowbite React code, including visual patterns, component structure, variants, props, and the exact Tailwind CSS classes used throughout the library.
