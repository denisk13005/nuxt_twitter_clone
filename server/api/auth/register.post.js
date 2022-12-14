export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const { username, email, password, repeatPassword, name } = body;
  if (!username || !email || !password || !name || !repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid Params" })
    );
  }

  return {
    body: body,
  };
});
