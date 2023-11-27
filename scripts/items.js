function TrashCollection() {
  db.collection("items").add({
    bin: "landfill",
    image: "./img/items/candy_wrapper.png",
    level: 3,
    desc: "they are too small and cannot be recycled. The thin plastic pieces are nearly impossible to sort, so they get stuck to other recyclables and become contaminants.",
    name: "Candy Wrapper",
  });

  db.collection("items").add({
    bin: "compost",
    image: "./img/items/banana_peel.png",
    level: 1,
    desc: "anything that can safely be consumed by humans or pets, such as meat, fish, dairy, fruit, vegetables, nuts, grains & cereal can be placed in the compost bin",
    name: "Banana Peel",
  });

  db.collection("items").add({
    bin: "plastic",
    image: "./img/items/bottle.png",
    level: 1,
    desc: "hard plastic containers are accepted for curbside collection. Rinse clean, and remove caps, lids, spray pumps and pull-up tops, and you're good to go!",
    name: "Bottle",
  });

  db.collection("items").add({
    bin: "plastic",
    image: "./img/items/bottle_cap.png",
    level: 2,
    desc: "by separating the caps from the bottles, they will float and the plastic bottles will sink, making it easy for the facility to sort the different types of material and recycle them into new items.",
    name: "Plastic Bottle Caps",
  });

  db.collection("items").add({
    bin: "compost",
    image: "./img/items/apple_core.png",
    level: 1,
    desc: "anything that can safely be consumed by humans or pets, such as meat, fish, dairy, fruit, vegetables, nuts, grains & cereal can be placed in the compost bin",
    name: "Apple Core",
  });

  db.collection("items").add({
    bin: "plastic",
    image: "./img/items/coffee_cup.png",
    level: 2,
    desc: "paper coffee cups are actually lined with plastic. Separate the straws, empty and rinse cups, and you're good to go!",
    name: "Coffee Cup",
  });

  db.collection("items").add({
    bin: "paper",
    image: ".img/items/carboard_box.png",
    level: 1,
    desc: "generally, as long as the paper product is not lined with a plastic film, coated with wax, or covered in embellishments like glitter, velvet or foil, it can go in the paper bin.",
    name: "Cardboard Boxes",
  })

  db.collection("items").add({
    bin: "landfill",
    image: ".img/items/pizza_box.png",
    level: 3,
    desc: "the cheese, grease and food residues soak into the box. Grease or oils from food makes any paper product impossible to recycle.",
    name: "Pizza Box",
  });

  db.collection("items").add({
    bin: "landfill",
    image: "./img/items/toothbrush.png",
    level: 3,
    desc: "the composite plastic used to create the toothbrushes doesn't break apart efficiently, and chunks get stuck in recycling machinery.",
    name: "Toothbrush",
  });

  db.collection("items").add({
    bin: "landfill",
    image: "./img/items/plastic_bag.png",
    level: 1,
    desc: "they are inherently difficult to keep free of contaminants and to pull out of the recycling without snagging something else along with them. They can also jam the processing equipment!",
    name: "Plastic Bag",
  });

  db.collection("items").add({
    bin: "compost",
    image: "./img/items/eggshells.png",
    level: 1,
    desc: "anything that can safely be consumed by humans or pets, such as meat, fish, dairy, fruit, vegetables, nuts, grains & cereal can be placed in the compost bin",
    name: "Eggshells",
  });

  db.collection("items").add({
    bin: "paper",
    image: "./img/items/magazines.png",
    level: 2,
    desc: "while magazines are treated with certain additives to make the pages look glossy, they can be recycled with your normal paper products!",
    name: "Magazines",
  });

  db.collection("items").add({
    bin: "paper",
    image: "./img/items/envelope.png",
    level: 2,
    desc: "as long as any plastic wrappings gets removed, things like glue, tape, and staples; even glossy magazines are accepted in the paper bin",
    name: "Envelope",
  });

  db.collection("items").add({
    bin: "plastic",
    image: "./img/items/disposable_cutlery.png",
    level: 3,
    desc: "as of January 1, 2023 the Recycle BC program has expanded to include several new materials. This includes some types of single-use and packaging-like plastics like plastic cutlery.",
    name: "Disposable Cutlery",
  });

  db.collection("items").add({
    bin: "compost",
    image: "./img/items/leaves.png",
    level: 2,
    desc: "yard and garden waste such as grass, leaves, pine cones, small fallen fruit and shrub & tree trimmings are accepted in the compost bin",
    name: "Leaves",
  });

  db.collection("items").add({
    bin: "plastic",
    image: "./img/items/milk_container.png",
    level: 1,
    desc: "hard plastic containers like these can easily be recycled. Just rinse them well, separate the lids and you're good to go!",
    name: "Milk Container",
  });

  db.collection("items").add({
    bin: "compost",
    image: "./img/items/tea_bags.png",
    level: 1,
    desc: "anything that can safely be consumed by humans or pets, such as meat, fish, dairy, fruit, vegetables, nuts, grains & cereal can be placed in the compost bin",
    name: "Tea Bags",
  });

  db.collection("items").add({
    bin: "plastic",
    image: "./img/items/shampoo_bottle.png",
    level: 1,
    desc: "as long as they are rinsed out with any hand pumps removed, they can be recycled along with the other hard plastic materials.",
    name: "Shampoo Bottle",
  });

  db.collection("items").add({
    bin: "paper",
    image: "./img/items/toilet_paper_roll.png",
    level: 1,
    desc: "they are made of cardboard, so they can easily be recycled with the other paper materials in the paper bin.",
    name: "Toilet Paper Roll",
  });

  db.collection("items").add({
    bin: "plastic",
    image: "./img/items/straw.png",
    level: 2,
    desc: "as of January 1, 2023 the Recycle BC program has expanded to include several new materials. This includes some types of single-use and packaging-like plastics like plastic straws.",
    name: "Straw",
  });

  db.collection("items").add({
    bin: "landfill",
    image: "./img/items/receipt.png",
    level: 2,
    desc: "they're printed on thermal paper, which contains a chemical that cannot be easily removed from the paper during the recycling process.",
    name: "Receipt",
  });

  db.collection("items").add({
    bin: "paper",
    image: "./img/items/cereal_box.png",
    level: 1,
    desc: "although cereal boxes are coated with wax, it can go in the paper bin as long as the linear bags and food residues are removed.",
    name: "Cereal Box",
  });

  db.collection("items").add({
    bin: "plastic",
    image: "./img/items/aluminum_foils.png",
    level: 3,
    desc: "they are recyclable if it's free of food residue. They must be rinsed clean for it to be recycled, since food contaminates recycling.",
    name: "Aluminum Foil",
  });

}

document.addEventListener("DOMContentLoaded", function () {
  // TrashCollection();
});
