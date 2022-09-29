import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {

  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
        <Button 
            onClick={ () => dispatch(openSendMessage())}
            startIcon={<AddIcon fontSize='large'/>}
            className='sidebar__compose'>
            Compose
         </Button>

        <SidebarOptions Icon={InboxIcon} title='Indox' number={23} selected={true}/>
        <SidebarOptions Icon={StarIcon} title='Starred' number={40} />
        <SidebarOptions Icon={AccessTimeIcon} title='Snoozed' number={30} />
        <SidebarOptions Icon={LabelImportantIcon} title='Important' number={12} />
        <SidebarOptions Icon={NearMeIcon} title='Sent' number={100} />
        <SidebarOptions Icon={DraftsIcon} title='Draft' number={60} />
        <SidebarOptions Icon={ExpandMoreIcon} title='More' number={4} />

        <div className='sidebar__footer'> 
            <div className="sidebar__footerIcon">
                <IconButton>
                    <PersonIcon />
                </IconButton>

                <IconButton>
                    <DuoIcon />
                </IconButton>

                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>
        


    </div>
  )
}

export default Sidebar