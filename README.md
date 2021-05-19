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
```html
<script>
makeBtn('article',20)
</script>
```
Thats it.

_**syntax**:_ 

**readMore**[Tag name][,\<number of words: number\>])
Where tag name is the article element. and number of words is the collapse range.

## To do
- [ ] Choose between word or char count or first occurance of a word.
- [ ] Control the collapse and expand speed
- [x] ~~Add support for multiple articles.~~
- [ ] Add support for class and id.

## License
This app is under MIT license
