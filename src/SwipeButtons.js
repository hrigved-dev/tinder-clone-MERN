import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="repeat" style={{ color: "#f5b748" }}>
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="left" style={{ color: "#ec5e6f" }}>
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="star" style={{ color: "#62b4f9" }}>
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="right" style={{ color: "#76e2b3" }}>
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="lightning" style={{ color: "#915dd1" }}>
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
