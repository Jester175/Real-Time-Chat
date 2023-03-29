import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import { LoginPage } from "./pages/login";
import { ChatPage } from "./pages/chat";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: ChatPage,
  },
];
