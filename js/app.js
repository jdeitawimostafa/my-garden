'use strict';

const myForm = document.getElementById( 'formId' );
myForm.addEventListener( 'submit',handleSubmitBtn );
const myTable = document.getElementById( 'tableId' );

let allArr = [];
let headerRow = ['#image','name','season'];

function Flowers( name,image,season ){
  this.name = name;
  this.image =`./images/${this.name}.jpeg`;
  this.season = season;
  allArr.push( this );

}

function handleSubmitBtn ( event ){
  event.preventDefault();

  let newName = event.target.nameId.value;
  let NewImage = event.target.selectId.value;
  let NewSeason = event.target.seasonId.value;

  let newFlower = new Flowers( newName,NewImage,NewSeason );
  saveDate();
  tableHeader();
  NewFlowerRender();
  
}

Flowers.prototype.renderNewFlower = function(){
  for ( let i = 0; i<allArr.length; i++ ){
    let tr = document.createElement( 'tr' );
    myTable.appendChild( tr );
    tr.textContent = `./images${this.image} ${this.name}  ${this.season}`;

    const cancleBtn = document.createElement( 'button' );
    tr.appendChild( cancleBtn );
    cancleBtn.textContent = 'X';

    cancleBtn.setAttribute( 'onClick',`delet(${i})` );

  }


};

function NewFlowerRender(){
  myTable.innerHTML='';
  tableHeader();
  for ( let i = 0;i<allArr.length;i++ ){
    let tr = document.createElement( 'tr' );
    myTable.appendChild( tr );
    tr.textContent = allArr[i].image + allArr[i].name + allArr[i].season;

    const cancleBtn = document.createElement( 'button' );
    tr.appendChild( cancleBtn );
    cancleBtn.textContent = 'X';

    cancleBtn.setAttribute( 'onClick',`delet(${i})` );


  }

}

function delet( i ){
  allArr.splice( i,1 );

  saveDate();
  NewFlowerRender();
}

function tableHeader(){
  const tr = document.createElement( 'tr' );
  myTable.appendChild( tr );
  tr.textContent = '#image name season';

}

function saveDate(){
  let savedData = localStorage.setItem( 'data',JSON.stringify( allArr ) );
  return saveDate;
}

function getData(){
  let checkedData = localStorage.getItem( 'data' );
  if( checkedData ){
    allArr = JSON.parse( checkedData );
    NewFlowerRender();
  }
}

getData();
// tableHeader();

