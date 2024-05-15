import React from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import FormInput from "../form/FormInput";

const FloatingButton = () => {
  const handleClick = () => {
    // Logika untuk menampilkan form
    console.log("Tombol ditekan");
    // Panggil fungsi untuk menampilkan form
    showForm();
  };

  const showForm = () => {
    // Tambahkan logika untuk menampilkan form di sini
    // Contoh: set state atau gunakan ref untuk mengontrol visibilitas form
  };

  return (
    <IconButton
      onClick={handleClick}
      aria-label="Settings"
      style={{
        backgroundColor: "#a0d468", // Warna hijau muda
        "&:hover": {
          backgroundColor: "#8cc152", // Warna hijau muda lebih gelap saat dihover
        },
        marginTop: "10px" // Menambahkan margin atas 2px
      }}
    >
      <SettingsIcon />
    </IconButton>
  );
};

export default FloatingButton;
