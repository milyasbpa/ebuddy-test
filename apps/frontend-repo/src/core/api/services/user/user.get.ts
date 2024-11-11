import axios, { AxiosError } from "axios";
import Cookies from "universal-cookie";
import { APICollectionURL } from "../../router";

export const fetchGetUser = async () => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_BACKEND_API_URL
    }${APICollectionURL.user.getUser()}`;

    const cookies = new Cookies();
    const token = cookies.get("token");
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
