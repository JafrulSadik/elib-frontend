import Okey from "@/components/ui/svg/Okey";
import { Flip, toast } from "react-toastify";

export const successToast = (message: string) => {
  return toast(message, {
    icon: Okey,
    hideProgressBar: true,
    position: "top-right",
    transition: Flip,
  });
};

export const errorToast = (message: string) => {
  return toast.error(message, {
    hideProgressBar: true,
    position: "top-right",
    transition: Flip,
  });
};
