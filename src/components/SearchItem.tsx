import React from "react";

interface Props {
  handelChange: (value: string) => void;
}

const SearchItem = (props: Props) => {
  return (
    <input
      style={{
        display: "flex",
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        outline: "none",
      }}
      type="text"
      placeholder="search "
      onChange={(e) => props.handelChange(e.target.value)}
    />
  );
};

export default SearchItem;
