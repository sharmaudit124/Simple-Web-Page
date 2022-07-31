

function studentInfoUpdate()
{   // checks if the fields are not blank
    if ($("#name").val().trim() != '' && $("#email").val().trim() != '' && $("#website").val().trim() != '' && $("#imageLink").val().trim() != ''  ) {

        if(nameValidator() && emailValidator() && websiteValidator() && imageLinkValidator()){
                checkEligible();
                formClear();
                document.getElementById("n_error").innerHTML = "<br>";
                document.getElementById("e_error").innerHTML = "<br>";
                document.getElementById("w_error").innerHTML = "<br>";
                document.getElementById("i_l_error").innerHTML = "<br>";
                $("#name").focus();
        }
    }
    else {
        document.getElementById("errorMsg").innerHTML = "Please Fill all the fields of the form";
        customFormClear();
    }
}


function nameValidator(){
    if($("#name").val().trim().match(/^[a-zA-Z ]*$/)){
        document.getElementById("n_error").innerHTML = "<br>";
        return true;
}else{
    document.getElementById("n_error").innerHTML = "Enter Valid Name in alphabets only.";
    customFormClear();
    return false;
    
}
}


function emailValidator(){
    if($("#email").val().trim().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            document.getElementById("e_error").innerHTML = "<br>";
            return true;
        }
    else{
        document.getElementById("e_error").innerHTML = "Enter Valid Email id.";
        customFormClear();
        return false;
        }
}


function websiteValidator(){
    if($("#website").val().trim().match(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/) || $("#website").val().trim().match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/)){
        document.getElementById("w_error").innerHTML = "<br>";
        return true;
        }
    else{
        document.getElementById("w_error").innerHTML = "Enter Valid Website url.";
        customFormClear();
        return false;
        }
}


function imageLinkValidator(){
    if($("#imageLink").val().trim().match(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/) || $("#imageLink").val().trim().match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/)){
        document.getElementById("i_l_error").innerHTML = "<br>";
        return true;
        }
    else{
        document.getElementById("i_l_error").innerHTML = "Enter Valid Website url.";
        customFormClear();
        return false;
    }
}

function checkEligible(){
    var skillOut  = skillChoices();
    if(skillOut.length==0){
        alert("Student Not Eligible!!");
    }else{
        studentInfoAdd();
    }
}
// Variable is declared to distinguish between odd and even row elemnts
let count = 0;
function studentInfoAdd()
{

    var genderOutput = gender();
    var skillOutput  = skillChoices();
    
    if ($("#studentInfoTable tbody").length == 0) {
        $("#studentInfoTable").append("<tbody></tbody>");
    }
    // Odd row elements have different styling than even row
    if (count % 2 == 0) {
        $("#studentInfoTable tbody").append(
        "<tr>" 
             + "<td id='newData' class='animated fadeIn' style='height:100px'>"
             + "<b>" + $("#name").val() + "</b>" + "<br>" 
             +genderOutput + "<br>" 
             + $("#email").val() + "<br>" 
             + '<u style="color:blue">' + $("#website").val() + "</u>" + "<br>" 
             + skillOutput
            + "</td>" 

            + "<td id='newData' class='animated fadeIn'>" 
            + '<a href="' + $("#imageLink").val() + '" target="_blank">' + '<img src="'
            + $("#imageLink").val() 
            + '" alt="Photo" title="Click to open in new tab" style="width:125px;height:100px"></a>' 
            + "</td>" 
        + "</tr>");

    }
    // Even Row elements 
    else {
        $("#studentInfoTable tbody").append(
        "<tr>" 
            + "<td id='newData' class='animated fadeIn' >" 
            + "<b>" + $("#name").val() + "</b>" + "<br>" 
            +genderOutput + "<br>" 
            + '<u style="color:blue">' + $("#website").val() + "</u>" + "<br>" 
            + $("#email").val() +"<br>" 
            + skillOutput
            + "</td>" 

            + "<td id='newData' class='animated fadeIn'>" 
            + '<a href="' + $("#imageLink").val() + '" target="_blank">' + '<img src="'
            + $("#imageLink").val() 
            + '" alt="Photo" title="Click to open in new tab" style="width:125px;height:100px"></a>' 
            + "</td>" 
        + "</tr>");
    }
    count += 1;
}
// Gives the checked radio key of gender
function gender()
{
    const choices = document.querySelectorAll('input[name="genderchoice"]');
    let selectedValue;
    for (const choice of choices) {
        if (choice.checked) {
            selectedValue = choice.value;
            break;
        }
    }
    return selectedValue;
}
// Gives the skill choices made by user
function skillChoices()
{
    const choices = document.querySelectorAll('input[name="skillchoice"]');
    let selectedValue = [];
    for (const choice of choices) {
        if (choice.checked) {
            selectedValue.push(choice.value);
        }
    }
    return selectedValue.toString();
}
function formClear()
{
    $("#name").val("");
    $("#email").val("") ;
    $("#website").val("") ;
    $("#imageLink").val("");
    document.getElementById("male").checked = true;
    document.getElementById("java").checked = false;
    document.getElementById("html").checked = false;
    document.getElementById("css").checked = false;
    document.getElementById("errorMsg").innerHTML = "<br>";
    document.getElementById("n_error").innerHTML = "<br>";
    document.getElementById("e_error").innerHTML = "<br>";
    document.getElementById("w_error").innerHTML = "<br>";
    document.getElementById("i_l_error").innerHTML = "<br>";
    

}
 
function customFormClear(){
    if($("#name").val().trim() =="") $("#name").val("");
    if($("#email").val().trim()=="")  $("#email").val("");
    if($("#website").val().trim()=="")  $("#website").val("") ;
    if($("#imageLink").val().trim()=="") $("#imageLink").val("");
    
}
