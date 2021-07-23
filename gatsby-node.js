if (typeof document === 'undefined') {
  global.document = {
    createElement: () => null,
  };
}
