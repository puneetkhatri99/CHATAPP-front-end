import { Box, Typography } from '@mui/material';
import React, { memo } from 'react'
import {lightBlue} from '../../constants/colors'
import moment from 'moment';
import { fileFormat } from '../../lib/features';
import RenderAttachments from './RenderAttachments';


const MessageComponent = ({message , user}) => {

    const {sender , content , attachments=[] , createdAt} = message;

    const timeAgo = moment(createdAt).fromNow();

    const sameSender = sender?._id === user?._id
  return (
    <div
    style={{
        alignSelf : sameSender ? "flex-end" : "flex-start" ,
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
    }}
    >
        {
        !sameSender && <Typography color={lightBlue} fontWeight={"600"} variant="caption"> {sender.name}</Typography>
        }

        {
        content && <Typography> {content} </Typography>
        }

        {
            attachments.length > 0 && attachments.map((attachment , index)=>{
                const url = attachment.url;
                const file = fileFormat(url);

                return <Box key = {index}>
                    <a href={url} target='_blank' download={true} style={{
                        color: "black"
                    }}>
                      {  RenderAttachments(file , url)}
                    </a>
                </Box>
            })
        }

        {
            <Typography variant="caption" color={"text.secondary"}>
                {timeAgo}
            </Typography>
        }
        
    </div>
  )
}

export default memo(MessageComponent)