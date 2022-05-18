import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Tooltip } from '@material-ui/core';
import Picker from 'emoji-picker-react';
import { SentimentSatisfiedAlt } from '@material-ui/icons';

function getModalStyle() {
    return {
        top: `35%`,
        left: `65%`,
        transform: `translate(-50%, -50%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        height: 350,
        [theme.breakpoints.down('md')]: {
            width: 300,
            height: 270
        },
    },
}));

export default function EmojiModal({ setContent }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setShowPicker(val => !val)
    };

    // Show Emoji
    const onEmojiClick = (event, emojiObject) => {
        setContent(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
        setOpen(false)
    };

    const handleClose = () => {
        setOpen(false);
        setShowPicker(false)
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            {showPicker && <Picker
                disableSearchBar={true}
                pickerStyle={{ width: '100%', display: 'none !important' }}
                onEmojiClick={onEmojiClick} />}
        </div>
    );

    return (
        <div>
            <Tooltip onClick={handleOpen} title="Emoji" placement="top-start">
                <SentimentSatisfiedAlt style={{ color: '#ddd', cursor: 'pointer', marginTop: '4px' }} />
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
