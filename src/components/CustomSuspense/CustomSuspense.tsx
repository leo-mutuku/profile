import React, { Suspense as ReactSuspense } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

interface CustomSuspenseProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const CustomSuspense: React.FC<CustomSuspenseProps> = ({
  children,
  fallback,
}) => {
  return (
    <ReactSuspense
      fallback={
        fallback || (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              textAlign: "center",
            }}
          >
            <CircularProgress size={60} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Loading...
            </Typography>
          </Box>
        )
      }
    >
      {children}
    </ReactSuspense>
  );
};

export default CustomSuspense;
