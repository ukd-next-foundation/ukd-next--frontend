export function useClipBoard(value: string) {
  const writeClipboardText = async () => {
    await navigator.clipboard
      .writeText(value)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };
  return {
    writeClipboardText,
  };
}
