import BackofficeLayout from "@/components/BackofficeLayout";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { NewAddonDialog } from "@/components/NewAddonDialog";

const AddOn = () => {
  const [open, setOpen] = useState(false);

  return (
    <BackofficeLayout>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            sx={{ bgcolor: "#4C4C6D", "&:hover": { bgcolor: "#66667c" } }}
            onClick={() => setOpen(true)}
          >
            New Addon
          </Button>
        </Box>
      </Box>
      <NewAddonDialog open={open} setOpen={setOpen} />
    </BackofficeLayout>
  )
}

export default AddOn
