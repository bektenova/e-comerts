import ProductCardDes from "./ProductCardDes";
import ProductCardMob from "./ProductCardMob";

export default function ProductCard({ product }) {
  return (
    <>
      <ProductCardMob product={product} />
      <ProductCardDes product={product} />
    </>
  );
}
