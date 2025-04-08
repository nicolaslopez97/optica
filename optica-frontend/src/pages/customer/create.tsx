import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Create, useForm } from "@refinedev/antd";
import {Col, DatePicker, Divider, Form, Input, Row} from "antd";
import {CustomInputNumber} from "../../components/InputNumberCustom";

export const CustomerCreate: React.FC<IResourceComponentsProps> = () => {
	const { formProps, saveButtonProps } = useForm();

	return (
		<Create
			breadcrumb={false}
			saveButtonProps={saveButtonProps}
			title="Agregar Cliente"
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
							<CustomInputNumber />
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Cil" name={["farODCil"]}>
							<CustomInputNumber angle/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Ángulo" name={["farODAngle"]}>
							<CustomInputNumber angle/>
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="Color" name={["farColor"]}>
							<Input />
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="DI" name={["farDI"]}>
							<CustomInputNumber />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[32, 16]}>
					<Col span={5}>
						<Form.Item label="O.I. Esf" name={["farOIEsf"]}>
							<CustomInputNumber />
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Cil" name={["farOICil"]}>
							<CustomInputNumber angle/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Ángulo" name={["farOIAngle"]}>
							<CustomInputNumber angle/>
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
							<CustomInputNumber />
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Cil" name={["closeODCil"]}>
							<CustomInputNumber angle/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Ángulo" name={["closeODAngle"]}>
							<CustomInputNumber angle/>
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="Color" name={["closeColor"]}>
							<Input />
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="DI" name={["closeDI"]}>
							<CustomInputNumber />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[32, 16]}>
					<Col span={5}>
						<Form.Item label="O.I. Esf" name={["closeOIEsf"]}>
							<CustomInputNumber />
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Cil" name={["closeOICil"]}>
							<CustomInputNumber angle/>
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item label="Ángulo" name={["closeOIAngle"]}>
							<CustomInputNumber angle/>
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
							<Input defaultValue={"0"}/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[32, 16]}>
					<Col flex={1}>
						<Form.Item label="DI Lejos" name={["farBifocalDI"]}>
							<Input defaultValue={"0"}/>
						</Form.Item>
					</Col>
					<Col flex={1}>
						<Form.Item label="DI Cerca" name={["closeBifocalDI"]}>
							<Input defaultValue={"0"}/>
						</Form.Item>
					</Col>
				</Row>
				<Divider>Observaciones</Divider>
				<Row>
					<Col flex={1}>
						<Form.Item label="Metalizado" name={["metallic"]}>
							<Input />
						</Form.Item>
						<Form.Item label="Notes" name={["notes"]}>
							<Input.TextArea
								autoSize={{ minRows: 3, maxRows: 5 }}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Create>
	);
};
