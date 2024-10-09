import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Todolist(){
  const[lista, setLista] = userState([]);
  const[novoItem, setNovoItem] = userState([]);

  function adiciona(form){

    form.preventDefault();
    if(!novoItem){
      return
    }
      setLista([...lista,{Text: novoItem,isCompleted: false}]);
      setLista(newLista);
      setNovoItem("");
      document.getElementById("input-entrada").focus();
  }
  
}
