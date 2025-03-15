import React from "react";
import { IResourceComponentsProps, useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Card, Col, Divider, Row, Typography } from "antd";
import dayjs from "dayjs";
import {CustomNumberText} from "../../components/CustomNumberText";

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
					<CustomNumberText value={record?.farODEsf}/>

					<Title level={5}>O.I. Esf.</Title>
					<CustomNumberText value={record?.farOIEsf}/>
				</Col>
				<Col flex={1}>
					<Title level={5}>Cil</Title>
					<CustomNumberText value={record?.farODCil} angle/>

					<Title level={5}>Cil</Title>
					<CustomNumberText value={record?.farOICil} angle/>
				</Col>
				<Col flex={1}>
					<Title level={5}>Ángulo</Title>
					<CustomNumberText value={record?.farODAngle} angle/>

					<Title level={5}>Ángulo</Title>
					<CustomNumberText value={record?.farOIAngle} angle/>
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
					<CustomNumberText value={record?.farDI}/>
				</Col>
			</Row>

			<Divider>Cerca</Divider>
			<Row gutter={[32, 16]}>
				<Col flex={1}>
					<Title level={5}>O.D. Esf.</Title>
                    <CustomNumberText value={record?.closeODEsf}/>

					<Title level={5}>O.I. Esf.</Title>
					<CustomNumberText value={record?.closeOIEsf}/>
				</Col>
				<Col flex={1}>
					<Title level={5}>Cil</Title>
					<CustomNumberText value={record?.closeODCil} angle/>

					<Title level={5}>Cil</Title>
					<CustomNumberText value={record?.closeOICil} angle/>
				</Col>
				<Col flex={1}>
					<Title level={5}>Ángulo</Title>
					<CustomNumberText value={record?.closeODAngle} angle/>

					<Title level={5}>Ángulo</Title>
					<CustomNumberText value={record?.closeOIAngle} angle/>
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
					<CustomNumberText value={record?.closeDI}/>
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
					<CustomNumberText value={record?.farBifocalDI}/>
				</Col>
				<Col flex={1}>
					<Title level={5}>Altura</Title>
					<CustomNumberText value={record?.height}/>

					<Title level={5}>DI Cerca</Title>
					<CustomNumberText value={record?.closeBifocalDI}/>
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
