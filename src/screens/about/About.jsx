import React, { useState } from "react";
import VerticalMenu from "../../component/VerticalMenu/VerticalMenu";
import NavigateQuickly from "../../component/NavigateQuickly/NavigateQuickly";
import Header from "../../component/Header/Header";
import "./About.scss";
import { addQuickLink, removeQuickLink } from "../../actions/quicklink";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function About() {
  const disPatch = useDispatch();
  const history = useHistory();
  const [header, setHeader] = useState("Đăng nhập");
  history.listen((location) => {
    const item = dataSource.find((item) => {
      return item.path.includes(location.pathname);
    });
    if (item && item.hasOwnProperty("title")) setHeader(item.title);
  });

  function navigatePage(item) {
    setHeader(item.title);
    history.push(item.path[0]);
  }
  function selectedCategory(item) {
    disPatch(removeQuickLink(1));
    disPatch(addQuickLink({ path: `/about`, label: "Giới thiệu" }));
    disPatch(addQuickLink({ path: `/about/${item.id}`, label: item.title }));
  }
  return (
    <div className="ContainerBody">
      <div className="ContainerBodyLeft">
        <div className="ContainerChildLeft">
          <VerticalMenu
            iconLeft="angle-double-right"
            categoryList={dataSource}
            title="Giới thiệu"
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
      <div className="ContainerBodyRight">
        <div className="ContainerChildRight">
          <NavigateQuickly />
        </div>
        <div className="ContainerChildRight">
          <Header title="Về Chúng tôi" />
        </div>
        <div className="ContainerChildRight">
          <div className="Content">
            <p>
              Công ty Cổ phần Tư vấn công nghệ, thiết bị và Kiểm định xây dựng -
              CONINCO là một doanh nghiệp tư vấn đầu tư và xây dựng, hoạt động
              đa lĩnh vực, đa ngành nghề trong phạm vi cả nước, hợp tác kinh
              doanh hiệu quả với nhiều Công ty và tập đoàn kinh tế lớn trên thế
              giới.
            </p>
            <p>
              Công ty Cổ phần Tư vấn công nghệ, thiết bị và Kiểm định xây dựng -
              CONINCO là một doanh nghiệp tư vấn đầu tư và xây dựng, hoạt động
              đa lĩnh vực, đa ngành nghề trong phạm vi cả nước, hợp tác kinh
              doanh hiệu quả với nhiều Công ty và tập đoàn kinh tế lớn trên thế
              giới.
            </p>
            <p>
              Từ ngày thành lập 16 tháng 4 năm 1979 đến nay, trải qua hơn 30 năm
              xây dựng và trưởng thành, tập thể lãnh đạo, cán bộ công nhân viên
              Công ty đã nỗ lực không ngừng xây dựng và phát triển. CONINCO đã
              được Đảng và Nhà nước ghi nhận thành tích và tặng thưởng nhiều
              danh hiệu cao quý, góp phần tạo dựng thương hiệu CONINCO là một
              trong những Công ty hàng đầu trong Tập đoàn Tư vấn Xây dựng Việt
              Nam.
            </p>
            <p>
              CONINCO cũng được các Chủ đầu tư và khách hàng đánh giá là một
              thương hiệu Tư vấn Xây dựng lớn có uy tín, tin cậy, có thể độc lập
              đảm đương thực hiện công tác tư vấn cho các dự án quy mô lớn, phức
              tạp về công nghệ, kỹ thuật.
            </p>
            <p>
              Hiện nay, với mô hình hoạt động mới là một Công ty đại chúng, sau
              khi thực hiện thành công và hiệu quả mô hình Nhượng quyền thương
              mại cho các Công ty thành viên, cùng với sự quan tâm, giúp đỡ và
              chỉ đạo kịp thời của Lãnh đạo các cấp, các ngành, sự tin cậy của
              Quý khách hàng, thương hiệu CONINCO ngày càng phát triển và lớn
              mạnh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

const dataSource = [
  {
    id: "1",
    title: "Về chúng tôi",
    path: "",
  },
  {
    id: "2",
    title: "Lĩnh vực hoạt động",
    path: "",
  },
];
