import { useState, useRef } from "react";
import { ReadMore } from "../../widget/ReadMore";
import { Link, useNavigate } from "react-router-dom";
import { Add, Visibility } from "@mui/icons-material";
import { uploadImage, addDocument } from "../../firebase";
import { Sidebar } from "../../components/sidebar/Sidebar";
import {
  Box,
  Grid,
  Alert,
  Button,
  Drawer,
  Divider,
  Snackbar,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";

export const AddBook = () => {
  const uploadBtn = useRef(null);
  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [chapter, setChapter] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState([]);
  const [bookName, setBookName] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [rightDrawer, setRightDrawer] = useState(false);
  const [previewImg, setPreviewImg] = useState("/upload-image.png");

  const handleAddChapter = () => {
    setContent([...content, { chapter, summary }]);

    setChapter("");
    setSummary("");
    setRightDrawer(!rightDrawer);
  };

  const imgUpload = (e) => {
    const imgFile = e.target.files[0];

    setPreviewImg(URL.createObjectURL(imgFile));
    uploadImage(imgFile).then((res) => setPreviewImg(res));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      author,
      content,
      bookName,
      previewImg,
    };

    addDocument("books", data).then(() => {
      setSuccessMsg(!successMsg);

      setTimeout(() => {
        navigate("/books");
      }, 2500);
    });
  };

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
                <img src={previewImg} alt="Uploaded Image" />
              </Box>
              <input
                type="file"
                ref={uploadBtn}
                accept="image/*"
                onChange={imgUpload}
                hidden
              />
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
                    <IconButton onClick={() => setRightDrawer(!rightDrawer)}>
                      <Visibility />
                    </IconButton>
                    &nbsp; &nbsp; &nbsp;
                    <IconButton onClick={handleAddChapter}>
                      <Add />
                    </IconButton>
                  </Box>
                </Box>
                <br />
                <TextField
                  value={chapter}
                  label="Chapter Name"
                  onChange={(e) => setChapter(e.target.value)}
                  fullWidth
                />
                <br />
                <br />
                <TextField
                  rows={3}
                  value={summary}
                  label="Summary"
                  onChange={(e) => setSummary(e.target.value)}
                  fullWidth
                  multiline
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

      {/* Books Preview */}
      <Drawer
        anchor="right"
        open={rightDrawer}
        onClose={() => setRightDrawer(!rightDrawer)}
      >
        <Box width={300}>
          <br />
          <Typography textAlign="center">Chapter Previews</Typography>
          <br />
          <Divider />
          <br />
          {content &&
            content.map((e, index) => {
              return (
                <Box key={index} p={2} width={300}>
                  <Typography>
                    <b>{e.chapter}</b>
                  </Typography>
                  <br />
                  <ReadMore>{e.summary.trim()}</ReadMore>
                  <br />
                  <Divider />
                  <br />
                </Box>
              );
            })}
        </Box>
      </Drawer>

      <Snackbar
        open={successMsg}
        autoHideDuration={2500}
        onClose={() => setSuccessMsg(!successMsg)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Data Added Successfully
        </Alert>
      </Snackbar>
    </Sidebar>
  );
};
