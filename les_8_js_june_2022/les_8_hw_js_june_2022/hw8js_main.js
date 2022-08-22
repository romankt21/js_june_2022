//  // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname, email, phone) {
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone;
}
//
// console.log( new User(1, 'vasyl', 'petrenko', 'rrr@gmail.com',123456))


//  // створити пустий масив, наповнити його 10 об'єктами new User(....)

let arr =  [
    new User (1, 'ivan' ,'ivanenko', 'hh@gmail.com', 222),
    new User (2, 'petro' ,'petrenko', 'hh@gmail.com', 222),
    new User (3, 'mykola' ,'petrenko', 'hh@gmail.com', 222),
    new User (4, 'vasyl' ,'petrenko', 'hh@gmail.com', 222),
    new User (5, 'olya' ,'petrenko', 'hh@gmail.com', 222),
    new User (6, 'ira' ,'petrenko', 'hh@gmail.com', 222),
    new User (7, 'zoryana' ,'petrenko', 'hh@gmail.com', 222),
    new User (8, 'kateryna' ,'petrenko', 'hh@gmail.com', 222),
    new User (9, 'maria' ,'petrenko', 'hh@gmail.com', 222),
    new User (10, 'vika' ,'petrenko', 'hh@gmail.com', 222),

 ];
console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

 let filterUser = arr.filter((u) => {
    if (u.id % 2 === 0){
    return u
    }});
console.log(filterUser);


