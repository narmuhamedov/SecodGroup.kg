//Элемент для отображения данных
const dataContainer = document.getElementById('dataContainer');
const addPersonForm = document.getElementById('addPersonForm');
// //Функция для загрузки данных из json файла
// async function loadData() {
//     try{
//         const response = await fetch('person.json');//полключение к json
//         const data = await response.json();//преобразование в объект
//         displayData(data);//отображение данных
//     }catch (error){
//         console.error('Ошибка загрузки данных', error);
//     }
// }

const persons = []

//Функция для загрузки данных
async function loadData(){
    try {
        const response = await fetch('person.json');
        const data = await response.json();
        person.push(...data);
        displayData(persons);
    }catch (error){
        console.error('Ошибка загрузки данных', error);
    }
}



//Функцию для отображения данных на веб странице
function displayData(data){
    data.forEach((person) => {
        //создание карточки
        const card = document.createElement('div');
        card.className = 'card';

        //Добавление фото
        const img = document.createElement('img');
        img.src = person.photo;
        img.alt = person.name;
        //Добавление имени
        const name = document.createElement('h3');
        name.textContent = person.name
        //Добавление возраста
        const age = document.createElement('p');
        age.textContent = `Возраст: ${person.age}`;
        //const email
        const email = document.createElement('p');
        email.textContent = `Почта: ${person.email}`

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(email);

        dataContainer.appendChild(card);

    });
}

//Событие на submit
addPersonForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const newPerson = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        photo: document.getElementById('photo').value,
    };
    persons.push(newPerson);
    displayData(persons);
    addPersonForm.reset();
})




//Загрузка данных
loadData();