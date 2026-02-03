# Tailwind CSS Component Patterns Reference

> Reference guide สำหรับ image-to-code workflow - รวบรวม patterns ที่ใช้บ่อยจาก Tailwind CSS ecosystem

## Table of Contents

1. [Button](#1-button)
2. [Card](#2-card)
3. [Input/Form Elements](#3-inputform-elements)
4. [Badge](#4-badge)
5. [Navbar](#5-navbar)
6. [Modal](#6-modal)
7. [Table](#7-table)
8. [Alert](#8-alert)
9. [Avatar](#9-avatar)
10. [Dropdown](#10-dropdown)
11. [Common Utility Patterns](#11-common-utility-patterns)

---

## 1. Button

### Visual Pattern
- Rounded rectangle with text centered
- Optional icon (left or right of text)
- Clear visual states (hover, focus, active, disabled)

### Variants

| Variant | Description | Key Classes |
|---------|-------------|-------------|
| **Primary/Solid** | Filled background with contrasting text | `bg-blue-600 text-white hover:bg-blue-700` |
| **Secondary/Outline** | Transparent with border | `bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50` |
| **Ghost/Text** | No background or border | `text-blue-600 hover:bg-blue-50` |
| **Gradient** | Gradient background | `bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700` |
| **Pill** | Fully rounded | `rounded-full` (แทน `rounded-lg`) |

### Sizes

| Size | Padding | Font Size | Example Classes |
|------|---------|-----------|-----------------|
| **xs** | `px-3 py-1.5` | `text-xs` | `text-xs px-3 py-1.5` |
| **sm** | `px-3 py-2` | `text-sm` | `text-sm px-3 py-2` |
| **md** (default) | `px-4 py-2.5` | `text-sm` | `text-sm px-4 py-2.5` |
| **lg** | `px-5 py-3` | `text-base` | `text-base px-5 py-3` |
| **xl** | `px-6 py-3.5` | `text-base` | `text-base px-6 py-3.5` |

### States

```html
<!-- Default -->
<button class="bg-blue-600 text-white rounded-lg px-4 py-2.5 font-medium">
  Button
</button>

<!-- Hover -->
<button class="... hover:bg-blue-700">Button</button>

<!-- Focus -->
<button class="... focus:ring-4 focus:ring-blue-300 focus:outline-none">
  Button
</button>

<!-- Disabled -->
<button class="bg-gray-300 text-gray-500 cursor-not-allowed" disabled>
  Button
</button>

<!-- Loading -->
<button class="... inline-flex items-center">
  <svg class="animate-spin h-4 w-4 mr-2" ...></svg>
  Loading...
</button>
```

### With Icons

```html
<!-- Icon Left -->
<button class="inline-flex items-center gap-2">
  <svg class="w-4 h-4"></svg>
  Button
</button>

<!-- Icon Right -->
<button class="inline-flex items-center gap-2">
  Button
  <svg class="w-4 h-4"></svg>
</button>

<!-- Icon Only -->
<button class="inline-flex items-center justify-center w-10 h-10 rounded-lg">
  <svg class="w-5 h-5"></svg>
</button>
```

### Common Classes Summary
```
Base: inline-flex items-center justify-center font-medium rounded-lg
Focus: focus:ring-4 focus:outline-none
Transition: transition-colors duration-200
```

---

## 2. Card

### Visual Pattern
- Container with background, border, and/or shadow
- Usually rounded corners
- Sections: header, body, footer (optional)

### Base Structure

```html
<div class="bg-white rounded-lg shadow-md border border-gray-200 p-6">
  <!-- Card content -->
</div>
```

### Variants

#### Default Card
```html
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-sm">
  <h5 class="text-xl font-semibold text-gray-900 mb-2">Card Title</h5>
  <p class="text-gray-600">Card description goes here.</p>
</div>
```

#### Card with Image
```html
<div class="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
  <img src="..." class="w-full h-48 object-cover" alt="...">
  <div class="p-5">
    <h5 class="text-xl font-semibold text-gray-900 mb-2">Title</h5>
    <p class="text-gray-600 mb-4">Description</p>
    <button class="...">Action</button>
  </div>
</div>
```

#### Horizontal Card
```html
<div class="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
  <img src="..." class="w-full md:w-48 h-48 md:h-auto object-cover" alt="...">
  <div class="p-5 flex flex-col justify-center">
    <h5 class="text-xl font-semibold">Title</h5>
    <p class="text-gray-600">Description</p>
  </div>
</div>
```

#### Profile/User Card
```html
<div class="bg-white rounded-lg shadow-md p-6 text-center max-w-sm">
  <img src="..." class="w-24 h-24 rounded-full mx-auto mb-4" alt="...">
  <h5 class="text-xl font-semibold text-gray-900">John Doe</h5>
  <p class="text-gray-500 mb-4">Software Developer</p>
  <div class="flex justify-center gap-2">
    <button class="...">Follow</button>
    <button class="...">Message</button>
  </div>
</div>
```

### Common Classes Summary
```
Container: bg-white rounded-lg shadow-sm border border-gray-200
Padding: p-4, p-5, p-6
Image: w-full object-cover rounded-t-lg
Hover: hover:shadow-lg transition-shadow
```

---

## 3. Input/Form Elements

### Visual Pattern
- Rectangular field with border
- Label above or inline
- Placeholder text inside
- Helper text or error message below

### Base Input

```html
<input type="text"
  class="block w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-50
         border border-gray-300 rounded-lg
         focus:ring-blue-500 focus:border-blue-500"
  placeholder="Enter text...">
```

### Sizes

| Size | Classes |
|------|---------|
| **sm** | `px-2.5 py-2 text-sm` |
| **md** | `px-4 py-2.5 text-sm` |
| **lg** | `px-4 py-3 text-base` |
| **xl** | `px-4 py-3.5 text-base` |

### States

```html
<!-- Default -->
<input class="border-gray-300 focus:ring-blue-500 focus:border-blue-500">

<!-- Error/Invalid -->
<input class="bg-red-50 border-red-500 text-red-900
              focus:ring-red-500 focus:border-red-500">
<p class="mt-1 text-sm text-red-600">Error message</p>

<!-- Success/Valid -->
<input class="bg-green-50 border-green-500 text-green-900
              focus:ring-green-500 focus:border-green-500">
<p class="mt-1 text-sm text-green-600">Success message</p>

<!-- Disabled -->
<input class="bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed" disabled>
```

### With Label

```html
<div>
  <label class="block mb-2 text-sm font-medium text-gray-900">
    Email
  </label>
  <input type="email" class="...">
</div>
```

### With Icon

```html
<!-- Icon Left -->
<div class="relative">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500"></svg>
  </div>
  <input class="pl-10 ..." placeholder="Search...">
</div>

<!-- Icon Right -->
<div class="relative">
  <input class="pr-10 ..." type="password">
  <div class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
    <svg class="w-4 h-4 text-gray-500"></svg>
  </div>
</div>
```

### Textarea

```html
<textarea rows="4"
  class="block w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-50
         border border-gray-300 rounded-lg
         focus:ring-blue-500 focus:border-blue-500"
  placeholder="Write your message..."></textarea>
```

### Select

```html
<select class="block w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-50
               border border-gray-300 rounded-lg
               focus:ring-blue-500 focus:border-blue-500">
  <option selected>Choose an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### Checkbox & Radio

```html
<!-- Checkbox -->
<div class="flex items-center">
  <input type="checkbox"
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
           focus:ring-blue-500 focus:ring-2">
  <label class="ml-2 text-sm text-gray-900">Remember me</label>
</div>

<!-- Radio -->
<div class="flex items-center">
  <input type="radio"
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
           focus:ring-blue-500 focus:ring-2">
  <label class="ml-2 text-sm text-gray-900">Option A</label>
</div>
```

### Common Classes Summary
```
Base: block w-full rounded-lg border text-sm
Background: bg-gray-50 or bg-white
Border: border-gray-300
Focus: focus:ring-blue-500 focus:border-blue-500 focus:ring-2
```

---

## 4. Badge

### Visual Pattern
- Small, compact element
- Rounded or pill-shaped
- Colored background with contrasting text
- Often used to show status, count, or category

### Base Structure

```html
<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
  Badge
</span>
```

### Sizes

| Size | Classes |
|------|---------|
| **sm** (default) | `text-xs px-2.5 py-0.5` |
| **lg** | `text-sm px-3 py-1` |

### Variants

#### Soft/Light Background
```html
<span class="bg-blue-100 text-blue-800 ...">Default</span>
<span class="bg-green-100 text-green-800 ...">Success</span>
<span class="bg-red-100 text-red-800 ...">Danger</span>
<span class="bg-yellow-100 text-yellow-800 ...">Warning</span>
<span class="bg-gray-100 text-gray-800 ...">Neutral</span>
```

#### Bordered
```html
<span class="bg-blue-100 text-blue-800 border border-blue-400 ...">
  Bordered
</span>
```

#### Pill Shape
```html
<span class="... rounded-full">Pill Badge</span>
```

#### With Icon
```html
<span class="inline-flex items-center gap-1 ...">
  <svg class="w-3 h-3"></svg>
  Badge
</span>
```

#### Notification Badge (on button/icon)
```html
<div class="relative inline-flex">
  <button class="...">
    <svg class="w-5 h-5"></svg>
  </button>
  <span class="absolute -top-1 -right-1 inline-flex items-center justify-center
               w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
    3
  </span>
</div>
```

### Color Patterns
```
Pattern: bg-{color}-100 text-{color}-800
Bordered: + border border-{color}-400
```

---

## 5. Navbar

### Visual Pattern
- Horizontal bar at top of page
- Logo/brand on left
- Navigation links in center or right
- Actions (buttons, user menu) on right
- Responsive: hamburger menu on mobile

### Base Structure

```html
<nav class="bg-white border-b border-gray-200">
  <div class="max-w-screen-xl mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="#" class="flex items-center">
        <img src="..." class="h-8" alt="Logo">
        <span class="ml-2 text-xl font-semibold">Brand</span>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#" class="text-gray-900 hover:text-blue-600">Home</a>
        <a href="#" class="text-gray-500 hover:text-blue-600">About</a>
        <a href="#" class="text-gray-500 hover:text-blue-600">Services</a>
      </div>

      <!-- Actions -->
      <div class="hidden md:flex items-center space-x-4">
        <button class="...">Login</button>
        <button class="...">Sign Up</button>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2 rounded-lg hover:bg-gray-100">
        <svg class="w-6 h-6"></svg>
      </button>
    </div>
  </div>
</nav>
```

### Variants

#### Sticky Navbar
```html
<nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
  ...
</nav>
```

#### Fixed Navbar
```html
<nav class="fixed top-0 left-0 right-0 z-50 bg-white border-b">
  ...
</nav>
<!-- Add padding-top to body: pt-16 -->
```

#### Dark Navbar
```html
<nav class="bg-gray-900 text-white">
  <a href="#" class="text-white hover:text-gray-300">Link</a>
</nav>
```

#### Transparent (Hero)
```html
<nav class="absolute top-0 left-0 right-0 z-50 bg-transparent">
  <a href="#" class="text-white hover:text-gray-200">Link</a>
</nav>
```

### Mobile Menu
```html
<!-- Toggle with JavaScript -->
<div class="md:hidden" id="mobile-menu">
  <div class="px-4 py-3 space-y-1 bg-white border-t">
    <a href="#" class="block px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100">
      Home
    </a>
    <a href="#" class="block px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-100">
      About
    </a>
  </div>
</div>
```

### Common Classes Summary
```
Container: max-w-screen-xl mx-auto px-4
Layout: flex items-center justify-between
Height: h-16 (64px standard)
Sticky: sticky top-0 z-50
Links: text-gray-500 hover:text-blue-600 font-medium
Active: text-blue-600 font-semibold
```

---

## 6. Modal

### Visual Pattern
- Overlay covering the entire screen
- Centered dialog box
- Header with title and close button
- Body content
- Footer with actions (optional)

### Base Structure

```html
<!-- Backdrop -->
<div class="fixed inset-0 z-50 flex items-center justify-center
            bg-black/50 backdrop-blur-sm">

  <!-- Modal -->
  <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">

    <!-- Header -->
    <div class="flex items-center justify-between p-4 border-b">
      <h3 class="text-lg font-semibold text-gray-900">Modal Title</h3>
      <button class="p-1 rounded-lg hover:bg-gray-100">
        <svg class="w-5 h-5 text-gray-500"></svg>
      </button>
    </div>

    <!-- Body -->
    <div class="p-4">
      <p class="text-gray-600">Modal content goes here.</p>
    </div>

    <!-- Footer -->
    <div class="flex justify-end gap-2 p-4 border-t">
      <button class="...">Cancel</button>
      <button class="...">Confirm</button>
    </div>

  </div>
</div>
```

### Sizes

| Size | Max Width | Use Case |
|------|-----------|----------|
| **sm** | `max-w-sm` | Simple alerts, confirmations |
| **md** | `max-w-md` | Standard dialogs, forms |
| **lg** | `max-w-lg` | Complex forms |
| **xl** | `max-w-xl` | Large content |
| **2xl** | `max-w-2xl` | Very large content |
| **Full** | `max-w-full mx-4` | Almost full width |

### Variants

#### Alert Modal
```html
<div class="... p-6 text-center">
  <svg class="w-12 h-12 text-red-500 mx-auto mb-4"></svg>
  <h3 class="text-lg font-semibold mb-2">Are you sure?</h3>
  <p class="text-gray-500 mb-6">This action cannot be undone.</p>
  <div class="flex justify-center gap-3">
    <button class="...">Cancel</button>
    <button class="bg-red-600 ...">Delete</button>
  </div>
</div>
```

#### Form Modal
```html
<div class="...">
  <div class="p-4 border-b">
    <h3 class="text-lg font-semibold">Create Account</h3>
  </div>
  <form class="p-4 space-y-4">
    <div>
      <label class="...">Name</label>
      <input class="..." type="text">
    </div>
    <div>
      <label class="...">Email</label>
      <input class="..." type="email">
    </div>
  </form>
  <div class="p-4 border-t flex justify-end gap-2">
    <button>Cancel</button>
    <button>Submit</button>
  </div>
</div>
```

### Common Classes Summary
```
Backdrop: fixed inset-0 z-50 bg-black/50 flex items-center justify-center
Modal: bg-white rounded-lg shadow-xl max-w-md w-full mx-4
Animation: transition-opacity duration-300
Blur: backdrop-blur-sm
```

---

## 7. Table

### Visual Pattern
- Header row with column titles
- Data rows with alternating or uniform styling
- Optional: borders, stripes, hover effects

### Base Structure

```html
<div class="relative overflow-x-auto rounded-lg border">
  <table class="w-full text-sm text-left text-gray-500">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3">Name</th>
        <th scope="col" class="px-6 py-3">Email</th>
        <th scope="col" class="px-6 py-3">Role</th>
        <th scope="col" class="px-6 py-3">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="px-6 py-4 font-medium text-gray-900">John Doe</td>
        <td class="px-6 py-4">john@example.com</td>
        <td class="px-6 py-4">Admin</td>
        <td class="px-6 py-4">
          <a href="#" class="text-blue-600 hover:underline">Edit</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Variants

#### Striped Rows
```html
<tr class="odd:bg-white even:bg-gray-50 border-b">
```

#### No Border
```html
<table class="w-full text-sm">
  <tr class="hover:bg-gray-50">
```

#### With Checkboxes
```html
<td class="w-4 px-4">
  <input type="checkbox" class="w-4 h-4 text-blue-600 ...">
</td>
```

#### With Status Badge
```html
<td class="px-6 py-4">
  <span class="inline-flex items-center gap-1">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    Active
  </span>
</td>
```

### Common Classes Summary
```
Container: relative overflow-x-auto rounded-lg
Table: w-full text-sm text-left text-gray-500
Header: text-xs uppercase bg-gray-50
Cell: px-6 py-4
Row hover: hover:bg-gray-50
Border: border-b
```

---

## 8. Alert

### Visual Pattern
- Colored container indicating message type
- Optional icon
- Title and description
- Optional dismiss button

### Base Structure

```html
<div class="p-4 mb-4 text-sm rounded-lg" role="alert">
  <span class="font-medium">Alert!</span> Message content here.
</div>
```

### Color Variants

```html
<!-- Info (Blue) -->
<div class="p-4 text-blue-800 bg-blue-50 border border-blue-200 rounded-lg">
  <span class="font-medium">Info!</span> This is an informational message.
</div>

<!-- Success (Green) -->
<div class="p-4 text-green-800 bg-green-50 border border-green-200 rounded-lg">
  <span class="font-medium">Success!</span> Operation completed successfully.
</div>

<!-- Warning (Yellow) -->
<div class="p-4 text-yellow-800 bg-yellow-50 border border-yellow-200 rounded-lg">
  <span class="font-medium">Warning!</span> Please review before proceeding.
</div>

<!-- Error (Red) -->
<div class="p-4 text-red-800 bg-red-50 border border-red-200 rounded-lg">
  <span class="font-medium">Error!</span> Something went wrong.
</div>

<!-- Neutral (Gray) -->
<div class="p-4 text-gray-800 bg-gray-50 border border-gray-200 rounded-lg">
  <span class="font-medium">Note:</span> Additional information here.
</div>
```

### With Icon

```html
<div class="flex items-start gap-3 p-4 text-blue-800 bg-blue-50 rounded-lg">
  <svg class="w-5 h-5 shrink-0 mt-0.5"></svg>
  <div>
    <h3 class="font-medium">Alert Title</h3>
    <p class="mt-1">Alert description goes here.</p>
  </div>
</div>
```

### Dismissible

```html
<div class="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
  <div class="flex items-center gap-3">
    <svg class="w-5 h-5"></svg>
    <span>Alert message</span>
  </div>
  <button class="p-1 rounded-lg hover:bg-blue-100">
    <svg class="w-4 h-4"></svg>
  </button>
</div>
```

### Color Pattern
```
Pattern: text-{color}-800 bg-{color}-50 border-{color}-200
```

---

## 9. Avatar

### Visual Pattern
- Circular or rounded image
- Optional status indicator (dot)
- Placeholder for missing image (icon or initials)

### Base Structure

```html
<img src="..." class="w-10 h-10 rounded-full" alt="Avatar">
```

### Sizes

| Size | Classes |
|------|---------|
| **xs** | `w-6 h-6` |
| **sm** | `w-8 h-8` |
| **md** | `w-10 h-10` |
| **lg** | `w-12 h-12` |
| **xl** | `w-16 h-16` |
| **2xl** | `w-20 h-20` |

### Variants

#### With Border
```html
<img src="..." class="w-10 h-10 rounded-full ring-2 ring-white" alt="...">
```

#### Placeholder (Icon)
```html
<div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
  <svg class="w-6 h-6 text-gray-500"></svg>
</div>
```

#### Placeholder (Initials)
```html
<div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
  <span class="text-sm font-medium text-white">JD</span>
</div>
```

#### With Status Indicator
```html
<div class="relative">
  <img src="..." class="w-10 h-10 rounded-full" alt="...">
  <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500
               border-2 border-white rounded-full"></span>
</div>
```

#### Stacked Avatars
```html
<div class="flex -space-x-4">
  <img src="..." class="w-10 h-10 rounded-full border-2 border-white">
  <img src="..." class="w-10 h-10 rounded-full border-2 border-white">
  <img src="..." class="w-10 h-10 rounded-full border-2 border-white">
  <div class="w-10 h-10 rounded-full bg-gray-200 border-2 border-white
              flex items-center justify-center text-xs font-medium">
    +5
  </div>
</div>
```

### Common Classes Summary
```
Shape: rounded-full
Border: ring-2 ring-white, border-2 border-white
Status: absolute bottom-0 right-0 w-3 h-3 rounded-full
Stack: flex -space-x-4
```

---

## 10. Dropdown

### Visual Pattern
- Trigger button/element
- Hidden menu that appears on click/hover
- Menu items with hover states
- Optional dividers, headers, icons

### Base Structure

```html
<div class="relative inline-block">
  <!-- Trigger -->
  <button class="inline-flex items-center gap-2 px-4 py-2 bg-white border
                 rounded-lg hover:bg-gray-50">
    Options
    <svg class="w-4 h-4"></svg>
  </button>

  <!-- Menu (hidden by default) -->
  <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg
              border z-10 hidden">
    <ul class="py-2">
      <li>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Settings
        </a>
      </li>
      <li class="border-t my-1"></li>
      <li>
        <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
          Sign out
        </a>
      </li>
    </ul>
  </div>
</div>
```

### Positioning

| Position | Classes |
|----------|---------|
| Bottom-right (default) | `absolute right-0 mt-2` |
| Bottom-left | `absolute left-0 mt-2` |
| Top-right | `absolute right-0 bottom-full mb-2` |
| Top-left | `absolute left-0 bottom-full mb-2` |

### Variants

#### With Header
```html
<div class="...">
  <div class="px-4 py-3 border-b">
    <p class="text-sm font-medium text-gray-900">John Doe</p>
    <p class="text-xs text-gray-500">john@example.com</p>
  </div>
  <ul class="py-2">...</ul>
</div>
```

#### With Icons
```html
<a href="#" class="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
  <svg class="w-4 h-4 text-gray-500"></svg>
  Settings
</a>
```

#### Checkbox/Radio Items
```html
<label class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
  <input type="checkbox" class="w-4 h-4 text-blue-600 ...">
  <span class="text-sm text-gray-700">Option 1</span>
</label>
```

### Common Classes Summary
```
Container: absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border
Item: block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
Divider: border-t my-1
```

---

## 11. Common Utility Patterns

### Spacing Scale (Default)

| Class | Value |
|-------|-------|
| `p-1` | 0.25rem (4px) |
| `p-2` | 0.5rem (8px) |
| `p-3` | 0.75rem (12px) |
| `p-4` | 1rem (16px) |
| `p-5` | 1.25rem (20px) |
| `p-6` | 1.5rem (24px) |
| `p-8` | 2rem (32px) |

### Typography

```
Font Size: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl
Font Weight: font-normal, font-medium, font-semibold, font-bold
Line Height: leading-tight, leading-normal, leading-relaxed
```

### Colors (Commonly Used)

```
Gray: gray-50, gray-100, gray-200, gray-300, gray-400, gray-500, gray-600, gray-700, gray-800, gray-900
Blue: blue-50, blue-100, blue-500, blue-600, blue-700
Green: green-50, green-500, green-600
Red: red-50, red-500, red-600
Yellow: yellow-50, yellow-500
```

### Borders & Radius

```
Border: border, border-0, border-2
Border Color: border-gray-200, border-gray-300
Radius: rounded-sm, rounded, rounded-md, rounded-lg, rounded-xl, rounded-full
```

### Shadows

```
shadow-sm: subtle shadow
shadow: default shadow
shadow-md: medium shadow
shadow-lg: large shadow
shadow-xl: extra large shadow
```

### Flexbox Patterns

```html
<!-- Center horizontally and vertically -->
<div class="flex items-center justify-center">

<!-- Space between -->
<div class="flex items-center justify-between">

<!-- Vertical stack -->
<div class="flex flex-col gap-4">

<!-- Horizontal row with gap -->
<div class="flex items-center gap-2">
```

### Grid Patterns

```html
<!-- 2 columns -->
<div class="grid grid-cols-2 gap-4">

<!-- 3 columns -->
<div class="grid grid-cols-3 gap-4">

<!-- Responsive columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

### Responsive Breakpoints

| Prefix | Min Width |
|--------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

### Focus & Interaction States

```html
<!-- Standard focus ring -->
<element class="focus:ring-2 focus:ring-blue-500 focus:outline-none">

<!-- Hover background -->
<element class="hover:bg-gray-100">

<!-- Active state -->
<element class="active:bg-gray-200">

<!-- Transition -->
<element class="transition-colors duration-200">
```

---

## Quick Reference: Component Recognition

| Visual Pattern | Component Type | Key Identifiers |
|----------------|----------------|-----------------|
| Clickable rectangle with text | **Button** | bg-*, rounded-*, px-*, py-* |
| Container with content sections | **Card** | bg-white, shadow-*, rounded-lg, p-* |
| Text field with border | **Input** | border, rounded-*, focus:ring-* |
| Small colored tag | **Badge** | bg-*-100, text-*-800, text-xs, px-2.5 |
| Top horizontal bar | **Navbar** | nav, max-w-*, flex justify-between |
| Overlay with centered box | **Modal** | fixed inset-0, z-50, max-w-* |
| Grid with rows and columns | **Table** | table, th, td, px-6 py-4 |
| Colored message box | **Alert** | bg-*-50, text-*-800, role="alert" |
| Circular image | **Avatar** | rounded-full, w-*, h-* |
| Hidden menu that appears | **Dropdown** | absolute, z-10, hidden |

---

## Sources

- [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
- [Flowbite Components](https://flowbite.com/docs/components/)
- [Tailwind UI](https://tailwindcss.com/plus/ui-blocks)
- [Material Tailwind](https://www.material-tailwind.com/)
- [Preline UI](https://preline.co/docs/)
- [DaisyUI](https://daisyui.com/)
- [FlyonUI](https://flyonui.com/)

---

*Last updated: February 2026*
