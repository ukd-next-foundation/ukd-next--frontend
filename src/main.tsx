import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./fonts/fonts.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { queryClient } from "./react-query";

//TODO: Put this to .env

const AUTH_CLIENT_ID =
  "711823262458-hhbrq9o6f0sophmsv2a521kfqbpikhp4.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={AUTH_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>,
);
