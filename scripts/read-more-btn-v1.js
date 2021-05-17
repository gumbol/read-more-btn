
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


function readMore(el,num){
   let textStart = document.getElementsByTagName(el)
  // let btn = document.createElement('button')
   //btn.innerText = 'read more';
   let textArr = getWord(textStart[0].innerText)

  for(i = 0; i < textStart.length; i++){
  textStart[i].innerText = textArr.slice(0, num).join(" ") + "...";
  let btn = document.createElement('button')
  btn.setAttribute('name', i)
  btn.innerText = 'read more';
  textStart[i].appendChild(btn)
  }
  document.addEventListener('click', function(e){
let att = e.target.getAttribute('name')
    if(e.target.tagName == "BUTTON"){

  //btn.onclick = function(){
      if(e.target.innerText === 'read less'){
        textStart[att].innerText = textArr.slice(0, num).join(" ") + "...";
        textStart[att].appendChild(e.target) 
        e.target.innerText = 'read more';
      }else{
    textStart[att].removeChild(e.target)
    textStart[att].innerText = textArr.join(" ");
   textStart[att].appendChild(e.target)
    e.target.innerText = 'read less';
  }}
  })
}