import React, { Component } from "react";

class Covid extends React.Component {
  render() {
    // const {Confirmed} = this.props.data;
    const { data } = this.props;
    return (
      <>
        <div className="main">
          <img src="/images/covid.jpg" />

          <div className="box1">
            <h3>ติดเชื้อสะสม</h3>
            <h2>{data.Confirmed}</h2>
            <h3>[+ {data.NewConfirmed} ]</h3>
          </div>
          <div className="box2">
            <h3>หายแล้ว</h3>
            <h2>{data.Recovered}</h2>
            <h3>[+ {data.NewRecovered}] </h3>
          </div>
          <div className="box3">
            <h3>รักษาอยู่ใน รพ.</h3>
            <h2>{data.Hospitalized}</h2>
            <h3>[+ {data.NewHospitalized}] </h3>
          </div>
          <div className="box4">
            <h3>เสียชีวิต</h3>
            <h2>{data.Deaths}</h2>
            <h3>[+ {data.NewDeaths}] </h3>
          </div>
          <div className="info">
            <h1>รายงานสถานการณ์ โควิด-19</h1>
            <h5>อัพเดทข้อมูลล่าสุด :{data.UpdateDate} </h5>
            <p>
              แนะนำการใช้แอปพลิเคชัน “หมอชนะ”
              อีกหนึ่งวิธีที่คนไทยสามารถช่วยกันหยุดการระบาดได้ ด้วยการใช้แอป
              “หมอชนะ”
              ซึ่งจะเป็นช่องทางแจ้งเตือนแนะนำผู้ที่สัมผัสความเสี่ยงให้ไปตรวจ
              กักตัว หรือปฏิบัติตัวได้เหมาะสม
              ช่วยให้การเข้าถึงการตรวจวินิจฉัยและขีดวงหยุดการระบาดมีประสิทธิภาพดีขึ้น
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Covid;
