const Product = ({ image, type, title, description }) => {
  return (
    <article className="transition p-4 shadow-md rounded-2xl max-w-sm mx-auto bg-gradient-to-br from-stone-100 to-neutral-200 dark:from-slate-700 dark:to-slate-800 hover:shadow-xl hover:shadow-slate-300 dark:hover:shadow-zinc-900">
      {/* image */}
      <div className="rounded-xl overflow-hidden">
        <a href="#" className="">
          <img
            src={image}
            className=" hover:scale-105 transition-transform ease-in-out"
            alt={title}
          />
        </a>
      </div>
      {/* image-end */}
      {/* description */}
      <div className=" mt-3 ">
        <p className="text-md font-semibold mb-2 text-violet-500 dark:text-violet-300 uppercase">
          {type}
        </p>
        <a
          href="#"
          className="text-2xl mb-2 text-zinc-800 dark:text-zinc-200 font-bold md:text-4xl"
        >
          {title}
        </a>
        <p className="text-md text-gray-800 dark:text-gray-400">
          {description}
        </p>
      </div>
      {/* description-end */}
    </article>
  );
};

export default Product;
