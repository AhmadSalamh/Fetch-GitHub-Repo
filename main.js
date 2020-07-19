//Main Variables

let theInput=document.querySelector('.get-repos input');
let getButton=document.querySelector('.get-button');
let ReposData=document.querySelector('.show-data');


getButton.addEventListener('click',function(){

    getRepos()
})

//Get Repos Function
function getRepos(){

    if (theInput.value ==''){

        ReposData.innerHTML =`<span>Please Write Github Username.</span>`

    } else {
        
        fetch(`https://api.github.com/users/${theInput.value}/repos`)

            .then((response)=>  response.json())

            .then((repositories)=>{
                
                 // Empty The Contanier
                 ReposData.innerHTML=''

                 //Loop On Repositories

                 repositories.forEach(repo => {
                     
                    //Create the main div

                    let mainDiv =document.createElement('div');

                    //create Repo Name Text
                    let repoName=document.createTextNode(repo.name)

                    //Append The Text To Main Div
                    mainDiv.appendChild(repoName)

                    //Create Repo URL
                    let theUrl = document.createElement('a')

                    //create Repo Url Text
                    let theUrlText =document.createTextNode('visit');

                     //Append The Repo Url To Anchor Tag
                     theUrl.appendChild(theUrlText)

                     //add The HyperText Reference 'href'ElzeroWebSchool
                     theUrl.href=`https://github.com/${theInput.value}/${repo.name}`

                     // Set Sttribute Blank
                     theUrl.setAttribute('target','_blank')

                    //Append Url Anchor To main div
                    mainDiv.appendChild(theUrl)

                    //Create Stars Count Span
                    let starsSpan=document.createElement('span');

                    //Create The Stars Count Text
                    let starsText =document.createTextNode(`Stars ${repo.stargazers_count}`)

                    //Add stars Count Text to Stars span
                    starsSpan.appendChild(starsText)

                    //Append Stars Count Span To main div
                    mainDiv.appendChild(starsSpan)

                    //Add Class On main div
                    mainDiv.className = 'repo-box'

                    //Append The MainDiv To Container
                    ReposData.appendChild(mainDiv)
                 });
            })
    }
}