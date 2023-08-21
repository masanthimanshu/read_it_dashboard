import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Add, Visibility } from "@mui/icons-material";
import { Sidebar } from "../../components/sidebar/Sidebar";
import {
  Box,
  Grid,
  Button,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";

export const AddBook = () => {
  const uploadBtn = useRef(null);

  const [author, setAuthor] = useState("");
  const [chapter, setChapter] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState([]);
  const [bookName, setBookName] = useState("");

  const handleSubmit = () => {};

  return (
    <Sidebar>
      <Box m={5}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item md={6}>
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() => uploadBtn.current.click()}
              >
                <img src="/upload-image.png" alt="Upload Image" />
              </Box>
              <input ref={uploadBtn} type="file" accept="image/*" hidden />
            </Grid>
            <Grid item md={6}>
              <TextField
                value={bookName}
                label="Book Name"
                onChange={(e) => setBookName(e.target.value)}
                fullWidth
                required
              />
              <br />
              <br />
              <TextField
                value={author}
                label="Author Name"
                onChange={(e) => setAuthor(e.target.value)}
                fullWidth
                required
              />
              <br />
              <br />
              <Box p={2} border={2} borderRadius={1}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography>Add Book Content</Typography>
                  <Box>
                    <IconButton onClick={() => {}}>
                      <Visibility />
                    </IconButton>
                    &nbsp; &nbsp; &nbsp;
                    <IconButton onClick={() => {}}>
                      <Add />
                    </IconButton>
                  </Box>
                </Box>
                <br />
                <TextField
                  value={chapter}
                  label="Chapter Name"
                  onChange={(e) => setAuthor(e.target.value)}
                  fullWidth
                  required
                />
                <br />
                <br />
                <TextField
                  rows={3}
                  value={summary}
                  label="Summary"
                  onChange={(e) => setAuthor(e.target.value)}
                  fullWidth
                  multiline
                  required
                />
              </Box>
            </Grid>
          </Grid>
          <Box m={5} textAlign="center">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            &nbsp; &nbsp;
            <Link to="/books">
              <Button variant="outlined" color="primary">
                Cancel
              </Button>
            </Link>
          </Box>
        </form>
      </Box>
    </Sidebar>
  );
};
