import { useState } from "react";

const BookDetails = () => {
  const [read, setRead] = useState(false);

  const handelRead = () => {
    setRead(!read);
  };
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="Les Paul"
              src="https://i.ibb.co/YBFXCVD/kaligunin-5.jpg"
            />
          </div>

          <div className="sticky top-0">
            <div className="mt-8">
              <h1 className="text-xl font-bold sm:text-2xl">
                সর্বংস্বহা কালীগুনীন
              </h1>

              <div className="-ms-0.5 flex">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* Rating stars SVG code */}
                </svg>
              </div>
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                <p>
                  গুরুভার ডালা খুলে একটা জীর্ণ গুটানো কাগজ বের করে মেলে ধরলো
                  সামনে। মুখে বললো, "এই ঠাকুরঘর বোধহয় একটা ধোঁকার টাটি মাত্র,
                  নাহলে উঠানে মন্দির থাকতে কেউ ঘরে একই বিগ্রহ রাখে সচরাচর?"
                  কাগজের হাতের লেখা অতি প্রাচীন না হলেও অন্ততঃ এক পুরুষ আগের তো
                  বটেই। ইন্দ্র একবার তোরঙ্গটা দেখে নিয়ে কইলো, "আমি ছেলেবেলায়
                  এই তোরঙ্গ আমাদের বাড়িতেই দেখেচি।
                  <button className="font-bold ml-1" onClick={handelRead}>Read More..</button> <br />
                  {read && (
                    <>
                      খুড়ো নিয়ে এসেচিলেন হয়তো। বাবার মুখে শুনেচি, এতে তাঁর
                      ঠাকুরদার লেখা কিছু একটা রয়েচে, যে জিনিস নাকি যুগযুগান্ত
                      ধরে বংশ পরম্পরায় আমাদের পরিবারে কয়েক পুরুষ বাদ দিয়ে
                      দিয়ে নতুন করে লেখা হয়ে আসচে। এতে কি লেখা রয়েচে ঠাকুর?
                      কালীপদ কাগজটা মেলে ধরলো আমাদের দিকে। হলদে হয়ে আসা কাগজে
                      ঘন কালো অক্ষরে লেখা রয়েচে একটা হেঁয়ালি ধরণের কিছু -- কে
                      সবকিছু লয়ে দানিলেন ঘোষে, বুকে তার সুষুপ্ত ধ্বংস সরোষে।
                      জ্বলে চোখ বিভীষণ, দেখে রবি-চাঁদ, পঞ্চানন মাল্য হতে এক
                      মুন্ড বাদ, বাকি চার রক্ষা পায় অমরের বনে, অগ্নিদেবের
                      চরণখানি চলিবে যেই ক্ষণে, চৌকাঠেতে চাবিকাঠি, উদ্ধারিবে তা,
                      করিবে স্থাপন তারে দেখতে ভালো যা, সে মালার সিংহভাগ আসে
                      করতলে, অংশগ্রহণ করে ভূমি রসাতলে। পড়া লিখা অক্ষরের কোনো
                      দাম নাই, কানেতে শুনিবে যাহা সত্য হয় তাই। চতুরঙ্গ শুদ্ধ
                      কেহ দন্ডাইবে দ্বারে, খুলিবে তবেই বাধা এক ফুৎকারে।
                    </>
                  )}
                </p>
              </div>
              {/* The "Read More" button to navigate to the book details page */}

              <p className="text-sm mb-2">Author: Tony Wayne</p>
              <p className="text-sm mb-2">Genre: Fiction, Mystery</p>
              <p className="text-sm mb-2">Publication Date: July 23, 2023</p>

              {/* Reviews section goes here */}
              {/* Add your code to display reviews here */}

              <div className="mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium mr-2">
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md text-sm font-medium">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
