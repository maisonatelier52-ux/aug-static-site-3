// Some locked-down build containers do not expose resident-memory data to libuv.
// Keep Next.js diagnostics from turning that missing optional metric into a build error.
const originalMemoryUsage = process.memoryUsage.bind(process);

function fallbackMemoryUsage() {
  return {
    rss: 0,
    heapTotal: 0,
    heapUsed: 0,
    external: 0,
    arrayBuffers: 0,
  };
}

function safeMemoryUsage() {
  try {
    return originalMemoryUsage();
  } catch {
    return fallbackMemoryUsage();
  }
}

safeMemoryUsage.rss = () => {
  try {
    return typeof originalMemoryUsage.rss === "function"
      ? originalMemoryUsage.rss()
      : safeMemoryUsage().rss;
  } catch {
    return 0;
  }
};

process.memoryUsage = safeMemoryUsage;
