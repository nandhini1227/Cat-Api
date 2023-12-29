document.addEventListener("DOMContentLoaded", function (){
    const facts_container = document.querySelector(".facts-container")

    
     //url to fetch
    const URL = "https://cat-fact.herokuapp.com/facts"
    
    //to store al the facts
    let allFacts =[] 
    
    //indexing at time of displaying
    let no=1; 

    //displays facts on page
    function display(ind){
        
        
        facts_container.innerHTML = 
        `
        <div class="card">
        <div class="card-header">
            FACT ${ind}
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p>${allFacts[ind]}</p>
            </blockquote>
        </div>
        </div>
         `
    }


    //on clicking get facts 1>fetch the data &store in array 2>display 1st fact
    document.querySelector(".get_fact").addEventListener("click", function (){
        //fetching data
        fetch(URL)
        .then((response) => {
            response.json()
            .then((data) => {
                //adding facts to arrays
                data.forEach((id) => {
                    allFacts.push(id.text)                   
                
                })
            
                //displaying 1st fact
                display(no)
            })
        }).catch((error) => {console.error(error)})
    })

    // showing previous fact on button click
    document.querySelector(".prev").addEventListener("click", function (){
        if(no>1)
           display(--no)
        else
            alert ("No More Facts");
    })  

    //showing next fact on button click
    document.querySelector(".next").addEventListener("click", function (){
        if(no<allFacts.length-1)
           display(++no)
        else
            alert ("No More Facts");
    })  
})