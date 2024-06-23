// "use client";
import { useState } from "react";
import { AW_Settings, account, ID, database, storage } from "../appwrite";

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
  // const logout = async () => {
  //   await account.deleteSession("current");
  //   setLoggedInUser(null);
  // };

  // if (loggedInUser) {
  //   return (
  //     <div>
  //       <p>Logged in as {loggedInUser.name}</p>
  //       <button type="button" onClick={logout}>
  //         Logout
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col self-center items-center border-2 border-red-600">
      <form>
        {/* <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
        <div>
          <input type="text" placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} />
          <input type="text" placeholder="Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
        </div>
        <div>
          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              <input
                type="textarea"
                placeholder="Paragraph"
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
            onClick={() => {
              setParagraphs([...paragraphs, ""]);
            }}
          >
            + Add New Paragraph
          </button>
        </div>
        <div>
          {photos_captions.map((photo_caption, index) => (
            <div key={index}>
              qqq
              <input type="file" id={"uploader" + index} onChange={(e) => submitPhotos(e.target.files)} />
              <input
                type="text"
                placeholder="photo_caption"
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
            onClick={() => {
              setPhotosCaptions([...photos_captions, ""]);
            }}
          >
            + Add New Photo
          </button>
        </div>
        <button type="button" onClick={submitPost}>
          Make the Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
