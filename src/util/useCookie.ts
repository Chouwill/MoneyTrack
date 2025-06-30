import Cookies from "js-cookie";
import { array, object } from "zod/v4";

// https://github.com/js-cookie/js-cookie

const cookie = {
  set(value: string) {
    Cookies.set("value", value, { expires: 2 });
  },

  get() {},
  remove(value: any) {},
};

export default cookie;
