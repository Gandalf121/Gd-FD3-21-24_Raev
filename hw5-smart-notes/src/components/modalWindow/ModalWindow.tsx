import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {SvgIconComponent} from "@mui/icons-material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#222',
    color: 'rgba(168, 147, 147, 0.87);',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type ModalWindowProps = {
    Icon?: SvgIconComponent;
    textButton?: string;
    content: React.ReactNode;
}


export default function ModalWindow({Icon,textButton,content}: ModalWindowProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {Icon ? <Icon onClick={handleOpen}/> : <button onClick={handleOpen}>{textButton}</button>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {content}
                </Box>
            </Modal>
        </div>
    );
}