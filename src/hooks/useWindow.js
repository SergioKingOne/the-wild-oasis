import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../ui/Modal";

function useWindow(name) {
  const { openName, close } = useContext(ModalContext);

  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e?.target)) close();
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [close]);

  const isVisible = name === openName;
  console.log(isVisible);

  return { ref, isVisible, close };
}

export default useWindow;
