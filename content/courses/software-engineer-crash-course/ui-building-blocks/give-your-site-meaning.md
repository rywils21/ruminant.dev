---
title: "Give your site meaning"
author: "Ryan Wilson"
published: "2020-26-04"
last_updated: "2020-26-04"
---

# Give your site meaning using semantic html

In this lesson, we're going to add some more content and make our site begin to look more like a normal site.

## Step 1: Convert existing content to main

1. Wrap your content in a `main` tag

   ```html
   { "added": [4, 18], "removed": [] }
   <html>
     <head> </head>
     <body>
       <main>
         <div>
           <img src="" alt="" />
         </div>
         <div>
           <h1>
             Welcome to my site
           </h1>
           <p>
             This site is going to be my home on the internet. The place where you
             can find all of my work and profiles. I will collect things here that
             I like.
           </p>
         </div>
       </main>
     </body>
   </html>
   ```

This tells the browser that the main part of the page is the content we have.

## Step 2: Add navigation

The site is only one page right now, but we'll eventually add more. When that comes we'll want to be able to navigate between the pages.

Let's add a nav:

1. Add a nav above the image div in our existing code:

   ```html
   { "added": [4, 5, 6, 7, 8, 9], "removed": [] }
   <html>
     <head> </head>
     <body>
       <nav>
         <ul>
           <li>Home</li>
           <li>About</li>
         </ul>
       </nav>
       <main>
         <div>
           <img src="" alt="" />
         </div>
         <div>
           <h1>
             Welcome to my site
           </h1>
           <p>
             This site is going to be my home on the internet. The place where you
             can find all of my work and profiles. I will collect things here that
             I like.
           </p>
         </div>
       </main>
     </body>
   </html>
   ```

## Step 3: Add a Footer

1. Finally, let's put a footer at the bottom:

   ```html
   { "added": [25, 26, 27], "removed": [] }
   <html>
     <head> </head>
     <body>
       <nav>
         <ul>
           <li>Home</li>
           <li>About</li>
         </ul>
       </nav>
       <main>
         <div>
           <img src="" alt="" />
         </div>
         <div>
           <h1>
             Welcome to my site
           </h1>
           <p>
             This site is going to be my home on the internet. The place where you
             can find all of my work and profiles. I will collect things here that
             I like.
           </p>
         </div>
       </main>
       <footer>
       	&copy; 2020 (Your name here). All rights reserved.
       </footer>
     </body>
   </html>
   ```

## Step 4: Commit and Push the changes

1. Using the Github Desktop App, make a commit and push the changes
2. Go to Vercel.com
3. Wait for it to deploy
4. Then go look at your site
   1. It should look like [img]

## Wrap Up

In this lesson you gave your site structure and meaning using semantic html tags. You could have built a nav and footer with just divs. But using nav, main, and footer now communicate extra information to the browser about what's going on on the page. This is helpful for search engines looking for content on your page and for other devices that may read your web page like screen readers.

## Resources

[https://html.com/semantic-markup/](https://html.com/semantic-markup/)
