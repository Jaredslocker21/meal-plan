// Adapted from turtorials and research
//https://www.youtube.com/watch?v=01YKQmia2Jw
//https://www.youtube.com/watch?v=Bav5SL8-sI4
//https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
//https://www.w3schools.com/jsref/met_storage_getitem.asp
//https://www.youtube.com/watch?v=AWcZcJaIntQ

const memosContainer = document.getElementById("mapplication");
const addMemoButton = memosContainer.querySelector(".create-memo");

/**JSON.stringify()
 * A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string.
 * he setItem() method sets the value of the specified Storage Object item. The setItem() method belongs to the Storage Object
 */
function saveMemos(memos) {
    localStorage.setItem("remember-memos", JSON.stringify(memos));
}
//The getItem() method of the storage interface,when passed a key name, will return the key's value
function getMemos(memos) {
    return JSON.parse(localStorage.getItem("remember-memos") || ("[]"));
}

//Create a new memo
function createMemoElement(id, content) {
    const element = document.createElement("textarea");
    //refering to a text area element and css class Id
    element.classList.add("memo");
    element.value = content;
    element.addEventListener("change", () =>{
        updateMemo(id, element.value);

    });
    
    element.addEventListener("dblclick", () =>{
        let doDelete = deleteMemo(id, element);
        }
    )
    return element;
}
// Adding a memo and giving it an id
function addMemo() {
    let currentMemo = getMemos();
    let memoObject = {
        id: ~~ (Math.random() * 1000000),
    };

    let memoElement = createMemoElement(memoObject.id, memoObject.content)
    memosContainer.insertBefore(memoElement, addMemoButton);

    currentMemo.push(memoObject);
}
// update a memo
function updateMemo(id, newContent)  {
    let memos = getMemos();
    let targetMemo = memos.filter(memo => memo.id === id)[0];
    if (targetMemo) {
        targetMemo.content = newContent;
    } else {
        targetMemo = {
            id, content: newContent,
        }
    }
    saveMemos([...memos, targetMemo])
}

function deleteMemo (id, element) {
    let memos = getMemos().filter(memo => memo.id != id );

    saveMemos(memos)
    memosContainer.removeChild(element);

}

//Event listener Clicl for new memo
addMemoButton.addEventListener("click", () => addMemo());

getMemos().forEach((memo) => {
    let memoElement = createMemoElement(memo.id, memo.content);
    memosContainer.insertBefore(memoElement, addMemoButton);
    
});