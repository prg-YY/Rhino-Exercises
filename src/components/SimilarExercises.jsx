import React from "react"

import { Box, Stack, Typography } from "@mui/material"
import HorizontalScrollBar from "./HorizontalScrollBar"
import Loader from "./Loader"

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Similar Exercises
      </Typography>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={{ xs: "0", lg: "20px" }}
        sx={{ p: "2", position: "relative" }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mt={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        mt={5}
        spacing={{ xs: "0", lg: "20px" }}
        sx={{ p: "2", position: "relative" }}
      >
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
