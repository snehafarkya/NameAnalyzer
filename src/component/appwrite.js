import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6522b4c69f6fc61c4f5f');

const databases = new Databases(client);

const promise = databases.createDocument(
    '6522b5ccaf2251170a66',
    '6522b5eca4f169504281',
    ID.unique(),
    { "firstname": "Sneha" ,
  "lastname":"Farkya"}
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
