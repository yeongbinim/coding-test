const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async (keyword) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
      console.log(response);
      if (response.ok)
        return await response.json();
      else
        throw new Error("서버의 상태가 이상합니다!");
    } catch(e) {
      throw new Error(`무언가 잘못 되었습니다. ${e.message}`);
    }
  },

  // 자세히보기
  catsId: async (id) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
      if (response.ok)
        return await response.json();
      else
        throw new Error("서버의 상태가 이상합니다!");
    } catch (e) {
      throw new Error(`무언가 잘못 되었습니다. ${e.message}`);
    }

  },

  // random50 
  random50: async () => {
    try{
      const response = await fetch(`${API_ENDPOINT}/api/cats/random50`);
      if (response.ok)
        return await response.json();
      else
        throw new Error("서버의 상태가 이상합니다!");
    } catch (e) {
      throw new Error(`무언가 잘못 되었습니다. ${e.message}`);
    }
  }
};