import Head from "next/head";
import { client } from "../utils/shopify";
import Link from "next/link";
import Image from "next/image";
import Nav from "../Components/Nav";

function index({ products }) {
  console.log({ products });
  return (
    <>
    <Head>
    <title>Usman Branding</title>
  <meta charSet="UTF-8"/>
  <meta name="description" content="maniwebdev"/>
  <meta name="keywords" content="maniwebdev"/>
  <meta name="author" content="Muhammad Usman"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</Head>
      <Nav />
    
      <>
      
      <div className="latest">
        <h2>Our Latest Products</h2>
      </div>
      <div className="dvv">
        {products?.map((product) => {
          return (
            <div className="hmain1">
              <div className="imgcn">
              <div className="hmain">
                <Image src={product.images[0].src} width="200" height="200" />
              </div>
              </div>
              <Link key={product.id} href={`/product/${product.id}`}>
                <h5 className="nami">{product.title}</h5>
              </Link>
            </div>
          );
        })}
        </div>

      </>

     
    </>
  );
}

export default index;

export async function getServerSideProps() {
  const products = await client.product.fetchAll();

  console.log({ products });

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
