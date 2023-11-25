import React, {useState} from "react";
import data from "./data";
import { RiDeleteBack2Fill } from "react-icons/ri";

const App = () => {
  const [people, setPeople] = useState(data)
  const removeAppuntamento = (id) => {
    setPeople(people.filter(el => el.id !== id))
    console.log("rimosso");
  }
  const ricaricaLista = () => {
    setPeople(data)
  }
  const eliminaLista = () => {
    setPeople([])
  }
  
  if(people.length !== 0){
    return (
      <>
      <div className="container">
        <h2>Lista post</h2>
        <div className="people-list">
        <Elenco people={people} removeAppuntamento={removeAppuntamento}/>
        </div>
      <div className="btn-group">
        <button type="button" className="btn btn-reset" onClick={ricaricaLista}>Ricarica</button>
        <button type="button" className="btn btn-delete" onClick={eliminaLista}>Elimina tutto</button>
      </div>
      </div>
      </>
    )
  }
  else{
    return (
      <>
      <div className="container">
        <h2>Nessun post</h2>
        <div className="btn-group">
        <button type="button" className="btn btn-reset" onClick={ricaricaLista}>Ricarica</button>
      </div>
      </div>
      </>
    )
  }
}
  

const Elenco = ({people, removeAppuntamento}) => {
  return (
    <ul className="user-list">
      {people.map((el, id)=> {
        return <Persona key={el.id} {...el} removeAppuntamento={removeAppuntamento} />
      })}  
    </ul>
  )
}

const Persona = ({id, nome, img, stato, removeAppuntamento}) => {
  return (
    <article>
      <img src={img} alt="prs" className="person-img" />  
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4> 
          <button type="button" className="btn" onClick={()=> removeAppuntamento(id)}>
            {" "}<RiDeleteBack2Fill className="icon" />{" "}
          </button>
        </div>
      <p>{stato}</p>
      </div>
    </article>
  )
}

export default App;
