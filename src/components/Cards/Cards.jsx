import { DivList } from './styledCards';
import Card from './Card';

export default function Cards({characters, onClose}) {
   return <DivList>
      {characters.map((item)=>{
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
                  onClose={onClose}
               />
            </div>
         );
      })}

      {/* {characters.map((item)=>{

         return (
            <div key={item.id}>
               <Card character = {item}/>
            </div>
         );
      })} */}
   </DivList>;
}

