import React from "react";
// import ConversionForm from "./ConversionForm";

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

  return <button onClick={handleClick}>Setting</button>;
};

export default FloatingButton;
