const shouldButtonRender = (view: string, mode: string) =>
  view === "all" ||
  (view === "selected" && mode !== "unselected") ||
  mode === view;

export default shouldButtonRender;
