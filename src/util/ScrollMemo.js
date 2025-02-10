const useScrollMemo = () => {
  const handleLinkClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  };
  return handleLinkClick;
};
export default useScrollMemo;
