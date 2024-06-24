// "use client";
import { useState, useEffect } from "react";
import { AW_Settings, account, ID, database, storage, ImageGravity, ImageFormat } from "../appwrite";
import SectionTitle from "../../../components/sectionTitle";

const ViewPost = (props) => {
  let maxIndex;
  const postId = props.postId || "667533a4000fb590840f";
  const [heading, setHeading] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [photos_urls, setPhotosUrls] = useState([]);
  const [photos_hrefs, setPhotosHrefs] = useState([]);
  const [photos_captions, setPhotosCaptions] = useState([]);
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
    setParagraphs(result.paragraphs);
    setPhotosUrls(result.photos_urls);
    setPhotosCaptions(result.photos_captions);
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
    <div
      name=""
      className="m-4 mt-14 border-t-8 border-l-8  border-red-50 dark:border-red-950 container rounded-lg p-2 xl:px-0 bg-slate-200 bg-opacity-5 shadow-lg self-center pb-20"
    >
      <SectionTitle pretitle={subtitle} title={heading}>
        {new Date(created_at).toDateString()}
      </SectionTitle>
      <div className="flex flex-col items-center ">
        <div>
          {photos_hrefs.map((photo_href, index) => (
            <div key={index} className={`${index % 2 === 0 ? "text-" : "text-"}`}>
              {paragraphs[index] && (
                <div className=" flex flex-col items-center rounded-lg shadow-lg p-8 max-w-6xl mx-auto font-[sans-serif] text-xl/loose font-bold text-gray-800 dark:text-gray-200 my-20 text-justify drop indent-12">
                  {paragraphs[index]}
                </div>
              )}
              {photos_hrefs[index] && (
                // <div className={`${index % 2 === 0 ? "text-" : "text-"}`}>
                <div className="flex flex-col rounded-lg shadow-lg  shadow-gray-200 p-4 max-w-3xl mx-8 bg-slate-200 bg-opacity-5 self-center ">
                  <img
                    src={photos_hrefs[index]}
                    className={`${index % 2 === 0 ? "float-right" : "float-left"}` + "  "}
                  />
                  {photos_captions[index] && (
                    <div className=" py-2 text-lg text-center bg-zinc-200  text-slate-950 font-bold rounded-md m-4 shadow-inner shadow-slate-400 px-14">
                      {photos_captions[index]}
                    </div>
                  )}
                </div>
                // </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
