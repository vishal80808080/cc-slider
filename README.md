### Link to live project

This section has moved here: https://voluble-blini-3fb390.netlify.app/ 

### Project Overview

This project implements a vertical parallax image slider in React, allowing users to navigate between different images with smooth transitions. The slider automatically scrolls at a set interval and also responds to user interactions like mouse scrolling and touch gestures.

### Approach & Logic

### Component Structure

ParallaxSlider.jsx: The main component that controls the slider behavior.

App.jsx: The root component where the slider is used along with the Navbar.

### State & Ref Management

useState(index): Tracks the currently displayed image.

useRef(sliderRef): References the slider container to apply transformations dynamically.

useRef(directionRef): Stores the direction of auto-scrolling (up/down).

### Automatic Scrolling

A setInterval function changes the image every 5 seconds.

The direction reverses when the first or last image is reached, creating a loop effect.

### User Interactions

Mouse Scroll (onWheel): Moves the slider up or down based on scroll direction.

Touch Gestures (onTouchStart, onTouchMove): Enables smooth swipe-based navigation on mobile devices.

### Parallax Effect

The transform: translateY(-index * 100vh) property moves the entire slider up or down, simulating a parallax effect.

### Responsive Design

The CSS ensures the layout adapts to different screen sizes, including iPads and tablets.

object-fit: contain; prevents images from being cropped while maintaining proportions.

### Why this approach

Performance Optimization: The use of useRef prevents unnecessary re-renders.

Smooth User Experience: The slider transitions fluidly without lag.

Cross-Device Compatibility: Works seamlessly on desktops, tablets, and mobile devices.

