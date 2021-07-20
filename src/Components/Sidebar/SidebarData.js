
import HomeIcon from '@material-ui/icons/Home';
import ClassIcon from '@material-ui/icons/Class';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import WorkIcon from '@material-ui/icons/Work';

export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <HomeIcon />,
        link: '/'
    },
    {
        title: 'Class',
        icon: <ClassIcon />,
        link: '/class'
    },
    {
        title: 'Teachers',
        icon: <PersonIcon />,
        link: '/teacher'
    },
    {
        title: 'Students',
        icon: <PeopleIcon />,
        link: '/student'
    },
    {
        title: 'Events',
        icon: <EventIcon />,
        link: '/event'
    },
    {
        title: 'News',
        icon: <AnnouncementIcon />,
        link: '/news'
    },
    {
        title: 'Staff',
        icon: <WorkIcon />,
        link: '/staff'
    }
];
