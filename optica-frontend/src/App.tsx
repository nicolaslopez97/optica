import { Refine } from "@refinedev/core";
import { RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  ThemedLayoutV2,
  notificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
  NavigateToResource,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode";
import "@refinedev/antd/dist/reset.css";
import { AntdInferencer } from "@refinedev/inferencer/antd";

import {
  CustomerList,
  CustomerEdit,
  CustomerShow,
  CustomerCreate,
} from "pages/customer";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <Refine
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            dataProvider={dataProvider("http://localhost:8080/api")}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "QBOKmz-3Oi5CJ-GXxrZ7",
            }}
            resources={[
              {
                name: "customer",
                list: "/customer",
                show: "/customer/show/:id",
                create: "/customer/create",
                edit: "/customer/edit/:id",
              },
            ]}
          >
            <Routes>
              <Route
                element={
                  <ThemedLayoutV2>
                    <Outlet />
                  </ThemedLayoutV2>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="customer" />}
                />
                <Route path="customer">
                  <Route index element={< CustomerList />} />
                  <Route path="show/:id" element={<CustomerShow />} />
                  <Route path="edit/:id" element={<CustomerEdit />} />
                  <Route path="create" element={<CustomerCreate />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
            </Routes>
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
