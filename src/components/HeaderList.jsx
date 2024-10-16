import React from "react";
import { Input, InputGroup, SelectPicker } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { genreData } from "../Utils";

const HeaderList = (props) => {
  const { searchQuery, setSearchQuery, setSelectedGenre,selectedGenre } = props;
  
  return (
    <div className="listHeader">
      <h3>List of books</h3>

      <SelectPicker
        data={genreData}
        searchable={false}
        defaultValue={selectedGenre}
        style={{ width: 224 }}
        placeholder="Genre"
        onChange={(value) => setSelectedGenre(value)}
      />

      <InputGroup style={{ width: 284 }}>
        <Input
          value={searchQuery}
          onChange={(value) => setSearchQuery(value)}
          placeholder="Search by title"
        />
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default HeaderList;
