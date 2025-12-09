import api from "./api";

export const getAgentBonuses = async (pageNumber = 1) => {
  try {
    const response = await api.get(`/partner/bonuses?pageNumber=${pageNumber}`);
    return response.data;
  } catch (error) {
    // Error is already handled by interceptor with toast notification
    throw error;
  }
};

export const getAgentData = async (agentId) => {
  try {
    const response = await api.get(`/partner/agents/${agentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAgent = async (data) => {
  try {
    const response = await api.post("/partner/agents", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
