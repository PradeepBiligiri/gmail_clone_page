import React from "react";
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import { gmailLogo } from "../constant/constant";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AppsIcon from "@mui/icons-material/Apps";

function Header() {
  const StyledAppBar = styled(AppBar)({
    background: "#f5f5f5",
    boxShadow: "none",
  });

  const SearchWrapper = styled(Box)({
    background: "#eaf1fb",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 80,
    minWidth: 660,
    maxWidth: 720,
    height: 48,
    padding: "0 20px",
    "& > div": {
      width: "100%",
      padding: "0 5px",
    },
  });

  const OptionWrapper = styled(Box)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > svg": {
      marginLeft: 20,
      fontSize: 30,
    },
  });

  return (
    <div>
      <StyledAppBar color="action">
        <Toolbar>
          <MenuIcon />
          <img
            src={gmailLogo}
            alt="gmail logo"
            style={{ width: 115, marginLeft: 15 }}
          />

          <SearchWrapper>
            <SearchOutlinedIcon />
            <InputBase placeholder="Search mail" />
            <TuneIcon />
          </SearchWrapper>
          <OptionWrapper>
            <HelpOutlineIcon />
            <SettingsIcon />
            <AppsIcon />
            <AccountCircleOutlinedIcon />
          </OptionWrapper>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

export default Header;
