# Read more button

A lightweight vanilla javascript read more button for expanding and collapsing blocks of text.


![demo](https://github.com/gumbol/read-more-btn/blob/main/images/read-more-btn-demo.gif)


## Features

- Choose how many text to keep and collapse the rest to create a teaser.
- Can be used in more than one article block.

## Use

Download the read-more-btn.js file

include it in your HTML:
```html
<script src="scripts/read-more-btn.js"></script>
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
- [ ] Choose between word or char count or first occurance of a word.
- [ ] Control the collapse and expand speed
- [x] ~~Add support for multiple articles.~~
- [ ] Add support for class and id.

## License
This app is under MIT license
