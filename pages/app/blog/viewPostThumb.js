// "use client";
import { useState, useEffect } from "react";
import { AW_Settings, account, ID, database, storage, ImageGravity, ImageFormat } from "../appwrite";
import Link from "next/link";

const ViewPostThumb = (props) => {
  const postId = props.postId || "667533a4000fb590840f";
  const [heading, setHeading] = useState("");
  const [subtitle, setSubtitle] = useState("");
  // const [paragraphs, setParagraphs] = useState([]);
  const [photos_urls, setPhotosUrls] = useState([]);
  const [photos_hrefs, setPhotosHrefs] = useState([]);
  // const [photos_captions, setPhotosCaptions] = useState([]);
  const [created_at, setCreatedAt] = useState(new Date());

  const fetchPost = async () => {
    const result = await database.getDocument(
      AW_Settings.DB, // '<DATABASE_ID>', // databaseId
      AW_Settings.blog_Collection, // '<COLLECTION_ID>', // collectionId
      postId, //'<DOCUMENT_ID>', // documentId
      [] // queries (optional)
    );
    console.log({ result });
    setHeading(result.heading);
    setSubtitle(result.subtitle);
    // setParagraphs(result.paragraphs);
    setPhotosUrls(result.photos_urls);
    // setPhotosCaptions(result.photos_captions);
    setCreatedAt(result.created_at);
    return result;
  };

  const getPhotoHrefFromId = async (id) => {
    const result = await storage.getFilePreview(
      AW_Settings.blog_Bucket, // '<BUCKET_ID>', // bucketId
      id // '<FILE_ID>' // fileId
      // 0, // width (optional)
      // 0, // height (optional)
      // ImageGravity.Center, // gravity (optional)
      // 0, // quality (optional)
      // 0, // borderWidth (optional)
      // "", // borderColor (optional)
      // 0, // borderRadius (optional)
      // 0, // opacity (optional)
      // -360, // rotation (optional)
      // "", // background (optional)
      // ImageFormat.Jpg // output (optional)
    );
    // setPhotosHrefs([...photos_hrefs, result.href]);
    return result;
  };
  useEffect(() => {
    fetchPost().then((result) => {
      const photoPromises = result.photos_urls.map((u) => {
        return getPhotoHrefFromId(u);
      });
      Promise.all(photoPromises).then((hrefs) => {
        const allHrefs = hrefs.map((x) => x.href);
        setPhotosHrefs([...photos_hrefs, ...allHrefs]);
      });
    });
  }, []);

  return (
    <Link href={`/app/blog/${postId}`} className="">
      <div className="cursor-pointer  overflow-hidden group max-w-120 min-w-[264px]  rounded-lg m-4 bg-slate-100 dark:bg-red-950 dark:bg-opacity-20 dark:hover:bg-opacity-80  hover:shadow-md dark:shadow-gray-500">
        <div className="relative overflow-hidden">
          <img
            src={photos_hrefs[0]}
            alt={heading}
            className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
          />
          <div className="px-4 py-2.5 text-white dark:text-gray-100 text-sm tracking-wider bg-red-800 absolute bottom-0 right-0">
            {new Date(created_at).toDateString()}{" "}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#333] dark:text-gray-100">{heading}</h3>
          <button
            type="button"
            className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-red-800 hover:bg-red-950"
          >
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ViewPostThumb;
