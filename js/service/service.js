const dataFriend = [
    {
        "id":1,
        "picture" : "C:/Users/GUSTAVO/Documents/Component/FriendList/media/icon-person-64.png",
        "name" : "Juan Reyes Martinez",
        "hobbie" : "Me gusta el rock",
        "relationship":"Amigos"
    },
    {
        "id":2,
        "picture" : "C:/Users/GUSTAVO/Documents/Component/FriendList/media/icon-administrator-male-50.png",
        "name" : "Gustavo Gilberto Sanchez",
        "hobbie" : "Me gusta bailar",
        "relationship":"Amigos"
    },
    {
        "id":3,
        "picture" : "C:/Users/GUSTAVO/Documents/Component/FriendList/media/icon-person-female-48.png",
        "name" : "Adriana Ramiez Ramos",
        "hobbie" : "Me gusta leer",
        "relationship":"Amigos"
    },
    {
        "id":4,
        "picture" : "C:/Users/GUSTAVO/Documents/Component/FriendList/media/icon-user-96.png",
        "name" : "Andres Estaban Reyes",
        "hobbie" : "Me gusta el cine",
        "relationship":"Amigos"
    }
];

const dataAquaintance = [
    {
        "id":5,
        "picture" : "C:/Users/GUSTAVO/Documents/Component/FriendList/media/icon-person-64.png",
        "name" : "Raul Martinez Martinez",
        "hobbie" : "Me gusta el rock",
        "relationship":"Conocidos"
    },
    {
        "id":6,
        "picture" : "C:/Users/GUSTAVO/Documents/Component/FriendList/media/icon-administrator-male-50.png",
        "name" : "Gilberto Paez Sanchez",
        "hobbie" : "Me gusta bailar",
        "relationship":"Conocidos"
    },
    {
        "id":7,
        "picture" : "C:/Users/GUSTAVO/Documents/Component/FriendList/media/icon-person-female-48.png",
        "name" : "Arthur Conan Doyle",
        "hobbie" : "Me gusta leer",
        "relationship":"Conocidos"
    },
    {
        "id":8,
        "picture" : "C:/Users/GUSTAVO/Documents/Component/FriendList/media/icon-user-96.png",
        "name" : "Bennedic Cumberbatch",
        "hobbie" : "Me gusta el cine",
        "relationship":"Conocidos"
    }
]


window.onload = function () {
    printListFriend(dataFriend);
    printListAquaintance(dataAquaintance);
}

function changeOptionSelected(id){
    console.log(id)
    var resultElementList = dataFriend.filter(function(element){
        return (element.id == id)
    })
    console.log("Datos",resultElementList)
    printListAquaintance(resultElementList)
    deleteElementList(resultElementList[0].id);

    console.log(obtenerId(resultElementList[0].id))
}

function obtenerId(id){
    var element = document.getElementById(id);
    return element;
}

function printListFriend(data) {
    var size = data.length;
    const list = document.getElementById('listFriends');

    for (let i = 0; i < size; i++) {
        //Crear elementos
        let pNombre = document.createElement('p');
        let pHobbie = document.createElement('p');
        let img = document.createElement('img');
        let divElementFriend = document.createElement('div');
        let divSelectedBox = document.createElement('div');
        let buttonRelationship = document.createElement('select');
        let divParagraphs = document.createElement('div');
        let option1 =  document.createElement('option');
        let option2  = document.createElement('option');
        let option3  = document.createElement('option');
        let textNode = document.createTextNode(data[i].name);
        //Asignar valores a los elementos
        pNombre.appendChild(textNode);
        pNombre.className = 'paragraphName';
        pHobbie.className = 'paragraphFriend';
        img.src = data[i].picture;
        divElementFriend.className = 'elementList';
        divElementFriend.id = data[i].id;
        divSelectedBox.className = 'divSelectedBoxRelationship';
        divParagraphs.className = 'divParagraphs';

        pHobbie.textContent = data[i].hobbie;
        divElementFriend.appendChild(img);
        divParagraphs.appendChild(pNombre);
        divParagraphs.appendChild(pHobbie);
        // buttonRelationship.name = "relationship";
        buttonRelationship.id = "selectedBoxRelationship"

        option1.value = 'Amigos';
        option1.text = 'Amigos';
        option2.value = 'Conocidos';
        option2.text = 'Conocidos';
        option3.value = 'Familia';
        option3.text = 'Familia';
        
        buttonRelationship.appendChild(option1);
        buttonRelationship.appendChild(option2);
        buttonRelationship.appendChild(option3);
        
        switch(data[i].relationship){
            case 'Amigos':
            buttonRelationship.selectedIndex = 0;
            break;
            case 'Conocidos':
            buttonRelationship.selectedIndex = 1;
            break;
            case 'Familia':
            buttonRelationship.selectedIndex = 2;
            break;
        }
        buttonRelationship.onchange = (event)=>changeOptionSelected(event.path[2].id);
        divSelectedBox.appendChild(buttonRelationship);
        divElementFriend.appendChild(divParagraphs);
        divElementFriend.appendChild(divSelectedBox);
        list.appendChild(divElementFriend);
        
    }
}

// function printListAquaintance(data){
//     var size = data.length;
//     const list = document.getElementById('listAquaintances');

//     for (let i = 0; i < size; i++) {
//         //Crear elementos
//         let pNombre = document.createElement('p');
//         let pHobbie = document.createElement('p');
//         let img = document.createElement('img');
//         let divElementFriend = document.createElement('div');
//         let divSelectedBox = document.createElement('div');
//         let buttonRelationship = document.createElement('select');
//         let divParagraphs = document.createElement('div');
//         let option1 =  document.createElement('option');
//         let option2  = document.createElement('option');
//         let option3  = document.createElement('option');
//         let textNode = document.createTextNode(data[i].name);
//         //Asignar valores a los elementos
//         pNombre.appendChild(textNode);
//         pNombre.className = 'paragraphName';
//         pHobbie.className = 'paragraphFriend';
//         img.src = data[i].picture;
//         divElementFriend.className = 'elementList';
//         divSelectedBox.className = 'divSelectedBoxRelationship';
//         divParagraphs.className = 'divParagraphs';

//         pHobbie.textContent = data[i].hobbie;
//         divElementFriend.appendChild(img);
//         divParagraphs.appendChild(pNombre);
//         divParagraphs.appendChild(pHobbie);
//         buttonRelationship.name = "relationship";

//         option1.value = 'Amigos';
//         option1.text = 'Amigos';
//         option2.value = 'Conocidos';
//         option2.text = 'Conocidos';
//         option3.value = 'Familia';
//         option3.text = 'Familia';
        
//         buttonRelationship.appendChild(option1);
//         buttonRelationship.appendChild(option2);
//         buttonRelationship.appendChild(option3);
//         switch(data[i].relationship){
//             case 'Amigos':
//             buttonRelationship.selectedIndex = 0;
//             break;
//             case 'Conocidos':
//             buttonRelationship.selectedIndex = 1;
//             break;
//             case 'Familia':
//             buttonRelationship.selectedIndex = 2;
//             break;
//         }
//         console.log("Datos sobre conocidos ",data[i].relationship)
//         divSelectedBox.appendChild(buttonRelationship);
        
//         divElementFriend.appendChild(divParagraphs);
//         divElementFriend.appendChild(divSelectedBox);
//         list.appendChild(divElementFriend);

//     }
    
// }
///////////////

function printListAquaintance(data) {
    var size = data.length;
    const list = document.getElementById('listAquaintances');

    for (let i = 0; i < size; i++) {
        //Crear elementos
        let pNombre = document.createElement('p');
        let pHobbie = document.createElement('p');
        let img = document.createElement('img');
        let divElementFriend = document.createElement('div');
        let divSelectedBox = document.createElement('div');
        let buttonRelationship = document.createElement('select');
        let divParagraphs = document.createElement('div');
        let option1 =  document.createElement('option');
        let option2  = document.createElement('option');
        let option3  = document.createElement('option');
        let textNode = document.createTextNode(data[i].name);
        //Asignar valores a los elementos
        pNombre.appendChild(textNode);
        pNombre.className = 'paragraphName';
        pHobbie.className = 'paragraphFriend';
        img.src = data[i].picture;
        divElementFriend.className = 'elementList';
        divElementFriend.id = data[i].id;
        divSelectedBox.className = 'divSelectedBoxRelationship';
        divParagraphs.className = 'divParagraphs';

        pHobbie.textContent = data[i].hobbie;
        divElementFriend.appendChild(img);
        divParagraphs.appendChild(pNombre);
        divParagraphs.appendChild(pHobbie);
        // buttonRelationship.name = "relationship";
        buttonRelationship.id = "selectedBoxRelationship"

        option1.value = 'Amigos';
        option1.text = 'Amigos';
        option2.value = 'Conocidos';
        option2.text = 'Conocidos';
        option3.value = 'Familia';
        option3.text = 'Familia';
        
        buttonRelationship.appendChild(option1);
        buttonRelationship.appendChild(option2);
        buttonRelationship.appendChild(option3);
        
        switch(data[i].relationship){
            case 'Amigos':
            buttonRelationship.selectedIndex = 0;
            break;
            case 'Conocidos':
            buttonRelationship.selectedIndex = 1;
            break;
            case 'Familia':
            buttonRelationship.selectedIndex = 2;
            break;
        }
        buttonRelationship.onchange = (event)=>changeOptionSelected(event.path[2].id);
        divSelectedBox.appendChild(buttonRelationship);
        divElementFriend.appendChild(divParagraphs);
        divElementFriend.appendChild(divSelectedBox);
        list.appendChild(divElementFriend);
        
    }
}

function deleteElementList(element){
    var getId = document.getElementById(element);
    getId.parentNode.removeChild(getId)
}






