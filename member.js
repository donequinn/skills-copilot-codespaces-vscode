function skillsMember() {
    var skill = document.getElementById("skill").value;
    var skillList = document.getElementById("skillList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(skill));
    skillList.appendChild(li);
}