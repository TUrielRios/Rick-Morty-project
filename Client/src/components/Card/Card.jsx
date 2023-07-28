import { Link } from "react-router-dom";
import styles from './card.module.css';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   const onCloseClick = () => {
      onClose(id);
      };
   return (
      <div className={styles.card}>
         <button className={styles.closeButton} onClick={() => onClose(id)}>X</button>
         <h2 className={styles.id}>{id}</h2>
         <Link to={`/detail/${id}`} className={styles.link}>
         <h2 className={styles.name}>{name}</h2>
         </Link>
         <h2 className={styles.status}>{status}</h2>
         <h2 className={styles.species}>{species}</h2>
         <h2 className={styles.gender}>{gender}</h2>
         <h2 className={styles.origin}>{origin}</h2>
         <img src={image} alt='' className={styles.image} />
      </div>
   );
}
