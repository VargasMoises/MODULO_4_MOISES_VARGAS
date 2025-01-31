import React from 'react';
import Titulo from './Title';
import Image from './Image';
import Details from './Details';

  function CharacterCard(props) {
    
    return (
      <div>
        <Titulo title={props.name}/>
        <Image url={props.image} />
        <Details 
          genre={props.genre} 
          status={props.status} 
        />
      </div>
    );
  }

  export default CharacterCard;