export default function useTopBtn() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return { useToTop: handleClick };
}
