---
title: "What's happening so far'"
author: "Ryan Wilson"
published: "2020-26-04"
last_updated: "2020-26-04"


---

# What's happening so far

We covered a lot in the first two lessons. Let's take a breather and take a look at what's going on with everything you've created so far.

## Github rundown

So you've got a folder on your computer called `Projects` and within that there is another folder `ui-building-blocks` and within that, another folder `public` and within that the `index.html` file.

The `ui-building-blocks` folder is a git repository. It became one when we linked it using the Github Desktop App in the previous lesson. If you go look, there is now a `.git` folder inside. This is just a bunch of files that tell git what the state of the repository is on your computer.

[img of home computer with folder structure]

That git repository also exists on Github.com.

When you make some change on your computer within that folder, git understands it is a change.

You can see it is marked in the Github desktop app.

When you commit that change, you are forging a new version of the repository.

After you commit, you must push the change to Github in order for the repository on Github to have that change as well.

[img of home computer + Github]

## Website rundown

Vercel is a service that connects to git repositories, has the ability to run some commands, and then deploy website files. It takes care of all of the stuff involved in setting up a URL and hosting our files.

When you push updates to Github, Vercel is notified. They then automatically download the new version of the repository, and deploy the files to a web server.

[img of home computer, github, and vercel]

When someone visits a link to your site, their browser makes a request for that URL. Vercel has registered that URL with the internet, so that requests to it are routed to their servers.

They deliver the html file you've created to the browser that's requesting that URL.

The browser then knows how to render that HTML based on the rules that have been defined for the different tags we've used so far.

[img of home computer, github, vercel, and client accessing URL]

