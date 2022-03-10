import { client } from "../../utils/shopify";
import Router from "next/router";
import { useState } from "react";
import Image from "next/image";
import { Input } from "semantic-ui-react";
import Nav from "../../Components/Nav";

<Nav />

const Post = ({ product }) => {
  const [image, setImage] = useState(product.images[0].src);

  console.log(product);
  const [quantity, setQuantity] = useState(0);
  const addToCart = async () => {
    const storage = window.localStorage;
    let checkoutId = storage.getItem("checkoutId");
    if (!checkoutId) {
      const checkout = await client.checkout.create();
      checkoutId = checkout.id;
      storage.setItem("checkoutId", checkoutId);
    }

    const cart = await client.checkout.addLineItems(checkoutId, [
      {
        variantId: product.variants[0].id,
        quantity,
      },
    ]);
    storage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  };
  return (
    <>
      <div className="promain">
        <div className="checkot">
          <div className="proimg1">
            {" "}
            <Image src={image} width="600" height="600" />
          </div>

          <div className="proimg">
            <span>
              {product.images.map((image, index) => {
                return (
                  <Image
                    onClick={() => setImage(image)}
                    src={image.src}
                    width="130"
                    height="130"
                  />
                );
              })}
            </span>
          </div>

         
        </div>
        <div className="chk">
        <h2> {product.title}</h2>
          <span>{product.description}</span>
          <Input
            action={{
              color: "teal",
              labelPosition: "left",
              icon: "cart",
              onClick: addToCart,
              content: "Add To Cart",
            }}
            onChange={(e, { value }) => setQuantity(Number(value))}
            type="number"
            actionPosition="right"
            placeholder="add"
          />
        </div>
      </div>
      <button
        onClick={() => {
          const storage = window.localStorage;
          const cart = JSON.parse(storage.getItem("cart"));
          Router.replace(cart.webUrl);
        }}
      >
        checkout demo
      </button>
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
