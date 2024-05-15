import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import ConversionForm from "../form/FormInput";
import { Modal } from "@mui/material";

const FloatingButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      {isFormOpen? (
        <Modal open={isFormOpen} onClose={handleCloseForm}>
          <ConversionForm onClose={handleCloseForm} />
        </Modal>
      ) : (
        <IconButton
          onClick={handleOpenForm}
          aria-label="Settings"
          style={{
            backgroundColor: "#a0d468",
            "&:hover": {
              backgroundColor: "#8cc152",
            },
            marginTop: "10px",
          }}
        >
          <SettingsIcon />
        </IconButton>
      )}
    </div>
  );
};

export default FloatingButton;