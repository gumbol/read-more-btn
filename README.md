# Read more button

A lightweight vanilla javascript read more button for expanding and collapsing blocks of text.


![demo](https://github.com/gumbol/read-more-btn/blob/main/images/read-more-btn-demo.gif)


## Features

- Choose how many text to keep and collapse the rest to create a teaser.
- Can be used in more than one article block.

## Use

Download the latest version of read-more-btn-v1.x.js file

include it in your HTML page:
```html
<script src="scripts/read-more-btn-v1.x.js"></script>
```
include another script tag and call its function

_**Syntax:**_

**mkBtn**[Tag name][,\<# of words: number\>])
Where tag name is the article element and the number of of words is the number of visible text words.



```html
<script>
mkBtn('article',20)
</script>
```
Thats it.


## To do
- [ ] Fix page rendering when clicking on a button
- [x] ~~Add support for multiple articles.~~
- [ ] Add support for class and id and other tags

## License
This app is under MIT license
