import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Users',
    path: '/users',
    icon: <Icon icon="lucide:users" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Admin', path: '/users/admin' },
      { title: 'Teachers', path: '/users/teachers' },
      { title: 'Accountant', path: '/users/acountant' },
      { title: 'Parents', path: '/users/parents' },
      { title: 'Students', path: '/users/students' },
    ],
  },
  {
    title: 'Admissions',
    path: '/admissions',
    icon: <Icon icon="lucide:user-plus" width="24" height="24" />,
  },
  {
    title: 'Classes',
    path: '/classes',
    icon: <Icon icon="lucide:school-2" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Class', path: '/classes/class' },
      { title: 'Section', path: '/classes/section' },
      { title: 'Subjects', path: '/classes/subjects' },
      { title: 'Class Subjects', path: '/classes/class-subjects' },
    ],
  },
  {
    title: 'Academic',
    path: '/projects',
    icon: <Icon icon="lucide:graduation-cap" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Attendance', path: '/projects' },
      { title: 'Time Table', path: '/projects/graphic-design' },
      { title: 'Home Work', path: '/projects/web-design' },
      { title: 'Evants', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Examination',
    path: '/projects',
    icon: <Icon icon="lucide:file-text" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Exam Category', path: '/projects' },
      { title: 'Exams', path: '/projects/web-design' },
      { title: 'Marks', path: '/projects/graphic-design' },
      { title: 'Results', path: '/projects/web-design' },
      { title: 'Promotion', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Accounting',
    path: '/projects',
    icon: <Icon icon="lucide:wallet" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Exam Category', path: '/projects' },
      { title: 'Exams', path: '/projects/web-design' },
      { title: 'Exam marks', path: '/projects/graphic-design' },
      { title: 'Exam results', path: '/projects/web-design' },
      { title: 'Promotion', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Reports',
    path: '/projects',
    icon: <Icon icon="lucide:line-chart" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Exam Category', path: '/projects' },
      { title: 'Exams', path: '/projects/web-design' },
      { title: 'Exam marks', path: '/projects/graphic-design' },
      { title: 'Exam results', path: '/projects/web-design' },
      { title: 'Promotion', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
