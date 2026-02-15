const originalExit = process.exit.bind(process);

process.exit = (code) => {
  let normalizedCode = code;

  if (typeof code === "string") {
    normalizedCode = code === "SIGINT" ? 130 : code === "SIGTERM" ? 143 : 0;
  }

  return originalExit(normalizedCode ?? 0);
};
