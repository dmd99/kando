import React from 'react'
import { TextField,InputAdornment } from "@material-ui/core"
import {Search} from "react-feather"

const TextInput = () => {
    return (
      <TextField
        style={{ marginRight: "10px", alignSelf: "center" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    );
  };

export default TextInput