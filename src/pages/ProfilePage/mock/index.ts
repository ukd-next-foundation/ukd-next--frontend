export const setProfileUserData = (data) => [
  {
    icon: '/mail.svg',
    value: data?.email,
    copy: data?.email,
  },
  {
    icon: '/group.svg',
    value: data?.group?.name,
  },
  {
    icon: '/call.svg',
    value: '095 125 512',
  },
]

export const curator = [
  {
    icon: '/mail.svg',
    value: 'stanislav.zubko@ukd.edu.ua',
    copy: 'stanislav.zubko@ukd.edu.ua',
  },
  {
    icon: '/vashyshak.svg',
    value: 'Ващишак Сергій Петрович',
  },
  {
    icon: '/call.svg',
    value: '096 589 251',
  },
]

export const other = [
  {
    icon: '/checkbook.svg',
    value: 'Реквізити на оплату',
    link: '/home/payment',
  },
  {
    icon: '/info3.svg',
    value: 'Корисна інформація',
    link: '#',
  },
]
