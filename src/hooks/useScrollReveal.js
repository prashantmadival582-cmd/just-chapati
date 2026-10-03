import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .stagger-item"
    );

    if (!elements.length) {
      return;
    }

    // If browser doesn't support IntersectionObserver,
    // show everything normally.
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("show");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useScrollReveal;