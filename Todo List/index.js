

const input = document.querySelector("#task")
const AddTaskBtn = document.querySelector("#addbtn")
const TaskDiv = document.querySelector("#taskDiv")
const colors=[
    {backgroundColor:"#02343F", color:"#F0EDCC"},
    {backgroundColor:"#331B3F", color:"#ACC7B4"},
    {backgroundColor:"#0A174E", color:"#fff"},
    {backgroundColor:"#07553", color:"#CED46A"},
    {backgroundColor:"#50586C", color:"#DCE2F0"},
    {backgroundColor:"#815854", color:"#F9EBDE"},
    {backgroundColor:"#1E4174", color:"#DDA94B"},
    {backgroundColor:"#A4193D", color:"#FFDFB9"},
    {backgroundColor:"#1AAFBC", color:"#80634C"},
]

const userStoreValue=[]
let count=0;

AddTaskBtn.addEventListener("click", showTask);

function showTask() {

    if (input.value === "") {
        alert("Please Enter The Task!")
        return
    }
    let Div = document.createElement("div")
    const backcolor=colors[RandomColor()]
    Div.style.backgroundColor=backcolor.backgroundColor
    Div.style.color=backcolor.color
    Div.className = "div"
    let span = document.createElement("span")
    span.textContent = input.value
    const objUserStore={
        id:++count,
        task:span.textContent
    }

    span.style.textTransform = "capitalize"
    Div.appendChild(span)
    TaskDiv.append(Div)
    let Div2 = document.createElement("div")
    let del = document.createElement("span")
    let delicon = document.createElement("i")
    delicon.className = "fa-solid fa-trash"
    delicon.style.color = "red"
    delicon.style.cursor = "pointer"
    del.appendChild(delicon)
    Div2.append(del)
    Div.append(Div2)
    objUserStore.push(userStoreValue)

    
    let edit = document.createElement("span")
    let editicon = document.createElement("i")
    editicon.className = "fa-solid fa-pencil"
    editicon.style.cursor = "pointer"
    editicon.style.color = "green"
    edit.appendChild(editicon)
    Div2.append(edit)
    Div.append(Div2)
    
    delicon.addEventListener("click", function () {
       Remove(Div,objUserStore.id)

    })
    editicon.addEventListener("click", function () {
        input.value = span.textContent
        input.focus()
        AddTaskBtn.addEventListener("click", function () {
            span.textContent = Div.replaceWith(input.value)
        })
    })
    input.value = ""

}

function Remove(itemDiv,ObjId){
    userStoreValue=userStoreValue.filter(())
    itemDiv.remove()
}





function RandomColor(){
return Math.floor(Math.random()*colors.length)
}