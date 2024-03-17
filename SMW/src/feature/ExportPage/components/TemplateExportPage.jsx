import DataTable from "../../../components/dataTable/DataTable";
import {
  SearchBarContainer,
  TableContainer,
} from "../../../components/pageContainer";
import useToogleDialog from "../../../hooks/useToogleDialog";
import { dataTableTemplateExport } from "../../../tests/dataTable";
import TemplateExportPageColumns from "../hooks/TemplateExportPageColumns";
import EditTemplateExportPage from "./EditTemplateExportPage";
import SearchBarTemplateExportPage from "./SearchBarTemplateExportPage";

const TemplateExportPage = () => {
  const columns = TemplateExportPageColumns();

  const {
    open: openEditTemplateDialog,
    handleOpen: handleOpenEditTemplateDialog,
    handleClose: handleCloseEditTemplateDialog,
  } = useToogleDialog(false);

  return (
    <>
      <SearchBarContainer>
        <SearchBarTemplateExportPage
          handleClickOpenEditTemplate={handleOpenEditTemplateDialog}
        />
      </SearchBarContainer>

      <TableContainer>
        <div className=" grid grid-rows-10 h-full pt-10 px-20">
          <div className="row-span-1  ">
            <p className=" text-4xl text-center	 ">CỘNG HÒA XÃ HỘI</p>
          </div>
          <div className="row-span-1 text-4xl">
            <p className=" text-4xl text-center">ĐƠN XUẤT KHO</p>
          </div>
          <div className="row-span-1 text-2xl	">
            Đơn vị số: 23 <br></br> Người xuất: Đỗ Văn Tâm
          </div>
          <div className="row-span-7 px-14 pt-10">
            <DataTable
              columns={columns}
              dataTable={Array(5).fill(dataTableTemplateExport.data[0])}
              total={dataTableTemplateExport.total}
              pagination={false}
              style="text-black text-2xl"
            />
          </div>
        </div>
      </TableContainer>

      <EditTemplateExportPage
        open={openEditTemplateDialog}
        onClose={handleCloseEditTemplateDialog}
        onSubmit={() => {}}
      />
    </>
  );
};

export default TemplateExportPage;
