import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";

import { GlobalProvider, GlobalContext } from "./store/global/Provider";

import Header from "./components/Header";
import DrawerNav from "./components/menu/DrawerNav";

import "./styles/App.scss";

import Login from "./views/auth/Login";
import Error404 from "./views/error/404";

import Home from "./views/home";

//import Profile from './views/profile'
import Profile from "./views/profile/_index";
import BotbStar from "./views/botbstar/_index";
import Prestasi from "./views/prestasi";
import Certifikat from "./views/certificate";
import Article from "./views/article/_index";
import InnovationProfile from "./views/submit-innovation/innovation-profile";
import InnovastraInnovationProfile from "./views/submit-innovation/innovastra/innovation-profile";
import InnovastraDocument from "./views/submit-innovation/innovastra/document";
import InnovastraAchievement from "./views/submit-innovation/innovastra/achievement";
import Analysis from "./views/submit-innovation/analysis";
import Idea from "./views/submit-innovation/idea";
import Result from "./views/submit-innovation/result";
import Document from "./views/submit-innovation/document";
import MyDocument from "./views/document/my-document";
import AllDocument from "./views/document/all-document";
import Stars from "./views/stars/_index";
import Champion from "./views/champion";
import PenjuarianLokal from "./views/penjurianlokal";
import Perjuangan from "./views/perjuangan/_index";
import CalendarEvent from './views/event/calendar'
import CreateEvent from './views/event/create-event'
import Makalahku from './views/gallery/makalah/makalahku'
import MakalahArea from './views/gallery/makalah/makalah-area'
import Penjurian from "./views/penjurian/Penjurian";
import Penilaian from "./views/penilaian/Penilaian";

import DetailPenilaianPejuang from "./views/DetailPenilaianPejuang";
import FormPekerjaan from "./views/FormPekerjaan";
import MIIP from "./views/MIIP/MIIP";
import Report from "./views/Report";
import SettingSubmit from "./views/SettingSubmit";
import ReImplementasi, {
  AddNewReimplementation,
} from "./views/re-implementasi";

import Makalah from "./views/makalah/";
import Dasboard from "./views/dashboard/";
import Settings from "./views/settings";
import FormMadatory from "./views/settings/FormMandatory";
import MonitoringProject from "./views/MonitoringProject/";
import FormCreateInovasiChampion from "./views/champion/CreateForm";

import Botb from "./views/botb";
import AddCertificate from "./views/botb/AddCertificate";
import AddCertificateManual from "./views/botb/AddCertificateManual";
import AddWinner from "./views/botb/AddWinner";
import SettingSubmitPejuang from "./views/SettingSubmit/SettingSubmitPejuang";

const PrivateRoute = function ({ children, ...rest }) {
  const History = createBrowserHistory();

  return !!localStorage.getItem("Token")
    ? children
    : (History.push("/login"), History.go());
};

export default function AppFunc() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              exact
              path="/login"
              element={
                localStorage.getItem("Token") ? (
                  <Navigate to={{ pathname: `/` }} />
                ) : (
                  <Login />
                )
              }
            />

            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            {/* <Route
              exact
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            /> */}

            <Route
              exact
              path="/certifikat"
              element={
                <PrivateRoute>
                  <Certifikat />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/penjurian"
              element={
                <PrivateRoute>
                  <Penjurian />
                </PrivateRoute>
              }
            />

            <Route exact path="/penilaian" element={<Penilaian />} />

            <Route
              exact
              path="/champion"
              element={
                <PrivateRoute>
                  <Champion />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/champion/create"
              element={
                <PrivateRoute>
                  <FormCreateInovasiChampion />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/detail-penilaian/:id"
              element={<DetailPenilaianPejuang />}
            />
            <Route exact path="/form-pekerjaan" element={<FormPekerjaan />} />
            <Route exact path="/makalahku" element={<MIIP />} />
            <Route exact path="/laporan" element={<Report />} />
            <Route exact path="/setting-submit" element={<SettingSubmit />} />
            <Route exact path="/reimplementasi" element={<ReImplementasi />} />
            <Route
              exact
              path="/project-monitoring"
              element={<MonitoringProject />}
            />

            <Route
              exact
              path="/reimplementasi/add"
              element={<AddNewReimplementation />}
            />

            <Route
              exact
              path="/setting-submit-pejuang"
              element={<SettingSubmitPejuang />}
            />

            <Route
              exact
              path="/certifikat"
              element={
                <PrivateRoute>
                  <Certifikat />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/certifikat"
              element={
                <PrivateRoute>
                  <Penilaian />
                </PrivateRoute>
              }
            />

            {["/article", "/article/:type", "/article/:type/:option"].map(
              (path, index) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    <PrivateRoute>
                      <Article />
                    </PrivateRoute>
                  }
                />
              )
            )}

            {["/profile", "/profile/:type", "/profile/:type/:option"].map(
              (path, index) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
              )
            )}

            {["/botbstar", "/botbstar/:type", "/botbstar/:type/:option"].map(
              (path, index) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    <PrivateRoute>
                      <BotbStar />
                    </PrivateRoute>
                  }
                />
              )
            )}

            {[
              "/perjuangan",
              "/perjuangan/:type",
              "/perjuangan/:type/:option",
            ].map((path, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <PrivateRoute>
                    <Perjuangan />
                  </PrivateRoute>
                }
              />
            ))}

            {["/stars", "/stars/:type", "/stars/:type/:option"].map(
              (path, index) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    <PrivateRoute>
                      <Stars />
                    </PrivateRoute>
                  }
                />
              )
            )}

            <Route
              exact
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dasboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/makalah"
              element={
                <PrivateRoute>
                  <Makalah />
                </PrivateRoute>
              } 
            />

            <Route
              path="/setting/mandatory"
              element={
                <PrivateRoute>
                  <FormMadatory />
                </PrivateRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />


            <Route
              exact
              path="/penjurianlokal"
              element={
                <PrivateRoute>
                  <PenjuarianLokal />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path={"/submit-innovation/innovation-profile"}
              element={
                <PrivateRoute>
                  <InnovationProfile />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={"/submit-innovation/analysis"}
              element={
                <PrivateRoute>
                  <Analysis />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={"/submit-innovation/idea"}
              element={
                <PrivateRoute>
                  <Idea />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={"/submit-innovation/result"}
              element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={"/submit-innovation/document"}
              element={
                <PrivateRoute>
                  <Document />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path={"/submit-innovation/innovastra/innovation-profile"}
              element={
                <PrivateRoute>
                  <InnovastraInnovationProfile />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={"/submit-innovation/innovastra/document"}
              element={
                <PrivateRoute>
                  <InnovastraDocument />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={"/submit-innovation/innovastra/achievement"}
              element={
                <PrivateRoute>
                  <InnovastraAchievement />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path={"/document/my-document"}
              element={
                <PrivateRoute>
                  <MyDocument />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={"/document/all-document"}
              element={
                <PrivateRoute>
                  <AllDocument />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/penjurian"
              element={
                <PrivateRoute>
                  <Penjurian />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/penilaian"
              element={
                <PrivateRoute>
                  <Penilaian />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={'/event/calendar'}
              element={
                <PrivateRoute>
                  <CalendarEvent />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={'/event/create-event'}
              element={
                <PrivateRoute>
                  <CreateEvent />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/botb-main"
              element={
                <PrivateRoute>
                  <Botb />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/botb/add-certificate/:innovationId"
              element={
                <PrivateRoute>
                  <AddCertificate />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={'/gallery/makalahku'}
              element={
                <PrivateRoute>
                  <Makalahku />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={'/gallery/makalah-area'}
              element={
                <PrivateRoute>
                  <MakalahArea />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/botb/add-certificate-manual"
              element={
                <PrivateRoute>
                  <AddCertificateManual />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/botb/add-winner"
              element={
                <PrivateRoute>
                  <AddWinner />
                </PrivateRoute>
              }
            />

            {/* <Route
              exact
              path="/setting-submit"
              element={
                <PrivateRoute>
                  <SettingSubmitPejuang />
                </PrivateRoute>
              }
            /> */}

            <Route
              path="*"
              element={
                <PrivateRoute>
                  <Error404 />
                </PrivateRoute>
              }
            />

            <Route
              path="*"
              element={
                <PrivateRoute>
                  <Error404 />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </GlobalProvider>
  );
}
