import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import CardContainer from "../../Components/CardContainer";
import Card from "../../Components/Card";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
  },[])
  
  console.log(items)

  return (
    <Layout>
      <CardContainer>
        {items?.map((element,key) => {
            return <Card key={key} element={element}/>
        })}
      </CardContainer>
    </Layout>
  );
}

export default Home;
