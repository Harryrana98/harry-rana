
let crash=document.querySelector("#crash")
let tom=document.querySelector("#tom")
let kick=document.querySelector("#kick")
let snare=document.querySelector("#snare")
let crashAudio=document.querySelector("#crashAudio")
let tomAudio=document.querySelector("#tomAudio")
let kickAudio=document.querySelector("#kickAudio")
let snareAudio=document.querySelector("#snareAudio")

crash.addEventListener("click",function(){
    crashAudio.play()
    
})
tom.addEventListener("click",function(){
    tomAudio.play()
})
kick.addEventListener("click",function(){
    kickAudio.play()
})
snare.addEventListener("click",function(){
    snareAudio.play()
})