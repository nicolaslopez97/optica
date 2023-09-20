import { Refine } from "@refinedev/core";

import {
	ErrorComponent,
	ThemedLayoutV2,
	notificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
	UnsavedChangesNotifier,
	NavigateToResource,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "@refinedev/antd/dist/reset.css";

import {
	CustomerList,
	CustomerEdit,
	CustomerShow,
	CustomerCreate,
} from "pages/customer";
import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import Header from "components/header";
import { UserOutlined } from "@ant-design/icons";

function App() {
	const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

	return (
		<BrowserRouter basename="/admin">
			<ConfigProvider
				theme={{
					algorithm:
						currentTheme === "light"
							? theme.defaultAlgorithm
							: theme.darkAlgorithm,
				}}
			>
				<Refine
					notificationProvider={notificationProvider}
					routerProvider={routerBindings}
					dataProvider={dataProvider("http://localhost:8089/api")}
					options={{
						syncWithLocation: true,
						warnWhenUnsavedChanges: true,
						projectId: "QBOKmz-3Oi5CJ-GXxrZ7",
					}}
					resources={[
						{
							meta: { label: "Clientes", icon: <UserOutlined /> },
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
								<ThemedLayoutV2
									Sider={()=><></>}
									Header={() => (
										<Header
											theme={currentTheme}
											setTheme={setCurrentTheme}
										/>
									)}
								>
									<Outlet />
								</ThemedLayoutV2>
							}
						>
							<Route
								index
								element={
									<NavigateToResource resource="customer" />
								}
							/>
							<Route path="customer">
								<Route index element={<CustomerList />} />
								<Route
									path="show/:id"
									element={<CustomerShow />}
								/>
								<Route
									path="edit/:id"
									element={<CustomerEdit />}
								/>
								<Route
									path="create"
									element={<CustomerCreate />}
								/>
							</Route>
							<Route path="*" element={<ErrorComponent />} />
						</Route>
					</Routes>
					<UnsavedChangesNotifier />
				</Refine>
			</ConfigProvider>
		</BrowserRouter>
	);
}

export default App;
