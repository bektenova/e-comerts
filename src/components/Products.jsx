import ProductCard from "@/components/ProductCard/ProductCard";
import Foto1 from "@/assets/foto1.png";
import foto2 from "@/assets/foto2.png";
import foto3 from "@/assets/foto3.png";
import foto4 from "@/assets/foto4.png";
import foto5 from "@/assets/foto5.png";
import foto6 from "@/assets/foto6.png";
import foto7 from "@/assets/foto7.png";
import foto8 from "@/assets/foto8.png";
import { notFound } from "next/navigation";

const products = [
  {
    id: 1,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Foto1,
  },
  {
    id: 2,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: foto2,
  },
  ,
  {
    id: 3,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: foto3,
  },
  ,
  {
    id: 4,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: foto4,
  },
  ,
  {
    id: 5,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: foto5,
  },
  ,
  {
    id: 6,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: foto6,
  },
  ,
  {
    id: 7,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: foto7,
  },
  {
    id: 8,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: foto8,
  },
];

const Products = async () => {
  if (!products) return notFound();

  return (
    <section className="tw-px-9  md:tw-px-36 tw-flex tw-flex-col md:tw-gap-y-8 md:tw-pt-[100px]">
      <div className="tw-text-center ">
        <p className="tw-pt-48 tw-pb-3 tw-text-[#737373]">Featured Products</p>
        <h2 className="tw-pb-3">
          BESTSELLER <br /> PRODUCTS
        </h2>
        <p className="tw-pb-5  tw-text-[#737373]">
          Problems trying to resolve the <br /> conflict between{" "}
        </p>
      </div>

      <div className="tw-px-10 tw-flex tw-flex-row tw-flex-wrap md:tw-gap-y-20  ">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};
export default Products;
