// "use client";
import { useState } from "react";
import { account, ID, database } from "./appwrite";

const CreatePost = () => {
  const [heading, setHeading] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [photos_urls, setPhotosUrls] = useState([]);
  const [photos_captions, setPhotosCaptions] = useState([]);
  const [created_at, setCreatedAt] = useState(new Date());

  const submitPost = async () => {
    const result = await database.createDocument(
      "Test", // '<DATABASE_ID>', // databaseId
      "6674a0cd00056050e71e", // '<COLLECTION_ID>', // collectionId
      ID.unique(), //'<DOCUMENT_ID>', // documentId
      { heading, subtitle, paragraphs, photos_urls, photos_captions, created_at } // data
      // ["read("any")"] // permissions (optional)
    );

    console.log(result);
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
    <div>
      <form>
        {/* <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
        <input type="text" placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} />
        <input type="text" placeholder="Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
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

        {photos_captions.map((photo_caption, index) => (
          <div key={index}>
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
          + Add New Caption
        </button>

        <button type="button" onClick={submitPost}>
          Make the Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
