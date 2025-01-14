import React, { useState } from "react";
import { Box } from "@mui/material";
import DishImage from "./DishImage";
import SearchInput from "./SearchInput";
import { getMenu } from "utils/dishes";

const SearchSquares = () => {
  const [filtered, setFiltered] = useState([]);
  const [searchLabel, setSearchLabel] = useState("");

  const dishes = getMenu(process.env.NEXT_PUBLIC_BRAND);

  const filterMenu = () => {
    const helper = dishes.filter((dish) => {
      return dish.name.toLowerCase().includes(searchLabel.toLowerCase());
    });
    if (helper.length) {
      setFiltered(helper);
    }
  };

  return (
    <Box
      sx={{
        paddingTop: "48px",
        position: "fixed",
        backgroundColor: "white",
        zIndex: 0,
      }}
    >
      <SearchInput
        setSearchLabel={setSearchLabel}
        filterMenu={filterMenu}
        searchLabel={searchLabel}
      />
      <Box>
        <DishImage
          id={process.env.NEXT_PUBLIC_BRAND}
          filteredDishes={filtered.length > 0 ? filtered : dishes}
        />
      </Box>
    </Box>
  );
};

export default SearchSquares;
