import { fetchGraphQL } from "./api";
export async function getAllHobbies(preview) {
  const entries = await fetchGraphQL(
    `query {
        hobbyCollection(preview:false) {
          items {
            ner
          }
        }
      }`,
    preview
  );
  return extractHobbyEntries(entries);
}

function extractHobbyEntries(fetchResponse) {
  return fetchResponse?.data?.hobbyCollection?.items;
}
