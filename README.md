meteor-lightbox2
================

Lokthankesh Dhakar's Lightbox2 library, packaged for Meteor!

<a name="toc">
### Table of Contents
* [Attributions](#user-content-attributions)
* [Thanks](#user-content-thanks)
* [Installation](#user-content-installation)
* [Usage Examples](#user-content-usage)

<br />

<a name="attributions">
### Attributions
This package was originally written by [Lokesh Dhakar](https://twitter.com/lokesh).  I simply packaged his
work for use with the Meteor platform.

All development was done by Lokesh, and should be attributed as such, many thanks
for this work.

The original documentation and project website can be seen [here](http://lokeshdhakar.com/projects/lightbox2/)

This package is unmodified from the version downloadable via the official website, all content in the original .zip
file is included, even if it's not all used for the package.

<br />

<a name="thanks">
### Thanks
Thanks to the following for their help/work:

* [Lokesh Dhakar](https://github.com/lokesh), for Lightbox itself.
* #meteor (official channel) for being so helpful.
* MDG for creating such an incredible platform to work with.

<br />

<a name="installation">
### Installation
To install, simply use the `meteor` command-line argument in your project directory:
```bash
meteor add czbaker:lightbox2
```

<br />

<a name="usage">
### Usage Examples
In order to use Lightbox, you must simply add the `data-lightbox` attribute to any image
link on your page.  Use the following if you're wanting to deal with a single image:

```html
<a href="ImageURL" data-lightbox="image1">
    <img src="thumbURL" />
</a>
```

This will produce a thumbnail image (`thumbURL`) that, when clicked, launches a Lightbox containing a larger image
located at `ImageURL`.

If you're interested in having multiple images combined into a set, you just need to make sure 
they all share the same value for the `data-lightbox` attribute:

```html
<a href="ImageURL" data-lightbox="set1">
    <img src="thumbURL" />
</a>
<a href="ImageURL2" data-lightbox="set1">
    <img src="thumbURL2" />
</a>
<a href="ImageURL3" data-lightbox="set">
    <img src="thumbURL2" />
</a>
```

This will produce a lightbox that allows scrolling through images using clickable arrows or the
keyboard (left/right arrows).
