import { useState } from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
} from "react-bs-datatable";

const AdminDataTableLayout2 = ({ body, headers, onTopicChange }) => {
  function handleOnChange(ev) {
    onTopicChange(ev.target.value);
  }

  return (
    <DatatableWrapper
      body={body}
      headers={headers}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 5,
          options: [5, 10, 15, 20],
        },
      }}
    >
      <Row className="mb-4">
        <Col
          lg={6}
          className="d-flex align-items-center justify-content-center justify-content-lg-start mb-lg-0 mb-3"
        >
          <p className="m-0 me-2">Pilih topik:</p>
          <Form.Select onChange={handleOnChange} style={{ width: 120 }}>
            <option value="0">---</option>
            <option value="1">Topik 1</option>
            <option value="2">Topik 2</option>
            <option value="3">Topik 3</option>
            <option value="4">Topik 4</option>
            <option value="5">Topik 5</option>
            <option value="6">Topik 6</option>
            <option value="7">Topik 7</option>
            <option value="8">Topik 8</option>
            <option value="9">Topik 9</option>
            <option value="10">Topik 10</option>
          </Form.Select>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-col justify-content-end align-items-center mb-lg-0 mb-3"
        >
          <Filter
            placeholder="Cari..."
            classes={{
              clearButton: "d-none",
              input: "rounded ms-1",
            }}
          />
        </Col>
      </Row>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
      <Row className="mt-4 p-0">
        <Col
          lg={6}
          className="d-flex align-items-center justify-content-center justify-content-lg-start mb-lg-0 mb-3"
        >
          <PaginationOptions
            labels={{
              beforeSelect: "Menampilkan",
            }}
            classes={{
              formGroup: "d-flex align-items-center",
              formText: "p-0 m-0",
              formControl: "mx-1",
            }}
          />
          <p className="m-0">data</p>
        </Col>
        <Col className="d-flex p-0 m-0 justify-content-center align-items-center justify-content-lg-end align-items-lg-end">
          <Pagination
            classes={{
              button: "btn-primary",
            }}
            labels={{
              firstPage: "<<",
              lastPage: ">>",
              nextPage: ">",
              prevPage: "<",
            }}
          />
        </Col>
      </Row>
    </DatatableWrapper>
  );
};

export default AdminDataTableLayout2;
