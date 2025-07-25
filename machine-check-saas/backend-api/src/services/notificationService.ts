import axios from "axios";

export const sendFCMNotification = async (token: string, title: string, body: string) => {
  const serverKey = process.env.FCM_SERVER_KEY;
  const payload = {
    to: token,
    notification: {
      title,
      body,
    },
  };
  try {
    const response = await axios.post("https://fcm.googleapis.com/fcm/send", payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `key=${serverKey}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
