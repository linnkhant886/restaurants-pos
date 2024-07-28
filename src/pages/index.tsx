import { Inter } from "next/font/google";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box sx={{  height: "100vh" }}>
      <Typography variant="h3"> Landing Page</Typography>
      <Box sx={{ display: "flex" , gap: 2  }}>
        <Link href="/backoffice">
          <Button variant="contained" size="small">
            BackOffice
          </Button>
        </Link>
        <Link href="/order">
          <Button variant="contained" size="small">
            Order
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
