# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://seekinfox.github.io/space-tourism-website/](https://seekinfox.github.io/space-tourism-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SCSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
<!-- - [Next.js](https://nextjs.org/) - React framework -->
<!-- - [Styled Components](https://styled-components.com/) - For styles
 -->

### What I learned
backdrop_filter is not supported by Firefox so I had to find how to use fallback in case some browser doesn't support it. I found this piece of code when I was looking for a solution 
```scss

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .blurred-container {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
}

/* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .blurred-container {
    background-color: rgba(255, 255, 255, .8);
  }
}

```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@seekinfox](https://www.frontendmentor.io/profile/seekinfox)
- Twitter - [@seekinfox](https://www.twitter.com/seekinfox)
