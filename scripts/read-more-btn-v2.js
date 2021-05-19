
/*function getWord (str = '')
{

  let word = str.trim().split(/\s+/g)
  let arr = [];
  let test = [];
  if (!word[0].length) return 0;

  for (i = 0; i < word.length; i++)
  {

    for (k = 0; k < word[i].length; k++)
    {

      let code = word[i].charCodeAt(k)
      if ((code > 47 && code < 58) ||
        (code > 64 && code < 91) ||
        (code > 96 && code < 123))
        arr.push(word[i][k])
    }
    test.push(arr.join(''))
    arr = [];
  }
  return test;
}*/

function getTextWords (text = '')
{
  let wordArr = text.trim().split(/\s+/g)
  if (!wordArr[0].length) return 0;
  return wordArr;
}



function makeBtn (el = "article", num = 10)
{
  let text = document.getElementsByTagName(el)
  let wordArr = [[]];
  let btn //= //document.createElement('button')
 // btn.innerText = 'Read more';
  let temp = [[]]
 // for (k = 0; k < text.length; k++)
  //{
   // text[k].innerText += getTextWords(wordArr[k].innerText).slice(0, num);
    //document.body.appendChild(text[k])
//  }
  
  
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