import axios from "axios";

export const getImages = async (searchTerm = "technology") => {
    return await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
          Authorization: "563492ad6f91700001000001d4f57b3433ad459b842bbf8ef0d72052",
        },
      });
}
  