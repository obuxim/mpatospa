function loadPage(url){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.documentElement.innerHTML = this.responseText;
            singly();
        }
    };
    xhttp.open('GET',url,true);
    xhttp.send();
}

function singly(){
    let linkElements = [];
    let finalLinkElements = [];
    let links = [];
    linkElements = document.getElementsByTagName('a');
    for(i=0;i<linkElements.length;i++){
        let linkElement = linkElements[i];
        let link = linkElement.getAttribute('href');
        let isNativeLink = true;
        if(link == '' || link.indexOf('#') == 0 || link.indexOf('http') >= 0){
            isNativeLink = false;
        }
        if(isNativeLink){
            finalLinkElements.push(linkElement);
            links.push(link);
            linkElement.removeAttribute('href');
            linkElement.setAttribute('onclick', 'loadPage("'+link+'")');
        }
    }
    console.log(finalLinkElements);
    console.log(links);
}
singly();
