import React from "react";
import {IResourceComponentsProps, BaseRecord, getDefaultFilter} from "@refinedev/core";
import {
	useTable,
	List,
	EditButton,
	ShowButton,
	DeleteButton,
	DateField,
	CreateButton, FilterDropdown,
} from "@refinedev/antd";
import {Table, Space, Input} from "antd";
import { UserAddOutlined } from "@ant-design/icons";

export const CustomerList: React.FC<IResourceComponentsProps> = () => {
	const { tableProps, filters } = useTable({
		syncWithLocation: true,
	});

	return (
		<List
			title={"Clientes"}
			createButtonProps={{ size: "middle" }}
			headerButtons={({ createButtonProps }) => (
				<>
					{createButtonProps && (
						<CreateButton
							{...createButtonProps}
							icon={<UserAddOutlined />}
						>
							Agregar Cliente
						</CreateButton>
					)}
				</>
			)}
		>
			<Table {...tableProps} rowKey="id">
				<Table.Column dataIndex="name" title="Nombre"
					defaultFilteredValue={getDefaultFilter("name", filters, "eq")}
					filterDropdown={(props) => (
					  <FilterDropdown {...props}>
						  <Input maxLength={40} style={{ width: "100%" }}/>
					  </FilterDropdown>
					)}
				/>
				<Table.Column dataIndex="lastName" title="Apellido"
					defaultFilteredValue={getDefaultFilter("lastName", filters, "eq")}
					filterDropdown={(props) => (
					  <FilterDropdown {...props}>
						  <Input maxLength={40} style={{ width: "100%" }}/>
					  </FilterDropdown>
					)}
				/>
				<Table.Column dataIndex="phone" title="Telefono" />
				<Table.Column
					dataIndex="date"
					title="Fecha"
					render={(value) =>
						value && <DateField value={value} format="DD-MM-YYYY" />
					}
				/>
				<Table.Column
					dataIndex="targetDate"
					title="Fecha Prometida"
					render={(value) =>
						value && <DateField value={value} format="DD-MM-YYYY" />
					}
				/>
				<Table.Column dataIndex="healthCare" title="Obra Social" />
				<Table.Column
					title="Acciones"
					dataIndex="actions"
					render={(_, record: BaseRecord) => (
						<Space>
							<EditButton
								hideText
								size="small"
								recordItemId={record.id}
							/>
							<ShowButton
								hideText
								size="small"
								recordItemId={record.id}
							/>
							<DeleteButton
								hideText
								size="small"
								recordItemId={record.id}
							/>
						</Space>
					)}
				/>
			</Table>
		</List>
	);
};