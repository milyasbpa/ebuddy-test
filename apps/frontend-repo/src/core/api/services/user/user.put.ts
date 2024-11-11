import axios, { AxiosError } from "axios";
import Cookies from "universal-cookie";
import { APICollectionURL } from "../../router";
import { PutUpdateUserPayloadRequestInterface } from "../../models/user";

export const fetchPutUser = async (
  payload?: PutUpdateUserPayloadRequestInterface
) => {
  try {
    // const url = `${
    //   process.env.NEXT_PUBLIC_BACKEND_API_URL
    // }${APICollectionURL.user.putUser()}`;
    const url =
      process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? `${
            process.env.NEXT_PUBLIC_BACKEND_API_URL
          }${APICollectionURL.user.putUser()}`
        : `${"http://localhost:5001"}${APICollectionURL.user.putUser()}`;

    const cookies = new Cookies();
    const token = cookies.get("token");
    const res = await axios.put(url, payload?.body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
