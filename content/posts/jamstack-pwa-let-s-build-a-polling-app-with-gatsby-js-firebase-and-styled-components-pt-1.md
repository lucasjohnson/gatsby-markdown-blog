---
title: JAMstack PWA — Let’s Build a Polling App. with Gatsby.js, Firebase, and
  Styled-components Pt. 1
date: 2020-06-10T19:42:55.686Z
banner: /assets/1_yioxuih9i9oplswp5jcgoq.png
abstract: In this three-part tutorial, We will show you how to get up and
  running with a progressive web application (PWA) that makes use of a powerful
  web architecture pattern called the JAMstack.
---

## Performance

With the markup being rendered at build-time, there is no server runtime to generate the markup. The HTML files are already there ready to be sent over to the client. Granted the performance gains here aren’t groundbreaking as most web server implementations utilize page caching, but any gains to time to first byte is a plus.

## Cost

Again, since there’s no server runtime and all that’s being served are some static assets, the assets can be stored on and served from a CDN. Meaning costs to deploy your site are low and with some services like Netlify (which we’ll cover later) can even be free.

## SEO

Generally speaking, you want web crawlers to have an as easy of a job as possible indexing your website. Amongst other reasons, this is why implementing server-side rendering or pre-rendering on your single-page-application is a plus. This way, web crawlers don’t have to wait for javascript to be parsed and ran before the markup can be indexed, the markup will already exist inside the HTML file. This is not to say SPAs are not crawled by search engines, however, there are edge cases that make it difficult.

## Developer experience

With the backend services abstracted away into their own APIs, the front-end engineer has free reign over what tools, libraries, frameworks, and languages to utilize on the front-end. There are no restriction on what preprocessed languages or build tools can be used as the case with some web frameworks. Personally, I think the tools the Node.js community have developed are second to none when it comes to DX. Tools like Webpack have enabled things like[Hot Module Replacement.](https://webpack.js.org/concepts/hot-module-replacement)I know and love the development workflow Node.js projects have to offer and often find myself longing for those tools when working on projects with what I consider inferior development tooling.
