function validateForm(){
    var id = document.getElementById("empId").value;
    var name = document.getElementById("empName").value;
    var project = document.getElementById("project").value;
    var cause = document.getElementById("cause").value;
    var source = document.getElementById("source").value;
    var destination = document.getElementById("destination").value;
    var from = document.getElementById("fromDate").value;
    var to = document.getElementById("toDate").value;
    var days = document.getElementById("days").value;
    var mode = document.getElementById("mode").value;

    if(id==""){
        elmId.innerHTML = "Enter the Employee ID!";
        return false;
    }
    else{
        elmId.innerHTML = "";
    }
    if(name==""){
        elmName.innerHTML = "Enter the Name!";
        return false;
    }
    else{
        elmName.innerHTML = "";
    }
    if(project==""){
        elmProject.innerHTML = "Enter the Project!";
        return false;
    }
    else{
        elmProject.innerHTML = "";
    }
    if(cause==""){
        elmCause.innerHTML = "Enter the Cause!";
        return false;
    }
    else{
        elmCause.innerHTML = "";
    }
    if(source==""){
        elmSource.innerHTML = "Enter the Source!";
        return false;
    }
    else{
        elmSource.innerHTML = "";
    }
    if(destination==""){
        elmDestination.innerHTML = "Enter the Destination!";
        return false;
    }
    else{
        elmDestination.innerHTML = "";
    }
    if(from==""){
        elmFromDate.innerHTML = "Enter the From Date!";
        return false;
    }
    else{
        elmFromDate.innerHTML = "";
    }
    if(to==""){
        elmToDate.innerHTML = "Enter the To Date!";
        return false;
    }
    else{
        elmToDate.innerHTML = "";
    }
    if(days==""){
        elmDays.innerHTML = "Enter the Number of Days!";
        return false;
    }
    else{
        elmDays.innerHTML = "";
    }
    if(mode==""){
        elmMode.innerHTML = "Enter the Mode of Travel!";
        return false;
    }
    else{
        elmMode.innerHTML = "";
    }
}