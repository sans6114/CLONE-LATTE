import { g as getAction, h as hasContentType, A as ApiContextStorage, c as callSafely, f as formContentTypes } from '../../chunks/shared_Dgvkitwq.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async (context) => {
  const { request, url } = context;
  const action = await getAction(url.pathname);
  if (!action) {
    return new Response(null, { status: 404 });
  }
  const contentType = request.headers.get("Content-Type");
  const contentLength = request.headers.get("Content-Length");
  let args;
  if (contentLength === "0") {
    args = void 0;
  } else if (contentType && hasContentType(contentType, formContentTypes)) {
    args = await request.clone().formData();
  } else if (contentType && hasContentType(contentType, ["application/json"])) {
    args = await request.clone().json();
  } else {
    return new Response(null, { status: 415 });
  }
  const result = await ApiContextStorage.run(context, () => callSafely(() => action(args)));
  if (result.error) {
    return new Response(
      JSON.stringify({
        ...result.error,
        message: result.error.message,
        stack: void 0 
      }),
      {
        status: result.error.status,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  return new Response(JSON.stringify(result.data), {
    status: result.data ? 200 : 204,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
