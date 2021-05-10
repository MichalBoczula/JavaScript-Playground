const form = document.querySelector(".grocery-form");
const groceryList = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
const input = document.querySelector("#grocery");
const message = document.querySelector(".message");
let flag = false;
let actual = ""; 

function backToDefault(input)
{
    input.value = "";
    input.placeholder = "e.g. eggs";
    flag = false;
    actual = "";
}

function insert(input)
{
    groceryList.innerHTML += `<div class="grocery-item" id="${createGuid()}">
            <p class="grocery-name">${input.value}</p>
        <div class="grocery-btns">
            <button class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </div>`

    groceryList.querySelectorAll(".delete-btn")
        .forEach(ele => {
            ele.addEventListener("click", () => removeItem(ele));
        });

    groceryList.querySelectorAll(".edit-btn")
        .forEach(ele => {
            ele.addEventListener("click", () => setForUpdate(ele));
        });


}

function removeItem(ele) {
    ele.parentNode.parentNode.remove();
    showMessage("remove");
}

function setForUpdate(ele)
{   
    input.value = ele.parentNode.parentNode.querySelector(".grocery-name").innerText;
    flag = true;
    actual = ele.parentNode.parentNode.id;
}

function upserting(e)
{
    e.preventDefault();
    if (!flag && input.value !== "")
    {
        insert(input);
        showMessage("add");
    }
    else if (flag && input.value !== "")
    {
        update();
    }

    backToDefault(input);
}

function update() 
{
    const item = groceryList.querySelector(`#${actual}`);
    
    if (input.value !== "")
    {
        item.querySelector(".grocery-name")
            .innerText = input.value;
    }
    showMessage("update");
}

function createGuid() {
    function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}

function showMessage(action)
{
    let info;
    message.classList.remove("messageHide");
    if(action === "add")
    {
        message.innerText = "Item has been added";
        info = "messageAdded";
        message.classList.add(info);
    }
    else if (action === "update")
    {
        message.innerText = "Item has been updated";
        info = "messageUpdated";
        message.classList.add(info);
    }
    else if (action === "remove")
    {
        message.innerText = "Item has been removed";
        info = "messageRemoved";
        message.classList.add(info);
    }
    else 
    {
        message.innerText = "All items deleted";
        info = "messageRemoved";
        message.classList.add(info);
    }
    setTimeout(() => {
        message.classList.add("messageHide");
        message.classList.remove(info);
    }, 1000);
}

clearBtn.addEventListener("click", () => {
    groceryList.innerHTML = "";
    showMessage();
});

form.addEventListener("submit", e => upserting(e));