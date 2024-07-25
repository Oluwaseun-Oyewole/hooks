export const deliverMessage = async (message: string) => {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
};
