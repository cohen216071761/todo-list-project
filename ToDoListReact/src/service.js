import axios from 'axios';

// כתובת ה-API שלך
const apiUrl = process.env.REACT_APP_API_BASE_URL; 

console.log("API URL Loaded:", apiUrl); 

const apiService = {
  // שליפת כל המשימות (GET)
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`);
    return result.data;
  },

  // הוספת משימה חדשה (POST)
  addTask: async (name) => {
    if (!name) throw new Error("Name is required");
    const result = await axios.post(`${apiUrl}/items`, { 
      name, 
      isComplete: false 
    });
    return result.data;
  },

  // עדכון isComplete (PUT)
  setCompleted: async (id, isComplete) => {
    if (id == null) throw new Error("Id is required");
    const result = await axios.put(`${apiUrl}/items/${id}`, {
      isComplete
    });
    return result.data;
  },

  // מחיקת משימה (DELETE)
  deleteTask: async (id) => {
    if (id == null) throw new Error("Id is required");
    await axios.delete(`${apiUrl}/items/${id}`);
  }
};

export default apiService;