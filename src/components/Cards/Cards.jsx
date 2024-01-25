import styles from "./Cards.module.css";
import Search from "./Search";
import Card from "./Card";

export default function Cards(props) {
  return (
    <>
      <Search onSearch={props.onSearch} />
      <div className={styles.box}>
        {/* {props.characters.map((item) => {
          return (
            <div key={item.id}>
              <Card
                id={item.id}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}
                origin={item.origin.name}
                image={item.image}
                onClose={props.onClose}
              />
            </div>
          );
        })} */}

        {props.characters.map((item)=>{
            return (
               <div key={item.id}>
                  <Card character = {item} onClose= {props.onClose}/>
               </div>
            );
         })}
      </div>
      ;
    </>
  );
}
