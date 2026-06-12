import React, { useState } from 'react'; 
import { FixedSizeList as List } from 'react-window'; 
import './App.css'; 
 
const UserItem = React.memo(function UserItem({ user }) { 
  return <div className="item">{user}</div>; 
}); 
 
function Row({ index, style, data }) { 
  return ( 
    <div style={style}> 
      <UserItem user={data[index]} /> 
    </div> 
  ); 
} 
 
function App() { 
  const initialUsers = Array.from( 
    { length: 1500 }, 
    (_, index) => `Usuário ${index + 1}` 
  ); 
 
  const [users, setUsers] = useState(initialUsers); 
  const [newUser, setNewUser] = useState(''); 
 
  function addUser() { 
    if (newUser.trim() === '') return; 
    setUsers([...users, newUser.trim()]); 
    setNewUser(''); 
  } 
 
  return ( 
    <main className="container"> 
      <h1>Lista de Usuários Otimizada</h1> 
      <p>Total de usuários: {users.length}</p> 
 
      <section className="formulario"> 
        <input 
          value={newUser} 
          onChange={(event) => setNewUser(event.target.value)} 
          placeholder="Digite um nome" 
        /> 
        <button onClick={addUser}>Adicionar</button> 
      </section> 
 
      <section className="lista-area"> 
        <List 
          height={350} 
          itemCount={users.length} 
          itemSize={42} 
          width="100%" 
          itemData={users} 
        > 
          {Row} 
        </List> 
      </section> 
 
      <section className="imagem-area"> 
        <h2>Imagem com Lazy Loading</h2> 
        <img 
          src="https://picsum.photos/900/500?random=1" 
          alt="Imagem de exemplo" 
          loading="lazy" 
          width="900" 
          height="500" 
        /> 
      </section> 
    </main> 
  ); 
} 
 
export default App; 