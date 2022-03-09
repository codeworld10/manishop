import { client } from "../../utils/shopify";

import { useState } from "react";
import Image from "next/image";

const Post = ({ product }) => {
  const [image, setImage] = useState(product.images[0].src);

  console.log(product);
  return (
    <>
      <div className="promain">
        <div className="checkot">
         <div className="proimg1"> <Image  src={image} width="400" height="400" /></div>

          <div className="proimg"><span>
            {product.images.map((image, index) => {
              return (
                <Image
                  onClick={() => setImage(image)}
                  src={image.src}
                  width="100"
                  height="100"
                />
              );
            })}
            </span>
          </div>

          <p> {product.title}</p>
          <span>{product.description}</span>
         
        </div>
        <div className="chk">000</div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const productId = query.productId[0];
  console.log(productId);
  const product = await client.product.fetch(productId);
  console.log({ product });

  return { props: { product: JSON.parse(JSON.stringify(product)) } };
}
export default Post;
