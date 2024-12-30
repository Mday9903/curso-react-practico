import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import CardContainer from "../../Components/CardContainer";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setItems(data);
      } catch(error) {
        console.error("Ha ocurrido un problema: " + error)
      }
    }
      fetchData()
  },[])
  
  // console.log(items)

  return (
    <Layout>
      <CardContainer>
        {items?.map((element,key) => {
            return <Card key={key} element={element}/>
        })}
      </CardContainer>
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
