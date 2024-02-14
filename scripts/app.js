import { createRow } from "./createRow.js";
let sortByEmail = document.getElementById('sortByEmail');
let sortByFname = document.getElementById('sortByFname');
let sortLname = document.getElementById('sortByLname');
let sortById = document.getElementById('sortById');
let sortByAge = document.getElementById('sortByAge');
let sortByHieght= document.getElementById('sortByHieght');
let id = document.getElementById('id');
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let email = document.getElementById('email');
let age = document.getElementById('age');
let hieght = document.getElementById('hieght');
let ten = document.getElementById('ten');
let twenty = document.getElementById('twenty');
let thirty = document.getElementById('thirty');
let fourty = document.getElementById('fourty');
let fifty = document.getElementById('fifty');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let Div = document.getElementById('usersDiv1')


const getPeople = async () =>{
    const promise = await fetch('../data/data.json')
    const data = await promise.json();
    console.log(data);
    return data.People;
}
let arr = await getPeople();


const sortFirstName = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.FirstName.toLowerCase();
        let nameB = b.FirstName.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows();



}
const sortLastName = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.LastName.toLowerCase();
        let nameB = b.LastName.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows();



}

const sortEmail = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.Email.toLowerCase();
        let nameB = b.Email.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows()



}

const sortAge = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.Age
        let nameB = b.Age

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows();



}

const sortHeight = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.Height
        let nameB = b.Height

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows();



}



export { Div };