import { DivBox, DivButton, DivName, DivStatus, DivSpecies, DivGender, DivOrigin } from "./styledCard";

export default function Card(props) {
   const {id, name, status, species,gender, origin, image, onClose} = props;
   return (
      <DivBox>
         <DivButton onClick={()=>onClose(id)}>X</DivButton>
         <img src={image} alt='Foto' />
         <DivName>{name}</DivName>
         <DivStatus>{status}</DivStatus>
         <DivOrigin>{origin}</DivOrigin>
         <DivSpecies><p>{species}</p></DivSpecies>
         <DivGender><p>{gender}</p></DivGender>
      </DivBox>
   );
}
