function TrashCollection(){
    db.collection("items").add({         
        bin: "paper",      
        image: "./img/items/candy_wrapper.png",              
        level: 1,                      
        name: "Candy Wrapper"
    })
    
    db.collection("items").add({         
        bin: "compose",      
        image: "./img/items/banana_peel.png",              
        level: 1,                      
        name: "Banana Peel"
    })

    db.collection("items").add({
        bin: "plastic",
        image: "./img/items/bottle.png",
        level: 1,
        name: "Bottle"
    })

    db.collection("items").add({
        bin: "compose",
        image: "./img/items/apple_core.png",
        level: 1,
        name: "Apple Core"
    })
    
    db.collection("items").add({
        bin: "plastic",
        image: "./img/items/coffee_cup.png",
        level: 1,
        name: "Coffee Cup"
    })

    db.collection("items").add({
        bin: "paper",
        image: ".img/items/cardboard_box.png",
        level: 1,
        name: "Cardboard Box"
    })

    db.collection("items").add({         
        bin: "plastic",      
        image: "./img/items/toothbrush.png",              
        level: 3,                      
        name: "Toothbrush"
    })

    db.collection("items").add({         
        bin: "plastic",      
        image: "./img/items/plastic_bag.png",              
        level: 1,                      
        name: "Plastic Bag"
    })

    db.collection("items").add({         
        bin: "compose",      
        image: "./img/items/eggshells.png",              
        level: 1,                      
        name: "Eggshells"
    })

    db.collection("items").add({         
        bin: "paper",      
        image: "./img/items/magazines.png",              
        level: 2,                      
        name: "Magazines"
    })

    db.collection("items").add({         
        bin: "paper",      
        image: "./img/items/envelope.png",              
        level: 2,                      
        name: "Envelope"
    })

    db.collection("items").add({         
        bin: "plastic",      
        image: "./img/items/disposable_cutlery.png",              
        level: 3,                      
        name: "Disposable Cutlery"
    })

    db.collection("items").add({         
        bin: "compose",      
        image: "./img/items/leaves.png",              
        level: 1,                      
        name: "Leaves"
    })
    

    db.collection("items").add({         
        bin: "plastic",      
        image: "./img/items/mik_box.png",              
        level: 2,                      
        name: "Milk Box"
    })


    db.collection("items").add({         
        bin: "compose",      
        image: "./img/items/tea_bags.png",              
        level: 1,                      
        name: "Tea Bags"
    })


    db.collection("items").add({         
        bin: "plastic",      
        image: "./img/items/shampoo_bottle.png",              
        level: 1,                      
        name: "Shampoo Bottle"
    })
    
    
    db.collection("items").add({         
        bin: "paper",      
        image: "./img/items/toilet_paper_roll.png",              
        level: 2,                      
        name: "Toilet Paper Roll"
    })
    
    db.collection("items").add({
        bin: "paper",
        image: "./img/items/straw.png",
        level: 1,
        name: "Straw"
    })

    db.collection("items").add({         
        bin: "paper",      
        image: "./img/items/receipt.png",              
        level: 2,                      
        name: "Receipt"
    })
    
    db.collection("items").add({         
        bin: "plastic",      
        image: "./img/items/usb_cable.png",              
        level: 3,                      
        name: "USB Cable"
    })
    
    db.collection("items").add({         
        bin: "plastic",      
        image: "./img/items/headphones.png",              
        level: 3,                      
        name: "Headphones"
    })
    
    db.collection("items").add({         
        bin: "paper",      
        image: "./img/items/cereal_box.png",              
        level: 1,                      
        name: "Cereal Box"
    })
    

    db.collection("items").add({         
        bin: "plastic",      
        image: "./img/items/disposable_lighter.png",              
        level: 3,                      
        name: "Disposable Lighter"
    })
    
}

document.addEventListener("DOMContentLoaded", function () {
    // TrashCollection();
});
  