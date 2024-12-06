//Элемент для отображения данных
const dataContainer = document.getElementById('dataContainer');

//Функция для загрузки данных из json файла
async function loadData() {
    try{
        const response = await fetch('person.json');//полключение к json
        const data = await response.json();//преобразование в объект
        displayData(data);//отображение данных
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
//Загрузка данных
loadData();