const Gallery = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50 px-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Explore Our Gallery
      </h2>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://i.ibb.co/YBFXCVD/kaligunin-5.jpg"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/tbdg1g5/shihoron-2.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/MZ7XqXt/c-i-d-oritro-4.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/SxpB2s1/juge.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/pZNg2GL/proelika.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/JvnQY1Q/subham-samagra-1.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/mhsSLq4/sudhu-bish.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/DwrcJT9/big1-1964927-1.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/JHY4v5g/big1-2754078-1.jpg"
        />
        <img
          src="https://i.ibb.co/pLHFn14/banglar-tantra.jpg"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
};

export default Gallery;
