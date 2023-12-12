import "tailwindcss/tailwind.css";
import Layout from "../src/components/layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

//theme
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";

//core
import "primereact/resources/primereact.min.css";

export default function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
