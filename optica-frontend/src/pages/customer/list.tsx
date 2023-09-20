import React from "react";
import { IResourceComponentsProps, BaseRecord } from "@refinedev/core";
import {
	useTable,
	List,
	EditButton,
	ShowButton,
	DeleteButton,
	DateField,
	CreateButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

export const CustomerList: React.FC<IResourceComponentsProps> = () => {
	const { tableProps } = useTable({
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
				<Table.Column dataIndex="name" title="Nombre" />
				<Table.Column dataIndex="lastName" title="Apellido" />
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
