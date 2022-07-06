
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
    

    function Dinosour(dino_data) {
        this.species = dino_data.species
        this.weight = dino_data.weight
        this.height = dino_data.height
        this.diet = dino_data.diet
        this.where = dino_data.where
        this.when = dino_data.when
        this.fact = dino_data.fact
    }


    function create_human(){

        let inch_ = document.getElementById("inches").value
        let feet_ = document.getElementById("feet").value

        return {

            name: document.getElementById("name").value,
            weight: document.getElementById("weight").value,
            height : (feet_ * 12) + inch_,
            diet: document.getElementById("diet").value,

        } 
    }
 

    function dino_compare_weight(dino, human) {

        if (dino.weight > human.weight) {
            let num = Math.round(dino.weight / human.weight)
            return `${dino.species} is ${num} times heavier than ${human.name}`
        }
        else if (dino.weight < human.weight) {
            let num = Math.round(human.weight / dino.weight)
            return `${dino.species} is ${num} times lighter than ${human.name}`
        }
        else {
            return `${dino.species} is the same weight as ${human.name}`
        }
    }
    

    function dino_compare_height(dino, human) {

        if (dino.height > human.height) {
            let num = Math.round(dino.height / human.height)
            return `${dino.species} is ${num} times taller than ${human.name}`
        }
        else if (dino.height < human.height) {
            let num = Math.round(human.height / dino.height)
            return `${dino.species} is ${num} times shorter than ${human.name}`
        }
        else {
            return `${dino.species} is the same height as ${human.name}`
        }
    }

    function dino_compare_diet(dino, human) {

        if (dino.diet === human.diet) {
            return `${dino.species} is the same diet as ${human.name}`
        }
        else {
            return `${dino.species} is not the same diet as ${human.name}`
        }
    }


    function create_fact(dino_obj, human_obj) {


        if (dino_obj.species === 'Pigeon') {
            return dino_obj.fact
        }

        let random_number =  Math.floor(Math.random() * 5)
        let new_fact = ''

        switch (random_number) {
            case 0:
                new_fact = dino_obj.fact
                break;

            case 1:
                new_fact = 'The ' + dino_obj.species + ' was living in ' + dino_obj.where + '.'
                break;

            case 2:
                new_fact = 'The ' + dino_obj.species + ' was living at ' + dino_obj.when + ' time.'
                break;

            case 3:
                new_fact = dino_compare_diet(dino_obj, human_obj)
                break;

            case 4:
                new_fact = dino_compare_weight(dino_obj, human_obj)
                break;

            case 5:
                new_fact = dino_compare_height(dino_obj, human_obj)
                break;
        
            default:
                new_fact = 'No fact found.'
                break;
        }

        return new_fact
    }


    function create_ui (){

        document.querySelector("form").style.display = "none"

        const human = create_human()

        const object_list = dino_data.map(dino_data => new Dinosour(dino_data))
        object_list.forEach(dino_obj => { dino_obj.fact = create_fact(dino_obj, human)})
        object_list.splice(4,0,human)

        console.log(object_list)

        let grid;

        for (let index = 0; index < 9; index++) {

            if (index === 4) {
                grid = create_human_grid(human)
            }else{
                grid = create_dino_grid(object_list[index])
            }

            document.getElementById("grid").appendChild(grid)
        }

    }

    function create_dino_grid(dino_obj){

        let source = dino_obj.species.toLowerCase()

        const dino_grid = document.createElement("div")
        dino_grid.className = "grid-item"

        dino_grid.innerHTML = `<h3>${dino_obj.species}</h3><img src="images/${dino_obj.species.toLowerCase()}.png" alt="${dino_obj.name}"><p>${dino_obj.fact}</p>`

        return dino_grid
    }

    function create_human_grid(human_obj){

        const human_grid = document.createElement("div")
        human_grid.className = "grid-item"

        human_grid.innerHTML = `<h3>${human_obj.name}</h3><img src="images/human.png" alt="${human_obj.name}">`

        return human_grid

    }

    (function (){
        document.getElementById('btn').addEventListener('click', create_ui)
    })()




