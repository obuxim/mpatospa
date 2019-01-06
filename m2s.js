/*
	Name: mpatospa
	Extended Name:	Multi Page App to Single Page App
	Author: Zubair Hasan
	Author URL: https://zubairhasan.pro
	Author Company: Octoriz
	Copyright: https://octoriz.com
	Version: alpha-0.01
*/


//First fetch all the links and store it to global variable.
const linkElements = document.getElementsByTagName('a');
console.log('I got the link elements');
//Get all the links into the global variable.
const links = new Array(linkElements.length);
console.log('I created the links variable');
for(i = 0; i < linkElements.length; i++){
    links[i] = linkElements[i].getAttribute('href');
    console.log('I stored ' + links[i] + ' to the links variable');
}

//Now that all global variables are set we can start some working.

//First let's build the ajax function.
function loadPage(url){
    let xhttp = new XMLHttpRequest();
    console.log('I created a new XMLHttpRequest');
    xhttp.onreadystatechange = function(){
        console.log('onreadystatechange is here');
        if(this.readyState == 4 && this.status == 200){
            console.log('response procesed and status ok');
            document.getElementsByTagName('body')[0].innerHTML = this.responseText;
            console.log('I changed the body from ' + url);
            singly();
            console.log('I ran singly again so it works');
        }
    }
    xhttp.open('GET', url, true);
    xhttp.send();
}

//Let's work with singly now.
function singly(){
    //Uh oh the loop needs to be ran again.
    for(i = 0; i < linkElements.length; i++){
        link = links[i];
        console.log('I got '+link);
        linkElements[i].removeAttribute('href');
        linkElements[i].setAttribute('onclick', 'loadPage("'+link+'");');
        console.log('I sat click listener for '+link);
    }
}
singly();
