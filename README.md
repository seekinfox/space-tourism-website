# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)




### Links

- Solution URL: [https://github.com/seekinfox/space-tourism-website](https://github.com/seekinfox/space-tourism-website)
- Live Site URL: [https://seekinfox.github.io/space-tourism-website/](https://seekinfox.github.io/space-tourism-website/)


### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

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
- 2: animation 
I am animating a slider in destination page.
The slider is rendering the content using array.map() method. i used the useEffect hook and useState hook to set the animation whenever i click the button.
process was 
- set the default state to false
- onclick set the state to true
- use state to add animation classname to the element i want to animate onclick. add css to that class in scss.
- in useEffect set time out to remove the animation class.
-  clear the settimeout.

```js
 const [animate, setAnimate] = useState(false)

 useEffect(() => {
    const removeAnimate = setTimeout(() => setAnimate(false), 500)
    return () => {
      clearTimeout(removeAnimate)
    }
  }, [destination])
  
  <div classname={animate ? style.dsn__animate : ""}><div>
 ```
 3 . used framer motion for page loading animation and navbar. it was much easier to use.
used varients with combination of useEffect to load animation onrender.
```js
const varient = {
  active: { y: "-5vh"},
  unloaded: { y: "0vw" },
}

useEffect(() => {
    const laodPageAnimate = setTimeout(() => {
        setLoad(false)
    }, 500);
  
    return () => {
      clearTimeout(laodPageAnimate)
    }
  }, [])
```

### Useful resources

- [useEffect](https://medium.com/@dev_abhi/useeffect-what-when-and-how-95045bcf0f32) - i was confused about useEffect hook and did know why and when to use it. this website helped a bit to get the general idea.
- [Framer motion](https://www.framer.com/docs/examples/) - Motion is a production-ready motion library for React from Framer. It brings declarative animations, effortless layout transitions and gestures while maintaining HTML and SVG semantics.


## Author

- Frontend Mentor - [@seekinfox](https://www.frontendmentor.io/profile/seekinfox)
- Twitter - [@seekinfox](https://www.twitter.com/seekinfox)
