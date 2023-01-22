// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Марджорі (Мардж) Сімпсон (дівоче прізвище — Бувє) (англ. Marjorie "Marge" Simpson, née Bouvier) — один з головних персонажів анімаційного серіалу Сімпсони, дружина Гомера Сімпсона, мати Ліси та Барта. Домогосподарка, майже весь свій час проводить удома доглядаючи наймолодшу дитину Меґґі, а також Барта, Лісу і чоловіка. Найвідоміша особливість героїні — блакитне волосся зібране у високу зачіску — «вулик». Мардж названо на честь матері творця серіалу Мета Ґрейнінґа Марґарет (Мардж) Ґрейнінґ.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ліса — надзвичайно розумна восьмирічна дівчинка, одина з найрозумніших у серіалі (за даними різних серій її IQ становить 156 чи 159). Феміністка. Грає на саксофоні. Полюбляє дивитися мультфільм «Чух і Сверблячка» разом з сімєю.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Маргарет «Меґґі» Сімпсон (англ. Margaret "Maggie" Simpson) — одна з головних героїв мультсеріалу Сімпсони, найменша дочка Гомера Сімпсона та Мардж Сімпсон. Протягом усіх років серіалу Меґґі не росте і завжди залишається немовлям у повзунках та підгузнику. Попри свій вік Меґґі потрапляє в різні пригоди разом зі своїм братом Бартом та сестрою Лісою. В одному з серіалів про майбутнє Ліси, Меґґі зявляється дорослою, але навіть там у неї немає слів. Ідею цього персонажу Мет Ґрейнінґ запозичив від своєї молодшої сестри Меґґі Ґрейнінґ.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'
//     },
// ];


// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// let allSimpsonsDiv = document.getElementsByClassName('member') [0];
// for (const simpson of simpsons) {
//
//     let div = document.createElement('div');
//     div.classList.add('member')
//
//     let simpsonDivTitle = document.createElement('h2')
//     simpsonDivTitle.innerText = `${simpson.name}, ${simpson.surname}, ${simpson.age}`
//
//     let simpsonDivParagraph = document.createElement('p')
//     simpsonDivParagraph.innerText = simpson.info
//
//     let img = document.createElement('img')
//     img.src = simpson.photo
//
//     div.append(simpsonDivTitle, simpsonDivParagraph, img);
//     document.body.append(div)
//
// }



// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

for (const cours of coursesArray) {

    let mainDiv = document.createElement('div');
    mainDiv.style.display = 'flex'
    document.body.appendChild(mainDiv);

    let innerDiv = document.createElement('div');
    innerDiv.style.border = '2px solid blue';
    innerDiv.style.width = '400px';
    innerDiv.style.display = 'flex'
    innerDiv.style.flexDirection = 'column'
    mainDiv.appendChild(innerDiv);

    let title = document.createElement('h3');
    title.innerText = `title: ${cours.title}`;
    title.style.flexDirection = 'row'
    title.style.border = '2px solid green';
    title.style.width = '400px';
    title.style.background = 'yellow'
    title.style.textAlign = 'center'
    innerDiv.appendChild(title);

    let monthDuration = document.createElement('h4');
    monthDuration.innerText = `monthDuration: ${cours.monthDuration}`;
    monthDuration.style.marginTop = '10px';
    monthDuration.style.border = '2px solid black';
    innerDiv.appendChild(monthDuration);

    let hourDuration = document.createElement('h4');
    hourDuration.innerText = `hourDuration: ${cours.hourDuration}`;
    hourDuration.style.marginTop = '10px';
    hourDuration.style.border = '2px solid brown';
    innerDiv.appendChild(hourDuration);

    let modules = document.createElement('ul');
    modules.style.marginTop = '10px';
    modules.style.border = '2px solid red';
    innerDiv.append(modules);

    for (const module of cours.modules) {
        let liModule = document.createElement('li');
        liModule.innerText = module
        innerDiv.appendChild(liModule)

    }

}

