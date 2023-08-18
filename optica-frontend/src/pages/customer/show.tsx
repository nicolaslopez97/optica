import React from "react";
import { IResourceComponentsProps, useShow } from "@refinedev/core";
import { Show, NumberField, TagField, TextField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const CustomerShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>Name</Title>
            <TextField value={record?.name} />
            <Title level={5}>Last Name</Title>
            <TextField value={record?.lastName} />
            <Title level={5}>Phone</Title>
            <NumberField value={record?.phone ?? ""} />
            <Title level={5}>Date</Title>
            {record?.date?.map((item: any) => (
                <TagField value={item} key={item} />
            ))}
            <Title level={5}>Target Date</Title>
            {record?.targetDate?.map((item: any) => (
                <TagField value={item} key={item} />
            ))}
            <Title level={5}>Doctor</Title>
            <TextField value={record?.doctor} />
            <Title level={5}>Health Care</Title>
            <TextField value={record?.healthCare} />
            <Title level={5}>Far ODEsf</Title>
            <NumberField value={record?.farODEsf ?? ""} />
            <Title level={5}>Far OIEsf</Title>
            <NumberField value={record?.farOIEsf ?? ""} />
            <Title level={5}>Far Color</Title>
            <TextField value={record?.farColor} />
            <Title level={5}>Far Frame</Title>
            <TextField value={record?.farFrame} />
            <Title level={5}>Close ODEsf</Title>
            <NumberField value={record?.closeODEsf ?? ""} />
            <Title level={5}>Close OIEsf</Title>
            <NumberField value={record?.closeOIEsf ?? ""} />
            <Title level={5}>Close Color</Title>
            <TextField value={record?.closeColor} />
            <Title level={5}>Close Frame</Title>
            <TextField value={record?.closeFrame} />
            <Title level={5}>Bifocal</Title>
            <TextField value={record?.bifocal} />
            <Title level={5}>Notes</Title>
            <TextField value={record?.notes} />
        </Show>
    );
};
