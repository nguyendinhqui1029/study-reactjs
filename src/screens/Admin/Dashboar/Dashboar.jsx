import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Dashboar.scss";
import ChartLine from "./../../../component/ChartLine/ChartLine";
import { Paper, Tab, Tabs } from "@material-ui/core";
import Table from "./../../../component/Table/Table";
import { TYPE_COLUMN_TABLE } from "../../../Constant/Constant";
import OrderDetailPrint from "./../../../component/OrderDetailPrint/OrderDetailPrint";
import ReactToPrint from "react-to-print";
const headerListChoDuyet = [
  {
    flex: 1,
    label: "STT",
    propertyMapping: "stt",
    type: TYPE_COLUMN_TABLE.LABLE,
  },
  {
    flex: 3,
    label: "Địa chỉ",
    propertyMapping: "address",
    type: "LABLE",
  },
  {
    flex: 2,
    label: "Đặt cọc",
    propertyMapping: "deposit",
    type: "INPUTNUMBER",
  },
  {
    flex: 2,
    label: "Xem chi tiết",
    actionType: ["REFERENCE"],
    type: "ACTION",
  },
  {
    flex: 2,
    label: "Chọn",
    propertyMapping: "approve",
    type: "CHECKBOX",
  },
];
const headerListDaDuyet = [
  {
    flex: 1,
    label: "STT",
    propertyMapping: "stt",
    type: TYPE_COLUMN_TABLE.LABLE,
  },
  {
    flex: 3,
    label: "Địa chỉ",
    propertyMapping: "address",
    type: "LABLE",
  },
  {
    flex: 2,
    label: "Xem chi tiết",
    actionType: ["REFERENCE"],
    type: "ACTION",
  },
];

const data = [
  {
    stt: 1,
    address: "50 bình tân, Bình mỹ, Châu phú, An giang",
    approve: false,
    productOrder: [
      {
        index: 1,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 2,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
    ],
  },
  {
    stt: 2,
    address: "50 bình tân, Bình mỹ, Châu phú",
    approve: false,
    productOrder: [
      {
        index: 1,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 2,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
    ],
  },
  {
    stt: 1,
    address: "50 bình tân, Bình mỹ, Châu phú, An giang",
    approve: false,
    productOrder: [
      {
        index: 1,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 2,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
    ],
  },
  {
    stt: 2,
    address: "50 bình tân, Bình mỹ, Châu phú",
    approve: false,
    productOrder: [
      {
        index: 1,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 2,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
    ],
  },
  {
    stt: 1,
    address: "50 bình tân, Bình mỹ, Châu phú, An giang",
    approve: false,
    productOrder: [
      {
        index: 1,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 2,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 3,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
    ],
  },
  {
    stt: 2,
    address: "50 bình tân, Bình mỹ, Châu phú",
    approve: false,
    productOrder: [
      {
        index: 1,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
      {
        index: 2,
        price: 1000000,
        name: "50 bình tân, Bình mỹ, Châu phú, An giang",
        approve: false,
        discount: 20,
        amount: 2,
        intoMoney: 1000000,
      },
    ],
  },
];
function Dashboard() {
  const chartLineDanhThu = useMemo(() => {
    return {
      labelsX: [
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7",
        "Chủ nhật",
      ],
      dataChart: [
        1000000, 5000000, 5000000, 3000000, 2000000, 3000000, 3000000,
      ],
    };
  }, []);
  const chartLineSanPhamBanChay = useMemo(() => {
    return {
      labelsX: ["Quần thể thao", "Áo thun nam", "Dầu gội"],
      dataChart: [65, 59, 80],
    };
  }, []);
  const chartLineKhachHangTimNang = useMemo(() => {
    return {
      labelsX: ["Nguyen Van a", "Nguyen Van B", "Nguyen Van C"],
      dataChart: [100, 500, 900],
    };
  }, []);
  const chartLineDonHang = useMemo(() => {
    return {
      labelsX: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"],
      dataChart: [100, 500, 900, 1000],
    };
  }, []);

  const [value, setValue] = useState(0);
  const [detailValueTab, setDetailValueTab] = useState({
    header: headerListChoDuyet,
    data: data,
  });
  const [approvedList, setApprovedList] = useState([]);
  const [waitingapprovedList, setWaitingapprovedList] = useState(data);
  const refData = useRef(null);
  const refPrint = useRef(null);
  const handleChange = (event, indexTab) => {
    if (indexTab === 0) {
      setValue(indexTab);
      setDetailValueTab({
        header: headerListChoDuyet,
        data: waitingapprovedList,
      });
    } else {
      setValue(indexTab);
      setDetailValueTab({
        header: headerListDaDuyet,
        data: approvedList,
      });
    }
  };

  function handleChangeValue(newValue, item, propertyName) {
    item[propertyName] = newValue;
    waitingapprovedList[item.index] = item;
    if (propertyName === "deposit") {
      setWaitingapprovedList([...waitingapprovedList]);
    } else {
      setWaitingapprovedList([...waitingapprovedList]);
    }
  }

  useEffect(() => {
    if (value === 0) {
      setDetailValueTab({
        header: headerListChoDuyet,
        data: waitingapprovedList,
      });
    } else {
      setDetailValueTab({
        header: headerListDaDuyet,
        data: approvedList,
      });
    }
  }, [waitingapprovedList, waitingapprovedList]);
  return (
    <div className="Dashboard">
      <div className="ContainerCart">
        <div className="Cart DarkBule">
          <div className="Content">
            <div className="Value">3000000</div>
            <div className="Title">Danh thu</div>
          </div>
          <div className="Chart">
            <ChartLine
              dataChart={chartLineDanhThu.dataChart}
              labelsX={chartLineDanhThu.labelsX}
              labelNote="Triệu/Ngày"
            />
          </div>
        </div>
        <div className="Cart Bule">
          <div className="Content">
            <div className="Value">50</div>
            <div className="Title">Sản phẩm bán chạy</div>
          </div>
          <div className="Chart">
            <ChartLine
              labelNote="Sản phẩm"
              dataChart={chartLineSanPhamBanChay.dataChart}
              labelsX={chartLineSanPhamBanChay.labelsX}
            />
          </div>
        </div>
        <div className="Cart Orange">
          <div className="Content">
            <div className="Value">55</div>
            <div className="Title">Khách hàng tìm năng</div>
          </div>
          <div className="Chart">
            <ChartLine
              labelNote="Sản phẩm"
              dataChart={chartLineKhachHangTimNang.dataChart}
              labelsX={chartLineKhachHangTimNang.labelsX}
            />
          </div>
        </div>
        <div className="Cart Red">
          <div className="Content">
            <div className="Value">3000000</div>
            <div className="Title">Thống kê đơn hàng</div>
          </div>
          <div className="Chart">
            <ChartLine
              labelNote="Đơn hàng"
              dataChart={chartLineDonHang.dataChart}
              labelsX={chartLineDonHang.labelsX}
            />
          </div>
        </div>
      </div>
      <div className="ContainerChat">
        <Paper square>
          <Tabs
            value={value}
            TabIndicatorProps={{
              style: { background: "#ff7e00", color: "#ff9c00" },
            }}
            onChange={handleChange}
            aria-label="Đơn hàng"
          >
            <Tab label="Đơn hàng chờ duyệt" />
            <Tab label="Đơn hàng đã duyệt" />
          </Tabs>
        </Paper>
        <div className="ContainerTable">
          <Table
            hanldeCalculateValue={handleChangeValue}
            headerList={detailValueTab.header}
            dataList={detailValueTab.data}
          />
          <ReactToPrint
            ref={refPrint}
            documentTitle="idOrder"
            trigger={() =>
              <button className="Button" disabled={!data.length}>
                Duyệt và In đơn hàng
              </button>
            }
            content={() => refData.current}
          />
        </div>
      </div>

      <OrderDetailPrint refPrint={refData} productList={data} />
    </div>
  );
}

export default Dashboard;
