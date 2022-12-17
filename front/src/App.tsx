import {
  lazy,
  Suspense,
  useReducer,
  useState,
  useEffect,
  createContext,
} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "style/global-style";
import { ThemeProvider } from "styled-components/macro";
import "react-datepicker/dist/react-datepicker.css";
import theme from "assets/data/chatBotTheme.json";
import { QueryClient, QueryClientProvider } from "react-query";
import { loginReducer } from "utils/reducer";
import { currentUserGet } from "apis/UserApi";
import { PrivateRoute, PublicRoute } from "components/Route/RouteHandling";

const Login = lazy(() => import("./Pages/LoginPage"));
const SignUpLogin = lazy(() => import("Pages/StartPage"));
const Start = lazy(
  () => import("Pages/ServiceIntroduction/ServiceIntroduction"),
);
const CarMbti = lazy(() => import("./Pages/CarRecommendSteps/CarMbtiPage"));
const TestContents = lazy(() => import("./components/CarMbti/TestContents"));
const Loading = lazy(() => import("./components/CarMbti/Loading"));
const MbtiResult = lazy(() => import("./components/CarMbti/MbtiResult"));
const CalcEfficency = lazy(
  () => import("./Pages/CarRecommendSteps/CalcEfficiencyPage"),
);
const FinalResultPage = lazy(
  () => import("./Pages/CarRecommendSteps/FinalResultPage"),
);
const CarRegister = lazy(() => import("./Pages/CarRegister/CarRegisterPage"));
const SignUp = lazy(() => import("./Pages/SignUpPage"));
const Community = lazy(() => import("./Pages/Community/Community"));
const CommunityUpload = lazy(() => import("./Pages/Community/CommunityUpload"));
const CommunityLoad = lazy(() => import("./Pages/Community/CommunityLoad"));
const MyPage = lazy(() => import("./Pages/MyPage"));
const MainPage = lazy(() => import("./Pages/MainPage"));
const ServiceIntro = lazy(
  () => import("./Pages/ServiceIntroduction/ServiceIntroduction"),
);
const Error = lazy(() => import("./Pages/ErrorPage"));
const queryClient = new QueryClient();

const ROUTE = {
  START: "/",
  SIGNUPLOGIN: "/signuplogin",
  MAIN: "/main",
  LOGIN: "/login",
  SIGNUP: "/signup",
  COMMUNITY: "/community",
  CARREGISTER: "/carregister",
  CARMBTI: "/carmbti",
  CARMBTITEST: "/test",
  LOADING: "/loading",
  CARMBTIRESULT: "/mbtiresult",
  CALCEFFICENCY: "/calcefficency",
  FINALRESULT: "/finalresult",
  COMMUNITYUPLOAD: "/community/upload",
  COMMUNITYLOAD: "/community/:id",
  MYPAGE: "/mypage",
  SERVICEINTRO: "/serviceintro",
  ERROR: "/*",
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      const res = await currentUserGet();
      const currentUser = res.data;

      dispatch({
        type: "LOGIN",
        payload: currentUser,
      });
    } catch (err) {
      console.log(err);
    }
    setIsFetchCompleted(true);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <>
      <UserStateContext.Provider value={userState}>
        <Suspense>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <QueryClientProvider client={queryClient}>
                <Routes>
                  <Route path={ROUTE.SERVICEINTRO} element={<ServiceIntro />} />
                  <Route
                    path={ROUTE.START}
                    element={
                      <PublicRoute>
                        <Start />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path={ROUTE.SIGNUPLOGIN}
                    element={
                      <PublicRoute>
                        <SignUpLogin />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path={ROUTE.SIGNUP}
                    element={
                      <PublicRoute>
                        <SignUp />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path={ROUTE.LOGIN}
                    element={
                      <PublicRoute>
                        <Login />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path={ROUTE.MAIN}
                    element={
                      <PrivateRoute>
                        <MainPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={ROUTE.CARREGISTER}
                    element={
                      <PrivateRoute>
                        <CarRegister />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={ROUTE.CARMBTI}
                    element={
                      <PrivateRoute>
                        <CarMbti />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={ROUTE.CARMBTITEST}
                    element={
                      <PrivateRoute>
                        <TestContents />
                      </PrivateRoute>
                    }
                  />
                  <Route path={ROUTE.LOADING} element={<Loading />} />
                  <Route
                    path={`${ROUTE.CARMBTIRESULT}/:car`}
                    element={
                      <PrivateRoute>
                        <MbtiResult />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={ROUTE.CALCEFFICENCY}
                    element={
                      <PrivateRoute>
                        <CalcEfficency />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={ROUTE.FINALRESULT}
                    element={
                      <PrivateRoute>
                        <FinalResultPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={ROUTE.COMMUNITY}
                    element={
                      <PrivateRoute>
                        <Community />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={ROUTE.COMMUNITYUPLOAD}
                    element={
                      <PrivateRoute>
                        <CommunityUpload />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={ROUTE.COMMUNITYLOAD}
                    element={
                      <PrivateRoute>
                        <CommunityLoad />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={ROUTE.MYPAGE}
                    element={
                      <PrivateRoute>
                        <MyPage />
                      </PrivateRoute>
                    }
                  />
                  <Route path={ROUTE.ERROR} element={<Error />} />
                </Routes>
              </QueryClientProvider>
            </ThemeProvider>
          </BrowserRouter>
        </Suspense>
      </UserStateContext.Provider>
    </>
  );
}

export default App;
export { ROUTE as R };
