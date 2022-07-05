
    const dino_data = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
    
    
    // Create Dino Constructor

    function Dinosour(dino_data) {
        this.species = dino_data.species
        this.weight = dino_data.weight
        this.height = dino_data.height
        this.diet = dino_data.diet
        this.where = dino_data.where
        this.when = dino_data.when
        this.fact = dino_data.fact
    }

    // Create Dino Objects

    const object_list = dino_data.map(dino_data => new Dinosour(dino_data))
    // console.log(dino_objects)


    // Create Human Object

    function create_human(){

        let inch_ = document.getElementById("inches").value
        let feet_ = document.getElementById("feet").value

        return {


            name: document.getElementById("name").value,
            feet: document.getElementById("feet").value,
            height : (feet_ * 12) + inch_,
            diet: document.getElementById("diet").value,

            speak: function () {
                console.log(`${this.name} says "I am a ${this.diet} and I weigh ${this.weight} pounds."`)
            }
        } 
    }

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    function dino_compare_weight(dino, human) {

        if (dino.weight > human.weight) {
            console.log(`${dino.species} is heavier than ${human.name}`)
        }
        else if (dino.weight < human.weight) {
            console.log(`${dino.species} is lighter than ${human.name}`)
        }
        else {
            console.log(`${dino.species} is the same weight as ${human.name}`)
        }
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    function dino_compare_height(dino, human) {

        if (dino.height > human.height) {
            console.log(`${dino.species} is taller than ${human.name}`)
        }
        else if (dino.height < human.height) {
            console.log(`${dino.species} is shorter than ${human.name}`)
        }
        else {
            console.log(`${dino.species} is the same height as ${human.name}`)
        }
    }

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

    function dino_compare_diet(dino, human) {

        if (dino.diet === human.diet) {
            console.log(`${dino.species} is the same diet as ${human.name}`)
        }
        else {
            console.log(`${dino.species} is not the same diet as ${human.name}`)
        }
    }


    function create_ui (){

        var form = document.getElementById("dino-compare")
        form.remove()

        object_list.splice(1,0,create_human())

        console.log(object_list)

    }
    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

document.getElementById('btn').addEventListener('click', create_ui())



