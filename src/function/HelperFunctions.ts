export const CustomMessage = (
  message: string,
  type: string,
  enqueueSnackbar: any
) => {
  enqueueSnackbar(message, {
    variant: type,
    persist: ["success", "info", "error"].includes(type) ? false : true,
    autoHideDuration: ["success", "info", "error"].includes(type) && 3000,
  });
};
