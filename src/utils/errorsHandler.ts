import toast from 'react-hot-toast';

export const showError = (error: any) => {
  const errors = error.response.data.errors || error.response.data;

  Object.keys(errors).map((field) => {
    toast.error(errors[field]);
  });
};
