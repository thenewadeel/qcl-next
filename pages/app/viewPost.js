// "use client";
import { useState, useEffect } from "react";
import { account, ID, database, storage, ImageGravity, ImageFormat } from "./appwrite";

const ViewPost = () => {
  const postId = "667533a4000fb590840f";
  const [heading, setHeading] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [photos_urls, setPhotosUrls] = useState([]);
  const [photos_hrefs, setPhotosHrefs] = useState([]);
  const [photos_captions, setPhotosCaptions] = useState([]);
  const [created_at, setCreatedAt] = useState(new Date());

  const fetchPost = async () => {
    const result = await database.getDocument(
      "Test", // '<DATABASE_ID>', // databaseId
      "6674a0cd00056050e71e", // '<COLLECTION_ID>', // collectionId
      postId, //'<DOCUMENT_ID>', // documentId
      [] // queries (optional)
    );
    setHeading(result.heading);
    setSubtitle(result.subtitle);
    setParagraphs(result.paragraphs);
    setPhotosUrls(result.photos_urls);
    setPhotosCaptions(result.photos_captions);
    setCreatedAt(result.created_at);
    return result;
  };

  const getPhotoHrefFromId = async (id) => {
    const result = await storage.getFilePreview(
      "6674af5a0020238856ec", // '<BUCKET_ID>', // bucketId
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

  useEffect(() => {
    console.log({ photos_urls });
    // photos_urls.map((u) => {
    //   setPhotosHrefs([...photos_hrefs, getPhotoHrefFromId(u)]);
    // });
  }, []);

  return (
    <div className="flex flex-col self-center items-center border-2 border-red-600">
      {/* <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      <div>
        <div className="text-lg">{heading}</div>
        <div className="text-md">{subtitle}</div>
      </div>
      <div>
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <div className="text-base">{paragraph}</div>
          </div>
        ))}
      </div>
      <div>
        {photos_captions.map((photo_caption, index) => (
          <div key={index} className="border-2 border-red-500">
            <div className="text-lg">{photos_urls[index]}</div>
            <div className="text-lg">{photos_hrefs[index]}</div>
            <img src={photos_hrefs[index]} />
            <div className="text-base">{photo_caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPost;
