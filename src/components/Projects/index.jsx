import Product from "./products/Product";

// images
import ECOM from "../../assets/e-com.jpeg";
import WEATHER from "../../assets/weather.jpeg";
import CHAT from "../../assets/chat.png";
import { FaChartLine } from 'react-icons/fa';

const Project = () => {
  return (
    <>
      <h2 className="py-8 bg-slate-200 relative dark:bg-slate-900 text-4xl font-semibold text-fuchsia-600 flex items-end justify-center gap-2 after:absolute after:bottom-5 after:content-'-' after:w-64 after:h-[0.17rem] after:bg-fuchsia-500/60">
        <FaChartLine />
        My Creations
      </h2>
      <section
        id="projects"
        className="px-4 scroll-mt-36 sm:px-12 lg:px-20 py-12 bg-slate-200 dark:bg-slate-800 grid place-items-stretch gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* PROJECT-1 */}
        <Product
          image={ECOM}
          type={"e-commerce clone"}
          title={"UniShop"}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosmaiores earum quasi a possimus commodi ipsam consectetur perferendis dolorum cumque! Aliquam architecto dolorem distinctio minus."
          }
        />

        {/* PROJECT-2 */}
        <Product
          image={WEATHER}
          type={"weather app"}
          title={"Ambience Weather"}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosmaiores earum quasi a possimus commodi ipsam consectetur perferendis dolorum cumque! Aliquam architecto dolorem distinctio minus."
          }
        />

        {/* PROJECT-3 */}
        <Product
          image={CHAT}
          type={"chat app"}
          title={"Chat App"}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosmaiores earum quasi a possimus commodi ipsam consectetur perferendis dolorum cumque! Aliquam architecto dolorem distinctio minus."
          }
        />
      </section>
    </>
  );
};

export default Project;
