import Head from "next/head";
import { client } from "../utils/shopify";
import Link from "next/link";
import Image from "next/image";


function index({ products }) {
  console.log({ products });
  return (
    <>
      <Head>
        <title>Usman Branding</title>
        <meta name="description" content="maniwebdev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {products?.map((product) => {
          return (
            <>
              <div>
                <Image src={product.images[0].src} width="200" height="200" />
              </div>
              <Link key={product.id} href={`/product/${product.id}`}>
              <p>{product.title}</p>
              </Link>
            </>
          );
        })}
    Shopify development
      </div>
      <div className="latest"><h2>Our Latest Products</h2></div>
    </>
  );
}

export default index;

export async function getServerSideProps() {

  const products = await client.product.fetchAll();
  
  console.log({ products });

  
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
