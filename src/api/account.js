import instance from ".";

const getAllTransactions = async () => {
  try {
    const { data } = await instance.get("/api/auth/v3/transactions");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getTransaction = async (transId) => {
  try {
    const { data } = await instance.get(`/api/auth/v3/transactions/${transId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateInfo = async (noteInfo) => {
  try {
    const { data } = await instance.put(`/notes/${noteInfo._id}`, noteInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getBalance = async () => {
  try {
    const { data } = await instance.get("/api/bank/v3/balance");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllTransactions, getTransaction, updateInfo, getBalance };
