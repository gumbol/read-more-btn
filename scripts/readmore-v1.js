function getWord(str = '')
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
}

let textArr = getWord(textStart[0].innerText)

for (i = 0; i < textStart.length; i++)
{
    textStart[i].innerText = textArr.slice(0, num).join(" ") + "...";
    let btn = document.createElement('button')
    btn.innerText = 'read more';
    btn.setAttribute('name', i)
    textStart[i].appendChild(btn)
}


function readMore(el,num){
    let textStart = document.getElementsByTagName(el)
    let btn = document.createElement('button')
    btn.innerText = 'read more';
    let textArr = getWord(textStart[0].innerText)
 
   
   textStart[0].innerText = textArr.slice(0, num).join(" ") + "...";
   textStart[0].appendChild(btn)
 
   btn.onclick = function(){
       if(btn.innerText === 'read less'){
         textStart[0].innerText = textArr.slice(0, num).join(" ") + "...";
         textStart[0].appendChild(btn) 
         btn.innerText = 'read more';
       }else{
     textStart[0].removeChild(btn)
     textStart[0].innerText = textArr.join(" ");
    textStart[0].appendChild(btn)
     btn.innerText = 'read less';
   }}
 
 }
