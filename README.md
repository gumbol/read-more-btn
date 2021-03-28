# readmore.js

A lightweight vanilla javascript api for expanding and collapsing blocks of text with "read more" and "read less" buttons

![demo gif](https://github.com/gumbol/Read-more.js/blob/main/readmore-demo.gif)

Excuse the poor visual planning to upload a better gif demo


## Use

Download readmore.js file

include it in your HTML:
```html
<script src="scripts/readmore.js"></script>
```
include another script tag and call the function
```html
<script>readMore('article',20)</script>
```
Thats it.

### syntax
readMore('article',[number of words: number])
Where article is the article element. and number of words is the number of words to keep.

## To do

- Choose between word or char count or first occurance of a word.
- Add control for coll and exp speed
- Adjust buttons positions
- Add other attributes to get article like class and id.
- Upload a better quality gif demo

## License
This app is licensed under MIT
