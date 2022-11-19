import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { CgDanger } from "react-icons/cg";
import "./alert.scss";

const alert = (title, message) => {
  confirmAlert({
    title: title,
    message: message,
    buttons: [
      {
        label: "Yes",
        onClick: () => alert("Click Yes"),
      },
      {
        label: "No",
        onClick: () => alert("Click No"),
      },
    ],
  });
};

export default alert;
