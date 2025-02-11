import { useEffect, useRef } from "react";

const useFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // 모바일 여부 감지 (터치 이벤트가 가능한 기기)
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

    if (!isMobile && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return inputRef;
};

export default useFocus;
