---
title: "Build a web page"
author: "Ryan Wilson"
published: "2020-26-04"
last_updated: "2020-26-04"
---

# Build a web page

Let's jump right in and build a web page.

## Software Needed

1. A text editor - I mainly use [VSCode]()
2. A web browser - I'll be using [Google Chrome]()
3. Your computer's file system - Finder on MacOS or Explorer on Windows

## Step 1: Setup your project

1. Make sure you have some form of the software from above. Most computers come with some version of those things pre-installed. [VSCode]() is a widely used open-source text editor that is great for web development. That's what you'll see me using in screencasts.
1. Once you have that stuff, create a base folder where you'll keep all of your projects. I like to make a `Projects` folder separate from `Documents` and the other predefined folders that come on computers.
1. Inside the `Projects` folder you just created, create another folder called `ui-building-blocks`. This folder will specifically for this module.

## Step 2: Create a web page

Now that there's a project folder, let's build the web page.

1. Open the `ui-building-blocks` folder inside [VSCode]()

2. Create a new file: [image of the new file button]

3. Name the file `index.html` and hit enter

4. Open that file in the editor and type in this code:

   ```html
   <html>
     <head>
     </head>
     <body>
       A simple website
     </body>
   </html>
   ```

5. Find that file in your file explorer, right click and select `Open With > Google Chrome` or your web browser of choice

6. You should see a page that looks like this:

   [image of simple web page]

Congrats! You've built a webpage. That's all there is to it.

## Step 3: Add some more content

Let's make it a little more lively by adding an image and some more text. This web site will ultimately be a personal site for you. So let's add some more html tags.

1. The file should still be open in your editor. Let's replace the text "A simple website" with an image

   ```html
   <html>
     <head>
     </head>
     <body>
       <div>
         <img src="" alt="" />
       </div>
     </body>
   </html>
   ```

   This is just a random image taken from unsplash.

2. Click refresh in your web browser and you should now see a web page with that image:

   [img of what browser should look like]

3. Now let's add some more text. Update the file to look like this:

   ```html
   <html>
     <head>
     </head>
     <body>
       <div>
         <img src="" alt="" />
       </div>
       <div>
         <h1>
           Welcome to my site
         </h1>
         <p>
           This site is going to be my home on the internet. The place where you can find all of my work and profiles. I will collect things here that I like.
         </p>
       </div>
     </body>
   </html>
   ```

4. Refresh your browser again and it should now look like this:

   [updated img again]



## Wrap Up

That's it! You've created a website. Sure, it's only one page and doesn't have a ton of content yet. You'll get there. In the next lesson, you'll deploy this web page so that you can share a link with friends and they'll be able to go to it like a real website.