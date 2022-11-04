const noteOne = document.getElementById("note1");
const noteTwo = document.getElementById("note2");
const noteThree = document.getElementById("note3");
const txtnote = document.getElementById("end note");
const Name = document.getElementById("name");
const Cont_name = document.getElementById("p_name")

btn_calculate.onclick = function (e){
  e.preventDefault();

  var result_note= (parseFloat(noteOne)+parseFloat(noteTwo)+parseFloat(noteThree))/3;

  p_name.textContent = `Estudent: ${Name.value}`;
  txtnote.value=result_note;
  
  

  /*if(result_note>=4.5){
    txtnote.textContent = `Student, ${Name}, you have an excellent mark`
  }else if(result_note>=4.5 || result_note<=3.5){
    txtnote.textContent = `Student, ${Name}, you have a good grade`
  }else if(result_note>=3.4 || result_note<=2.0){
    txtnote.textContent = `Student, ${Name}, He lost his note, but he has a chance to recover it`
  }else{
    txtnote.textContent = `Student, ${Name}, has lost its matter`
  }*/
}