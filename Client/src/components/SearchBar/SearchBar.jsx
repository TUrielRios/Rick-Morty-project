import { useState } from "react";
import styles from './searchBar.module.css'

export default function SearchBar(props) {
   const [id, setId] = useState("");
   const handleChange = (event)=>{
      setId(event.target.value);
   }
   const handleSearch = () => {
      props.onSearch(id);
    };
   return (
      <div className={styles.searchContainer}>
         <input className={styles.searchInput} type="text" value={id} onChange={handleChange} />
         <button className={styles.searchButton} onClick={handleSearch}>Agregar</button>
      </div>
   );
}
