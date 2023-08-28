import { Toaster } from 'react-hot-toast';

const CustomToaster = () => (
  <Toaster
    position='top-center'
    toastOptions={{
      duration: 4000,
      style: { fontWeight: 500, maxWidth: '100%' },
      success: {},
      error: {},
      loading: {},
    }}
  />
);

export { CustomToaster };
