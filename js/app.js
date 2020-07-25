// Petición de la API para los paises
const getPosts = (success, error) => {
    let req = new XMLHttpRequest();
        req.open('GET', 'https://restcountries.eu/rest/v2/all');
        req.onload = function() {
          req.status == 200?
            success(JSON.parse(req.response)):
            error();
        };
        req.send();
    }
    
    getPosts( r => {
            let arregloTotal=r;
            let paises = [];
            for (let pais of arregloTotal) 
                paises.push(pais.name);
            console.log(paises);
            addOptions("pais", paises);
        },
        r => {
            console.log('Ocurrió un error')
        },
    )
    

    addOptions = (domElement, paises) => {
        let select = document.getElementsByName(domElement)[0];
        for (value in paises) {
         let option = document.createElement("option");
         option.text = paises[value];
         select.add(option);
        }
       }