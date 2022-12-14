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
import theme from "assets/data/chatBotTheme.json";
import { QueryClient, QueryClientProvider } from "react-query";
import { loginReducer } from "utils/reducer";
import { currentUserGet } from "apis/UserApi";

const Login = lazy(() => import("./Pages/LoginPage"));
const Start = lazy(() => import("Pages/StartPage"));
const Find = lazy(() => import("./Pages/FindUserInfo/FindPage"));
const FindId = lazy(() => import("./Pages/FindUserInfo/FindIdPage"));
const FindPwd = lazy(() => import("./Pages/FindUserInfo/FindPwdPage"));
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
  MAIN: "/main",
  LOGIN: "/login",
  FIND: "/find",
  FINDID: "/find/id",
  FINDPWD: "/find/pwd",
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
  ERROR: "/404",
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

  // if (!isFetchCompleted) {
  //   return "loading...";
  // }

  return (
    <>
      <UserStateContext.Provider value={userState}>
        <Suspense>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <QueryClientProvider client={queryClient}>
                <Routes>
                  <Route path={ROUTE.START} element={<Start />} />
                  <Route path={ROUTE.MAIN} element={<MainPage />} />
                  <Route path={ROUTE.SERVICEINTRO} element={<ServiceIntro />} />
                  <Route path={ROUTE.LOGIN} element={<Login />} />
                  <Route path={ROUTE.FIND} element={<Find />} />
                  <Route path={ROUTE.FINDID} element={<FindId />} />
                  <Route path={ROUTE.FINDPWD} element={<FindPwd />} />
                  <Route path={ROUTE.SIGNUP} element={<SignUp />} />
                  <Route path={ROUTE.COMMUNITY} element={<Community />} />
                  <Route path={ROUTE.CARREGISTER} element={<CarRegister />} />
                  <Route path={ROUTE.CARMBTI} element={<CarMbti />} />
                  <Route path={ROUTE.CARMBTITEST} element={<TestContents />} />
                  <Route path={ROUTE.LOADING} element={<Loading />} />
                  <Route
                    path={`${ROUTE.CARMBTIRESULT}/:car`}
                    element={<MbtiResult />}
                  />
                  <Route
                    path={ROUTE.CALCEFFICENCY}
                    element={<CalcEfficency />}
                  />
                  <Route
                    path={ROUTE.FINALRESULT}
                    element={<FinalResultPage />}
                  />
                  <Route
                    path={ROUTE.COMMUNITYUPLOAD}
                    element={<CommunityUpload />}
                  />
                  <Route
                    path={ROUTE.COMMUNITYLOAD}
                    element={<CommunityLoad />}
                  />
                  <Route path={ROUTE.MYPAGE} element={<MyPage />} />
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
