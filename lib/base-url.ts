import { getBaseUrl } from "./secrets";

export const baseUrl = getBaseUrl().baseUrl as string || 'http://localhost:3000'