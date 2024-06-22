import { Client, Account, Databases, Storage } from "appwrite";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6674379f002aa0bd9ef2"); // Replace with your project ID

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
