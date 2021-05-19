function getTextWords (text = '')
{
  let wordArr = text.trim().split(/\s+/g)
  if (!wordArr[0].length) return 0;
  return wordArr;
}



function mkBtn (el = "article", num = 10)
{
  let text = document.getElementsByTagName(el)
  let wordArr = [[]];
  let btn;
  let temp = [[]]

  
  
if (num < 1)
num = 1;
  for (i = 0; i < text.length; i++)
  {
  
    wordArr[0][i] = getTextWords(text[i].innerText)
    if (num > wordArr[0][i].length)
    temp[0][i] = wordArr[0][i].length - 1;
    else temp[0][i] = num;
    text[i].innerText = wordArr[0][i].slice(0, temp[0][i]).join(" ") + "...";
    btn = document.createElement('button')
    btn.setAttribute('name', i);
    btn.innerText = 'Read more';
    text[i].appendChild(btn);
  }

let btns = document.getElementsByTagName("main")
btns[0].onclick = function (e)
  {
    
    if(e.target.tagName !== "BUTTON") return;
    
    let attr = e.target.getAttribute('name')
   
      if (e.target.innerText === 'Read less')
      {
        if(temp[0][attr] > wordArr[0][attr].length)
        text[attr].innerText = wordArr[0][attr].slice(0, wordArr[0][attr].length-1).join(" ") + "...";

       else text[attr].innerText = wordArr[0][attr].slice(0, temp[0][attr]).join(" ") + "...";
        text[attr].appendChild(e.target)
        e.target.innerText = 'Read more';
      } else
      {
        text[attr].removeChild(e.target)
        text[attr].innerText = wordArr[0][attr].join(" ");
        text[attr].appendChild(e.target)
        e.target.innerText = 'Read less';
      }
    }
}