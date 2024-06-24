// "use client";
import { useState, useEffect } from "react";
import { AW_Settings, account, ID, database, storage, ImageGravity, ImageFormat } from "./appwrite";
import ViewPost from "./blog/viewPost";
import ViewPostThumb from "./blog/viewPostThumb";

const ListPosts = (props) => {
  // const postId = props.postId || "667533a4000fb590840f";
  const [posts, setPosts] = useState([]);
  // const [subtitle, setSubtitle] = useState("");
  // const [paragraphs, setParagraphs] = useState([]);
  // const [photos_urls, setPhotosUrls] = useState([]);
  // const [photos_hrefs, setPhotosHrefs] = useState([]);
  // const [photos_captions, setPhotosCaptions] = useState([]);
  // const [created_at, setCreatedAt] = useState(new Date());

  const fetchPosts = async () => {
    const result = await database.listDocuments(
      AW_Settings.DB, // '<DATABASE_ID>', // databaseId
      AW_Settings.blog_Collection, // '<COLLECTION_ID>', // collectionId
      [] // queries (optional)
    );
    // console.log({ result });
    // setPosts([...posts, ...result.documents]);
    // setHeading(result.heading);
    // setSubtitle(result.subtitle);
    // setParagraphs(result.paragraphs);
    // setPhotosUrls(result.photos_urls);
    // setPhotosCaptions(result.photos_captions);
    // setCreatedAt(result.created_at);
    return result;
  };

  useEffect(() => {
    fetchPosts().then((result) => {
      console.log({ asd: result.documents });
      setPosts([...posts, ...result.documents]);
    });
  }, []);

  return (
    <div className="flex flex-col self-center items-center ">
      {/* <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      {/* <div>
        <div className="text-lg">{posts}</div>{" "}
      </div> */}
      <div className="flex flex-col p-2 md:flex-row items-center overflow-y-auto max-w-7xl max-h-screen overflow-x-auto dark:bg-gray-500 dark:bg-opacity-30 rounded-md">
        {posts.map((post, index) => (
          <div key={index}>
            {/* <div className="text-base">{post.heading}</div> */}
            <ViewPostThumb postId={post.$id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPosts;
