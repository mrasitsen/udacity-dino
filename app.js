
    

    const dino_data =  [
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

    function Human(){
        this.name = document.getElementById("name").value
        this.where = document.getElementById("where").value
        this.when = document.getElementById("when").value
        this.diet = document.getElementById("diet").value 
    }
 

    function dino_compare_name(dino, human) {

        if (dino.namet === human.name) {
            return `${dino.species} does share a common name with ${human.name}`
        }
        else {
            return `${dino.species} does not share a common name with ${human.name}`
        }
    }
    

    function dino_compare_where(dino, human) {

        if (dino.where === human.where) {
            return `${dino.species} is from same place with ${human.name}`
        }
        else {
            return `${dino.species} is not from the same place with ${human.name}`
        }
    }

    function dino_compare_when(dino, human) {

        if (dino.when === human.when) {
            return `${dino.species} is from the same era with ${human.name}`
        }
        else {
            return `${dino.species} is not from the same era with ${human.name}`
        }
    }


    function create_fact(dino_obj,human_obj,i){

        let fact_arr = ['The name of this dino is ' + dino_obj.species
                        ,'This dino was living at ' + dino_obj.where
                        ,dino_compare_name(dino_obj, human_obj)
                        ,dino_compare_where(dino_obj, human_obj)
                        ,dino_compare_when(dino_obj, human_obj)
                        ,'The name of this dino is ' + dino_obj.species
                        ,'This dino was living at ' + dino_obj.where
                    ]

        return fact_arr[i]     
    }


    function create_dinos(dino_data, human_obj){

        let dino_arr = []

  
        
     
        var x = 0
        for(let i=6; i>=0; i--){
            
            let random_index = Math.floor(Math.random() * i)
            let dino_obj = new Dinosour(dino_data[random_index])

            dino_arr.push(dino_obj)
            dino_arr[dino_arr.length-1].fact = create_fact(dino_obj, human_obj, x)
            dino_data.splice(random_index, 1)
            x++
        }

        const dino_obj = new Dinosour(dino_data[0])
        dino_arr.push(dino_obj)

        return dino_arr
    }

    function create_ui (){

        const human = new Human()
        const object_list = create_dinos(dino_data, human)
        
        document.getElementById("dino-compare").remove()


        let grid;

        for (var index=0; index < 4; index++) {

            grid = create_dino_grid(object_list[index])
            append_child(grid)
        }

        grid = create_human_grid(human)
        append_child(grid)

        for (var index=4; index < 8; index++) {

            grid = create_dino_grid(object_list[index])
            append_child(grid)
        }



    }


    function append_child(grid){
        document.getElementById("grid").appendChild(grid)
    }

    function create_dino_grid(dino_obj){

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


    document.getElementById('btn').addEventListener('click', create_ui)
   
    
 




