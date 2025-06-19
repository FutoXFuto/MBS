import React from "react";
import BoxIcon from "../assets/icons/BoxIcon.svg?react";
import NoteIcon from "../assets/icons/NoteIcon.svg?react";
import GraphIcon from "../assets/icons/GraphIcon.svg?react";
import UserIcon from "../assets/icons/UserIcon.svg?react";
import PageHeader from '../components/PageHeader'


const menuItems = [
  { icon: BoxIcon, label: "受注管理" },
  { icon: NoteIcon, label: "納品管理" },
  { icon: GraphIcon, label: "統計情報" },
  { icon: UserIcon, label: "顧客情報" },
];

const containerStyle = {
  minHeight: "100vh",
  minWidth: "100vw",
  background: "#f3f4f6",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "32px 16px",
  gap: "24px",
};

const itemStyle = {
  width: "100%",
  maxWidth: "320px",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  padding: "16px 24px",
  borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  border: "1px solid #065f46",
  marginBottom: "16px",
  transition: "box-shadow 0.2s",
};

const iconStyle = {
  width: "24px",
  height: "24px",
  color: "#065f46",
  marginRight: "16px",
};

const labelStyle = {
  color: "#065f46",
  fontSize: "18px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "12px",
};

const Home = () => (
  <div>
    <PageHeader mode="none"title="緑橋書店管理システム" showBackIcon={false} />
    <div style={containerStyle}>
      {menuItems.map((item, index) => (
        <div key={index} style={itemStyle}>
          <span style={labelStyle}>
            <item.icon style={iconStyle} />
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Home;