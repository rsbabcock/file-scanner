import * as React from "react";
import Box from "@mui/material/Box";
import { green, lightGreen } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Check from "@mui/icons-material/Check";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProcessButton({ uploadedFiles, setProcessedFiles }) {
  //   TODO customize this boilerplate code!
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const timer = React.useRef();

  const disableButton = uploadedFiles.length >= 1 ? false : true;

  console.log(disableButton, uploadedFiles.length);
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "50%", marginTop: "2em" }}>
        {loading ? <LinearProgress /> : null}
        {success ? (
          <LinearProgress variant="determinate" value={100} color="success" />
        ) : null}
      </Box>
      <Box sx={{ m: 1, position: "relative" }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={disableButton}
          onClick={handleButtonClick}
        >
          {success ? (
            <>
              Images Processed <Check />
            </>
          ) : (
            "Process Images"
          )}
        </Button>
      </Box>
    </Box>
  );
}
