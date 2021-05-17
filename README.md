# Read more button

A lightweight vanilla javascript button for expanding and collapsing blocks of text.


![read more button demo](https://github.com/gumbol/read-more-btn/images/read-more-btn-demo.gif)
=======
## Features

- Collapse and expand text based on the number of words.
- Works on multiple texts each wrapped in an article element


## Use

Download the read-more-btn.js file

include it in your HTML:
```html
<script src="scripts/read-more-btn.js"></script>
```
include another script tag and call the function
```html
<script>readMore('article',20)</script>
```
Thats it.

_**syntax**:_ 
**readMore**('article',[\<number of words: number\>])
Where article is the article element. and number of words is the number of words to keep.

## To do

- [ ] Choose between word or char count or first occurance of a word.
- [ ] Add speed control for coll and exp
- [x] ~~Add support for multiple articles.~~
- [ ] Add support for class and id.
- [ ] Adjust button looks
- [ ] Upload a better quality gif demo

## License
This app is under MIT license
