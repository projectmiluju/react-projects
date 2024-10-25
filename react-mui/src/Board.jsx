import { useState } from "react";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";

export default function Board() {
    const [posts, setPosts] = useState([
        { id: 1, title: "첫 번째 글", author: "홍길동" },
        { id: 2, title: "두 번째 글", author: "이몽룡" },
    ]);
    const [open, setOpen] = useState(false);
    const [newPost, setNewPost] = useState({ title: "", author: "" });

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => {
        setNewPost({ title: "", author: "" });
        setOpen(false);
    };

    const handleSubmit = () => {
        setPosts([...posts, { id: posts.length + 1, ...newPost }]);
        handleClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };

    return (
        <div style={{ padding: 30 }}>
            <h1>📋 게시판</h1>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                글 작성
            </Button>

            <TableContainer component={Paper} style={{ marginTop: 20 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>제목</TableCell>
                            <TableCell>작성자</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post) => (
                            <TableRow key={post.id}>
                                <TableCell>{post.id}</TableCell>
                                <TableCell>{post.title}</TableCell>
                                <TableCell>{post.author}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>새 글 작성</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="제목"
                        name="title"
                        fullWidth
                        variant="standard"
                        value={newPost.title}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="작성자"
                        name="author"
                        fullWidth
                        variant="standard"
                        value={newPost.author}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={handleSubmit}>등록</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
