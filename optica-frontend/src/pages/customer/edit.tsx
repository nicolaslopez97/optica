import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Edit, useForm } from "@refinedev/antd";
import {
	Col,
	DatePicker,
	Divider,
	Form,
	Input,
	InputNumber,
	Row,
} from "antd";
import dayjs from "dayjs";

export const CustomerEdit: React.FC<IResourceComponentsProps> = () => {
	const { formProps, saveButtonProps } = useForm();

	return (
		<Edit
			breadcrumb={false}
			saveButtonProps={saveButtonProps}
			title="Editar Cliente"
		>
			<Form {...formProps} layout="vertical">
				<Row gutter={[32, 16]}>
					<Col flex={3}>
						<Form.Item
							label="Nombre"
							name={["name"]}
							rules={[
								{
									required: true,
									message: "El campo Nombre es obligatorio",
								},
							]}
						>
							<Input maxLength={40} />
						</Form.Item>
						<Form.Item
							label="Apellido"
							name={["lastName"]}
							rules={[
								{
									required: true,
									message: "El campo Apellido es obligatorio",
								},
							]}
						>
							<Input maxLength={40} />
						</Form.Item>
						<Form.Item
							label="Teléfono"
							name={["phone"]}
							rules={[
								{
									required: true,
									message: "El campo Teléfono es obligatorio",
								},
							]}
						>
							<Input maxLength={40} />
						</Form.Item>
					</Col>
					<Col flex={2}>
						<Form.Item
							label="Fecha"
							name={["date"]}
							getValueProps={(value) => ({
								value: value ? dayjs(value) : "",
							})}
							rules={[
								{
									required: true,
									message: "El campo Fecha es obligatorio",
								},
							]}
						>
							<DatePicker
								placeholder="Seleccione una fecha"
								style={{ width: "100%" }}
								format="DD-MM-YYYY"
							/>
						</Form.Item>
						<Form.Item
							label="Fecha prometida"
							name={["targetDate"]}
							getValueProps={(value) => ({
								value: value ? dayjs(value) : "",
							})}
							rules={[
								{
									required: true,
									message:
										"El campo Fecha prometida es obligatorio",
								},
							]}
						>
							<DatePicker
								placeholder="Seleccione una fecha"
								style={{ width: "100%" }}
								format="DD-MM-YYYY"
							/>
						</Form.Item>
					</Col>
				</Row>
				<Divider></Divider>
				<Row gutter={[32, 16]}>
					<Col flex={5}>
						<Form.Item label="Receta Dr" name={["doctor"]}>
							<Input maxLength={80} />
						</Form.Item>
						<Form.Item label="Obra Social" name={["healthCare"]}>
							<Input maxLength={80} />
						</Form.Item>
						<Form.Item label="Nro Afiliado" name={["healthCareId"]}>
							<Input maxLength={40} />
						</Form.Item>
					</Col>
				</Row>
				<Divider>Lejos</Divider>
				<Row gutter={[32, 16]}>
					<Col span={5}>
						<Form.Item label="O.D. Esf." name={["farODEsf"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Cil" name={["farODCil"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Ángulo" name={["farODAngle"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="Color" name={["farColor"]}>
							<Input />
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="DI" name={["farDI"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[32, 16]}>
					<Col span={5}>
						<Form.Item label="O.I. Esf" name={["farOIEsf"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Cil" name={["farOICil"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Ángulo" name={["farOIAngle"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col span={9}>
						<Form.Item label="Armazón" name={["farFrame"]}>
							<Input />
						</Form.Item>
					</Col>
				</Row>

				<Divider>Cerca</Divider>
				<Row gutter={[32, 16]}>
					<Col span={5}>
						<Form.Item label="O.D. Esf." name={["closeODEsf"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Cil" name={["closeODCil"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Ángulo" name={["closeODAngle"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="Color" name={["closeColor"]}>
							<Input />
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="DI" name={["closeDI"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[32, 16]}>
					<Col span={5}>
						<Form.Item label="O.I. Esf" name={["closeOIEsf"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Cil" name={["closeOICil"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Ángulo" name={["closeOIAngle"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col span={9}>
						<Form.Item label="Armazón" name={["closeFrame"]}>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Divider>Bifocal</Divider>
				<Row gutter={[32, 16]}>
					<Col flex={1}>
						<Form.Item label="Bifocal" name={["bifocal"]}>
							<Input />
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="Altura" name={["height"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[32, 16]}>
					<Col flex={1}>
						<Form.Item label="DI Lejos" name={["farBifocalDI"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="DI Cerca" name={["closeBifocalDI"]}>
							<InputNumber
								style={{ width: "100%" }}
								defaultValue="0"
								precision={3}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Divider></Divider>
				<Row>
					<Col flex={1}>
						<Form.Item label="Metalizado" name={["metallic"]}>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Divider></Divider>
				<Row>
					<Col flex={1}>
						<Form.Item label="Notes" name={["notes"]}>
							<Input.TextArea
								autoSize={{ minRows: 3, maxRows: 5 }}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Edit>
	);
};
