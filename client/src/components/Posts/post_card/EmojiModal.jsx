import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import reacts from '../../../images/posts/emoji.png'
import { Tooltip } from '@material-ui/core';
import Picker from 'emoji-picker-react';
function getModalStyle() {
    return {
        top: `5% !important`,
        left: `52%`,
        transform: `translate(-50%, -50%)`,
        border: 'none',
        outline: 'none',
        position: 'absolute'
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        top: '30% !important',
        right: '25% !important',
        height: 350,
        [theme.breakpoints.down('xs')]: {
            width: 300,
            height: 270,
            top: '25% !important',
            left: '35% !important'
        },
    },
    camera: {
        backgroundImage: `url(${reacts})`,
        width: '16px',
        display: 'block',
        height: '16px',
        filter: 'var(--filter-secondary-icon)',
        marginRight: '12px',
        backgroundPosition: ' 0px -520px',
        backgroundSize: ' 26px 820px',
        backgroundRepeat: 'no-repeat',
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
                <i className={classes.camera}>
                </i>
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
