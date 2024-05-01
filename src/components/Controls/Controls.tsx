import { Box, Button } from "@mui/material";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import { useThemeModeContext } from "../../context/ThemeModeContext";
interface Props {
  view: string;
  cycleView: () => void;
  resetButtons: () => void;
}

const Controls = ({ view, cycleView, resetButtons }: Props) => {
  const { darkMode, toggleDarkMode } = useThemeModeContext();

  return (
    <Box
      display="flex"
      position="fixed"
      bottom="0px"
      left="50%"
      justifyContent="center"
      gap="10px"
      border="2px solid"
      borderBottom="none"
      borderColor="control.border"
      borderRadius="18px 18px 0px 0px"
      p="6px"
      bgcolor="control.bg"
      sx={{
        transform: "translateX(-50%)",
      }}
    >
      <Button variant="control" onClick={cycleView}>
        View: {view}
      </Button>
      <Button variant="control" onClick={resetButtons}>
        Reset
      </Button>
      <Button variant="control" onClick={toggleDarkMode}>
        {darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
      </Button>
    </Box>
  );
};

export default Controls;
