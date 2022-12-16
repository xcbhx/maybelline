import sendRequest from "./send-request";
const BASE_URL = '/api/makeup';

export async function getAllMakeup() {
  return sendRequest(BASE_URL);
}
