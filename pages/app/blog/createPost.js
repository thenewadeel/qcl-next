// "use client";
import { useState } from "react";
import { AW_Settings, account, ID, database, storage } from "../appwrite";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import SectionTitle from "../../../components/sectionTitle";

const CreatePost = () => {
  const [heading, setHeading] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [photos_urls, setPhotosUrls] = useState([]);
  const [photos_captions, setPhotosCaptions] = useState([]);
  const [created_at, setCreatedAt] = useState(new Date());

  const submitPost = async () => {
    const result = await database.createDocument(
      AW_Settings.DB, // '<DATABASE_ID>', // databaseId
      AW_Settings.blog_Collection, // '<COLLECTION_ID>', // collectionId
      ID.unique(), //'<DOCUMENT_ID>', // documentId
      { heading, subtitle, paragraphs, photos_urls, photos_captions, created_at } // data
      // ["read("any")"] // permissions (optional)
    );

    console.log(result);
  };

  const submitPhotos = async (files) => {
    const result = await storage.createFile(
      AW_Settings.blog_Bucket, //'<BUCKET_ID>', // bucketId
      ID.unique(), //'<FILE_ID>', // fileId
      files[0] // file
      // ["read("any")"] // permissions (optional)
    );

    console.log({ result }, { id: result.$id });
    setPhotosUrls([...photos_urls, result.$id]);
  };

  return (
    <div className="w-full self-center flex flex-col">
      <Head>
        <title>Quetta Club Limited</title>
        <meta name="description" content="Quetta Club Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col self-center items-center mt-12 p-2 px-4 bg-sky-500 bg-opacity-5">
        <SectionTitle pretitle="Blog Events" title="Add New"></SectionTitle>

        <form className="flex flex-col ">
          <div>
            <div>
              <label className="text-sm mb-2 block">Heading / Title</label>
              <div className="relative flex items-center">
                <input
                  name="heading"
                  required
                  className="bg-slate-200 placeholder:text-gray-600 px-2 py-3  w-full text-sm border-b-4 focus:border-red-700 outline-none rounded-md transition-all duration-500 dark:text-black"
                  type="text"
                  placeholder="Heading"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
                {/* <UserIcon className="w-4 h-4 absolute right-4 fill-gray-500" /> */}
              </div>
            </div>
            <div>
              <label className="text-sm mb-2 block">Sub-title</label>
              <div className="relative flex items-center">
                <input
                  name="subtitle"
                  required
                  className="bg-slate-200 placeholder:text-gray-600 px-2 py-3  w-full text-sm border-b-4 focus:border-red-700 outline-none rounded-md transition-all duration-500 dark:text-black"
                  type="text"
                  placeholder="Subtitle"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
                {/* <UserIcon className="w-4 h-4 absolute right-4 fill-gray-500" /> */}
              </div>
            </div>
          </div>
          <div>
            <label className="text-sm mt-4 block">Paragraphs:</label>
            {paragraphs.map((paragraph, index) => (
              <div key={index}>
                <textarea
                  placeholder="Paragraph"
                  className="m-2 bg-slate-200 placeholder:text-gray-600 px-2 py-3   text-sm border-b-4 focus:border-red-700 outline-none rounded-md transition-all duration-500 dark:text-black"
                  value={paragraph}
                  onChange={(e) => {
                    const newParagraphs = [...paragraphs];
                    newParagraphs[index] = e.target.value;
                    setParagraphs(newParagraphs);
                  }}
                />
              </div>
            ))}
            <button
              type="button"
              className="m-4 p-2 rounded-md bg-slate-800 text-white   shadow-gray-950   dark:bg-red-900 dark:text-gray-200 font-bold transition-all duration-500"
              onClick={() => {
                setParagraphs([...paragraphs, ""]);
              }}
            >
              + Add New Paragraph
            </button>
          </div>
          <div className="m-2">
            <label className="text-sm mt-4 block">Photos:</label>
            {photos_captions.map((photo_caption, index) => (
              <div key={index}>
                <input type="file" id={"uploader" + index} onChange={(e) => submitPhotos(e.target.files)} />
                <input
                  type="text"
                  placeholder="photo_caption"
                  className="bg-slate-200 placeholder:text-gray-600 px-2 py-3  w-full text-sm border-b-4 focus:border-red-700 outline-none rounded-md transition-all duration-500 dark:text-black"
                  value={photo_caption}
                  onChange={(e) => {
                    const newPhotosCaptions = [...photos_captions];
                    newPhotosCaptions[index] = e.target.value;
                    setPhotosCaptions(newPhotosCaptions);
                  }}
                />
              </div>
            ))}
            <button
              type="button"
              className="m-4 p-2 rounded-md bg-slate-800 text-white   shadow-gray-950   dark:bg-red-900 dark:text-gray-200 font-bold transition-all duration-500"
              onClick={() => {
                setPhotosCaptions([...photos_captions, ""]);
              }}
            >
              + Add New Photo
            </button>
          </div>
          <button
            type="button"
            onClick={submitPost}
            className="mt-4 px-6 py-2 rounded-md p-2 shadow-md bg-red-800 text-white dark:shadow-none hover:shadow-none dark:hover:shadow-md shadow-gray-950 dark:hover:shadow-slate-500 dark:shadow-sky-200 dark:bg-red-900 dark:text-gray-200 font-bold transition-all duration-500"
          >
            Make the Post
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
