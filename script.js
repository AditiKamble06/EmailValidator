const reslt=document.querySelector("#resultCont");



button=document.querySelector("#submitBtn");
let result={
    "tag": "",
    "free": false,
    "role": false,
    "user": "aditi.kamble.che22",
    "email": "aditi.kamble.che22@itbhu.ac.in",
    "score": 0.8,
    "state": "deliverable",
    "domain": "itbhu.ac.in",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  
}


submitBtn.addEventListener("click",async (evt)=>{
  evt.preventDefault();
  reslt.innerHTML=`<img src="image/animated.svg" alt="">`;
  let key="ema_live_7CKCZpmtF7G9mkeW8Tl8pgzXkcC4maqSBW7ApjDK";
  let email=document.querySelector("#username").value;
  let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res=await fetch(url);
  let result=await res.json();
  let str=``;
for(key of Object.keys(result)){
  if(result[key]!=="" && result[key]!==" "){
  str=str+`<div>${key}:${result[key]}</div>`;}
}
console.log("clicked");
resultCont.innerHTML=str;
});
