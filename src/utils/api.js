import axios from "axios";

const apiUrl = "https://3a63208b7cfa.ngrok.io/api/";

const apiRequest = axios.create({
  baseURL: apiUrl,
});

// 首頁Banner
export const getHomepage = () => apiRequest.get(`/homepage`);
// 展覽類別
export const getEventsCategories = () => apiRequest.get(`/event-categories`);
// 類別資料
export const getEvents = (param) => apiRequest.get(`/events/${param}`);
// 資料內頁
export const getEvent = (param) => apiRequest.get(`/event/${param}`);
