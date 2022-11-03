import { customAxios, baseUrl } from "./config";

class PriorityServices {
  static getPriorities = async () => {
    try {
      const result = await customAxios.get(`${baseUrl}/priorities`);
      return result.data;
    } catch (error) {
      throw error.response.data;
    }
  };
}

export default PriorityServices;
