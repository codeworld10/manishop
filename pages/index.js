import Head from "next/head";
import { client } from "../utils/shopify";
import Link from "next/link";
import Image from "next/image";
import Nav from "../Components/Nav";

function index({ products }) {
  console.log({ products });
  return (
    <>
      <Nav />
      <Head>
        <title>Usman Branding</title>
        <meta name="description" content="maniwebdev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
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

      <div className="latest">
        <h2>Our Latest Products</h2>
      </div>
    </>
  );
}

export default index;

export async function getServerSideProps() {
  const products = await client.product.fetchAll();

  console.log({ products });

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
