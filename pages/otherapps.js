import { useState, useEffect } from "react";
import Images from "../components/Images";
import { motion } from "framer-motion";

export default function GetImages() {
  const [images, setImages] = useState([]);
  const key = process.env.NEXT_PUBLIC_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=dsPFwwWNSKMn6Ql99pJKvhXt9h3fretsCfXrA0USSwo`
      );
      const data = await response.json();
      console.log(data);
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="container  py-32 mx-auto  px-5 z-0 2xl:px-0">
        {!images ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <motion.section
            className="grid grid-cols-1 gap-5 md:grid-cols-2 laptop:grid-cols-3 pb-20 lg:container "
            animate={{ x: 0 }}
            initial={{ x: 300 }}
          >
            {images.map((image) => (
              <Images key={image.id} {...image} />
            ))}
          </motion.section>
        )}
      </div>
    </>
  );
}
