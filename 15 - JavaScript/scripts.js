var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
var country = document.getElementById('country')
var score = document.getElementById('score')
var submitBtn = document.getElementById('submit')

submitBtn.addEventListener("click", eventHandler)

function eventHandler(){
    var details = {
        Name: fname.value + " " + lname.value,
        Country: country.value,
        Score: score.value
    }
    document.getElementById("record").reset();

    createContainer(details);
    console.log(details)
}

function createContainer(details){
    let box = document.createElement('div');
    box.style.background = '#E5C9C5';
    box.style.height = '30px';
    box.textContent = details.Name + "\n" + details.Country + "\n" + details.Score
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = '100px';
    deleteButton.addEventListener("click" , function(){
    var subParent = deleteButton.parentElement;
    var parent = subParent.parentElement;

    parent.removeChild(subParent);
    
})

    box.appendChild(deleteButton)
    document.body.appendChild(box)
}


