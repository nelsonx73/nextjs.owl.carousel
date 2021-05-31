export const useLoadScripts = (scripts) => {
  const scriptsLoaded = useRef(false);
  if (typeof window !== "undefined" && !scriptsLoaded.current) {
    scripts.forEach((script) => {
      const element = document.createElement("script");
      element.src = script;
      element.type = "text/javascript";
      const position = document.querySelector("body");
      position.appendChild(element);
    });
    scriptsLoaded.current = true;
  }
};
