import React from "react";
import { IResourceComponentsProps, useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Card, Col, Divider, Row, Typography } from "antd";
import dayjs from "dayjs";

const { Title } = Typography;

export const CustomerShow: React.FC<IResourceComponentsProps> = () => {
	const { queryResult } = useShow();
	const { data, isLoading } = queryResult;

	const record = data?.data;

	return (
		<Show
			isLoading={isLoading}
			title="Datos del cliente"
			breadcrumb={false}
		>
			<Row gutter={[32, 16]}>
				<Col flex={3}>
					<Title level={5}>Nombre</Title>
					<Typography.Text>{record?.name}</Typography.Text>

					<Title level={5}>Apellido</Title>
					<Typography.Text>{record?.lastName}</Typography.Text>

					<Title level={5}>Teléfono</Title>
					<Typography.Text>{record?.phone}</Typography.Text>
				</Col>
				<Col flex={2}>
					<Title level={5}>Fecha</Title>
					<Typography.Text>
						{dayjs(record?.date).format("DD-MM-YYYY")}
					</Typography.Text>

					<Title level={5}>Fecha prometida</Title>
					<Typography.Text>
						{dayjs(record?.targetDate).format("DD-MM-YYYY")}
					</Typography.Text>
				</Col>
			</Row>
			<Divider></Divider>
			<Row gutter={[32, 16]}>
				<Col flex={5}>
					<Title level={5}>Receta Dr</Title>
					<Typography.Text>
						{record?.doctor ? record?.doctor : "-"}
					</Typography.Text>

					<Title level={5}>Obra Social</Title>
					<Typography.Text>
						{record?.healthCare ? record?.healthCare : "-"}
					</Typography.Text>

					<Title level={5}>Nro Afiliado</Title>
					<Typography.Text>
						{record?.healthCareId ? record?.healthCareId : "-"}
					</Typography.Text>
				</Col>
			</Row>
			<Divider>Lejos</Divider>
			<Row gutter={[32, 16]}>
				<Col flex={1}>
					<Title level={5}>O.D. Esf.</Title>
					<Typography.Text>{record?.farODEsf}</Typography.Text>

					<Title level={5}>O.I. Esf.</Title>
					<Typography.Text>{record?.farOIEsf}</Typography.Text>
				</Col>
				<Col flex={1}>
					<Title level={5}>Cil</Title>
					<Typography.Text>{record?.farODCil}</Typography.Text>

					<Title level={5}>Cil</Title>
					<Typography.Text>{record?.farOICil}</Typography.Text>
				</Col>
				<Col flex={1}>
					<Title level={5}>Ángulo</Title>
					<Typography.Text>{record?.farODAngle}</Typography.Text>

					<Title level={5}>Ángulo</Title>
					<Typography.Text>{record?.farOIAngle}</Typography.Text>
				</Col>
				<Col flex={1}>
					<Title level={5}>Color</Title>
					<Typography.Text>
						{record?.farColor ? record?.farColor : "-"}
					</Typography.Text>

					<Title level={5}>Armazón</Title>
					<Typography.Text>
						{record?.farFrame ? record?.farFrame : "-"}
					</Typography.Text>
				</Col>
				<Col flex={1}>
					<Title level={5}>DI</Title>
					<Typography.Text>
						{record?.farDI ? record.farDI : "-"}
					</Typography.Text>
				</Col>
			</Row>

			<Divider>Cerca</Divider>
			<Row gutter={[32, 16]}>
				<Col flex={1}>
					<Title level={5}>O.D. Esf.</Title>
					<Typography.Text>{record?.closeODEsf}</Typography.Text>

					<Title level={5}>O.I. Esf.</Title>
					<Typography.Text>{record?.closeOIEsf}</Typography.Text>
				</Col>
				<Col flex={1}>
					<Title level={5}>Cil</Title>
					<Typography.Text>{record?.closeODCil}</Typography.Text>

					<Title level={5}>Cil</Title>
					<Typography.Text>{record?.closeOICil}</Typography.Text>
				</Col>
				<Col flex={1}>
					<Title level={5}>Ángulo</Title>
					<Typography.Text>{record?.closeODAngle}</Typography.Text>

					<Title level={5}>Ángulo</Title>
					<Typography.Text>{record?.closeOIAngle}</Typography.Text>
				</Col>
				<Col flex={1}>
					<Title level={5}>Color</Title>
					<Typography.Text>
						{record?.closeColor ? record?.closeColor : "-"}
					</Typography.Text>

					<Title level={5}>Armazón</Title>
					<Typography.Text>
						{record?.closeFrame ? record?.closeFrame : "-"}
					</Typography.Text>
				</Col>
				<Col flex={1}>
					<Title level={5}>DI</Title>
					<Typography.Text>
						{record?.closeDI ? record?.closeDI : "-"}
					</Typography.Text>
				</Col>
			</Row>
			<Divider>Bifocal</Divider>
			<Row gutter={[32, 16]}>
				<Col flex={1}>
					<Title level={5}>Bifocal</Title>
					<Typography.Text>
						{record?.bifocal ? record?.bifocal : "-"}
					</Typography.Text>

					<Title level={5}>DI Lejos</Title>
					<Typography.Text>{record?.farBifocalDI}</Typography.Text>
				</Col>
				<Col flex={1}>
					<Title level={5}>Altura</Title>
					<Typography.Text>{record?.height}</Typography.Text>

					<Title level={5}>DI Cerca</Title>
					<Typography.Text>{record?.closeBifocalDI}</Typography.Text>
				</Col>
			</Row>
			<Divider>Observaciones</Divider>
			<Row>
				<Col flex={1}>
					<Title level={5}>Metalizado</Title>
					<Typography.Text>
						{record?.metallic ? record?.metallic : "-"}
					</Typography.Text>

					<Title level={5}>Notes</Title>
					<Card>
						<Typography.Text>
						{record?.notes ? record?.notes : ""}
					</Typography.Text>
					</Card>
				</Col>
			</Row>
		</Show>
	);
};
