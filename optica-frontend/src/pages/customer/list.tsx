import React from "react";
import { IResourceComponentsProps, BaseRecord } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  ShowButton,
  TagField,
  DeleteButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const CustomerList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="Id" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="lastName" title="Last Name" />
        <Table.Column dataIndex="phone" title="Phone" />
        <Table.Column
          dataIndex="date"
          title="Date"
          render={(value: any[]) => (
            <>
              {value?.map((item) => (
                <TagField value={item} key={item} />
              ))}
            </>
          )}
        />
        <Table.Column
          dataIndex="targetDate"
          title="Target Date"
          render={(value: any[]) => (
            <>
              {value?.map((item) => (
                <TagField value={item} key={item} />
              ))}
            </>
          )}
        />
        <Table.Column dataIndex="doctor" title="Doctor" />
        <Table.Column dataIndex="healthCare" title="Health Care" />

        <Table.Column dataIndex="farODEsf" title="Far ODEsf" />
        <Table.Column dataIndex="farOIEsf" title="Far OIEsf" />
        <Table.Column dataIndex="farColor" title="Far Color" />
        <Table.Column dataIndex="farFrame" title="Far Frame" />
        <Table.Column dataIndex="closeODEsf" title="Close ODEsf" />
        <Table.Column dataIndex="closeOIEsf" title="Close OIEsf" />
        <Table.Column dataIndex="closeColor" title="Close Color" />
        <Table.Column dataIndex="closeFrame" title="Close Frame" />
        <Table.Column dataIndex="bifocal" title="Bifocal" />
        <Table.Column dataIndex="notes" title="Notes" />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
