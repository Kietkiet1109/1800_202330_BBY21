function TrashCollection (){
    database.collection("items").add({         
        bin: "paper",      
        image: "./img/candy_wrapper.jpg",              
        level: 1,                      
        name: "Candy Wrapper"
    })
    
    database.collection("items").add({         
        bin: "compose",      
        image: "./img/banana_peel.jpg",              
        level: 1,                      
        name: "banana peel"
    })

    

}

// TrashCollection();

// don't delete this js - I try to figure this out