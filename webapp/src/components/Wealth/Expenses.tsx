import React, { useState, useRef, useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { Text } from "@mantine/core";
import "ag-grid-enterprise";
import moment from 'moment';

interface responseData {
  date: string;
  description: string;
  amount: string;
  balance: string;
}

const Expenses: React.FC<any> = () => {
  const mockData = [
    {
      date: new Date().toISOString(),
      description: "Mobile Phone bill Paid",
      amount: "676.00",
      balance: "4,56,360.00",
    },
    {
      date: new Date().toISOString(),
      description: "Mobile Phone bill Paid",
      amount: "676.00",
      balance: "4,56,360.00",
    },
    {
      date: new Date().toISOString(),
      description: "Mobile Phone bill Paid",
      amount: "676.00",
      balance: "4,56,360.00",
    },
    {
      date: new Date().toISOString(),
      description: "Mobile Phone bill Paid",
      amount: "676.00",
      balance: "4,56,360.00",
    },
    {
      date: new Date().toISOString(),
      description: "Mobile Phone bill Paid",
      amount: "676.00",
      balance: "4,56,360.00",
    },
    {
      date: new Date().toISOString(),
      description: "Mobile Phone bill Paid",
      amount: "676.00",
      balance: "4,56,360.00",
    },
    {
      date: new Date().toISOString(),
      description: "Mobile Phone bill Paid",
      amount: "676.00",
      balance: "4,56,360.00",
    },
    {
      date: new Date().toISOString(),
      description: "Mobile Phone bill Paid",
      amount: "676.00",
      balance: "4,56,360.00",
    },
    {
      date: new Date().toISOString(),
      description: "Mobile Phone bill Paid",
      amount: "676.00",
      balance: "4,56,360.00",
    },
    {
      date: new Date().toISOString(),
      description: "Mobile Phone bill Paid",
      amount: "676.00",
      balance: "4,56,360.00",
    },
  ];

  const gridRef = useRef<any>();
  const [rowData, setRowData] = useState<responseData[]>(mockData);

  const dateRenderer = (item: any) => {
    return (
      <div>{moment(item.value).format('DD MMMM, YYYY')}</div>
    );
  };

  const [columnDefs, setColumnDefs] = useState([
    { field: "date", filter: true, autoHeight: true,cellRenderer: dateRenderer },
    { field: "description", filter: true },
    { field: "amount" },
    { field: "balance" },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
    }),
    []
  );

  const cellClickedListener = useCallback((event: any) => {
    console.log("cellClicked", event);
  }, []);

  const buttonListener = useCallback((e: any) => {
    gridRef.current.api.deselectAll();
  }, []);

  const onGridReady = useCallback((params: any) => {
    params.api.sizeColumnsToFit();
  }, []);

  return (
    <div>
      <div
        className="ag-theme-material"
        style={{
          width: "100%",
          height: 500,
          paddingLeft: "40px",
          paddingRight: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Text size="lg" weight={700}>
          Expenses
        </Text>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
          onCellClicked={cellClickedListener}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default Expenses;
