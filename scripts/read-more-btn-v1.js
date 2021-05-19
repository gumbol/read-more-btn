function getTextWords(text = '')
{
    let wordArr = text.trim().split(/\s+/g)
    if (!wordArr[0].length) return 0;
       return wordArr;
}



function mkBtn (el = "article", num = 10)
{

  let text = document.getElementsByTagName(el)
  let wordArr = getTextWords(text[0].innerText)
  let btn = document.createElement('button')
  btn.innerText = 'Read more';
  if (num < 1) 
  num = 1;
  else if (num > wordArr.length) 
  num = wordArr.length-1;
 
  text[0].innerText = wordArr.slice(0, num).join(" ") + "...";
  text[0].appendChild(btn)

  btn.onclick = function ()
  {
    if (btn.innerText === 'Read less')
    {
      text[0].innerText = wordArr.slice(0, num).join(" ") + "...";
      text[0].appendChild(btn)
      btn.innerText = 'Read more';
    } else
    {
      text[0].removeChild(btn)
      text[0].innerText = wordArr.join(" ");
      text[0].appendChild(btn)
      btn.innerText = 'Read less';
    }
  }

}
