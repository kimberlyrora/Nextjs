# Nextjs
  Learning Nextjs \
  Resource: https://www.youtube.com/watch?v=mTz0GXj8NN0&t=2s 

#### What is Nextjs?
React framework created by Vercel, allows ssr ans ssg 

##### Benefits: 
1. SEO
2. Performance
3. Easier to page routing
4. API Routes
5. TS & Sass
6. SSG(Next export)
7. Easy deployment

Tiny things I learned: \
Everything in PUBLIC file is going to be directly accessible from the browser.

##### Setup:
  npx create-next-app@latest [name project]

##### Pages and Routings:
  All files added to pages folder are going to route accessible.
  
##### Head:
  To define metatags, title, keywords 

##### CSS:
  You can't: \
  Import global.css directly in page, you have to do it in _app.js 

  Follow: \
  the name convention if you want to import directly in a page: "Home.module.css" 
  
##### Custom document:
  For augment html and body tags. If u want to override the default Document, create the file '.pages/_document.js' \
  You can use it to add lang attributes, it is rendered on server, so you can't use onclick or dynamic things in this file. Just don't try to mess with this.
 
 ##### Fetching data:
  1. getStaticProps: allow us fetching data during build time
      You should use getStaticProps when:
        - The data required to render the page is available at build time ahead of a user’s request.
        - The data comes from a headless CMS.
        - The data can be publicly cached (not user-specific).
        - The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance. \
      Syntax: 
      ```js
        export const getStaticProps = async () => {	
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
          const articles = await res.json()  // your fetch function here 
          return {
            props: {
              articles
            }
          }
        }
      ```

#### Important things to remember:
1. components folder shouldn't be inside pages because are not going to need routes
2. convention: lowercase for pages and uppercase for components.
