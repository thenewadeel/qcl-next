import { Client, Account, Databases, Storage } from "appwrite";

export const AW_Settings = {
  projectID: "6674379f002aa0bd9ef2",
  endpoint: "https://cloud.appwrite.io/v1",
  project: "6674379f002aa0bd9ef2",
  DB: "Test",
  blog_Collection: "6674a0cd00056050e71e",
  blog_Bucket: "6674af5a0020238856ec",
};
export const client = new Client();

client.setEndpoint(AW_Settings.endpoint).setProject(AW_Settings.project); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";

export const database = new Databases(client);

export const storage = new Storage(client);
// You then use the imported type definitions like this
// const authUser = await account.createEmailPasswordSession(email, password);

const appwrite = () => {
  return <div className="flex flex-col self-center items-center border-2 border-red-600"></div>;
};

export default appwrite;
