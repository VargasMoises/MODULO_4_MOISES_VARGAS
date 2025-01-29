import React from "react";
import Title from "./componentes/titulo";
import Image from "./componentes/imagen";
import Details from "./componentes/details";


function App() {
  return (
    <div>
      <Title
        title={"ryky"}
      />
      <Image
        url={'./images.jpg'} 
      />
      <Details
        genre={"masculino"} 
        status={"activo"} 
      />
    </div>
  );
}

export default App;