import styles from './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx'


const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'toto@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      else{
         alert("Email o contraseña incorrectos!")
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !== Number(id))
         setCharacters(charactersFiltered)
   }

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
}

   return (
      <div className={styles.App}>
         {
            location.pathname !== '/'
            ?  <Nav onSearch={onSearch}/>
            : null
         }
            <Routes>
               <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
               <Route path="/about" element={<About/>} />
               <Route path="/detail/:id" element={<Detail/>} />
               <Route path='/' element={<Form login={login} />} />
            </Routes>
      </div>

   );
}

export default App;
