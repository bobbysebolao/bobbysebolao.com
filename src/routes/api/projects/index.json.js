import { api } from "../_api";

// GET /projects.json
export const get = async (request) => {
  const response = await api(request, `projects`);

  if (response.status === 404) {
    /* if there are no projects, start with an empty array */
    return { body: [] };
  }

  return response;
};

// // POST /todos.json
// export const post = async (request) => {
//   const response = await api(request, `todos/${request.locals.userid}`, {
//     // because index.svelte posts a FormData object,
//     // request.body is _also_ a (readonly) FormData
//     // object, which allows us to get form data
//     // with the `body.get(key)` method
//     text: request.body.get("text"),
//   });

//   return response;
// };
