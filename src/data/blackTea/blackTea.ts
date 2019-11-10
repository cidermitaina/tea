import { Tea } from '../../types/application'

export const blackTeas: Tea[] = [
  {
    name: 'Fortnum & Mason / ROYAL BLEND',
    href: 'https://fortnumandmason.co.jp/',
    src: `${process.env.PUBLIC_URL}/images/fortnumandmason.jpg`,
    alt: 'fortnumandmason',
    tags: ['Fortnum & Mason', 'British'],
  },
  {
    name: 'MARIAGE FRÈRES / EARL GREY IMPERIAL',
    href: 'http://www.mariagefreres.co.jp/',
    src: `${process.env.PUBLIC_URL}/images/mariagefreres.jpg`,
    alt: 'mariagefreres',
    tags: ['MARIAGE FRÈRES', 'Earl Grey', 'France'],
  },
  {
    name: 'Bünting Tee / C.K. Privat',
    href: 'https://www.buenting-tee.de/',
    src: `${process.env.PUBLIC_URL}/images/buntingtee.jpg`,
    alt: 'buntingtee',
    tags: ['Bünting Tee', 'Germany'],
  },
  {
    name: 'SUKI TEA / EARLGREY BLUEFLOWER',
    href: 'https://suki-tea.com/',
    src: `${process.env.PUBLIC_URL}/images/suki.jpg`,
    alt: 'suki',
    tags: ['SUKI TEA', 'Earl Grey', 'British'],
  },
  {
    name: 'Navarasa / fruits rouges',
    href: 'http://shop.leafull.co.jp/html/newpage.html?code=24',
    src: `${process.env.PUBLIC_URL}/images/navarasa.jpg`,
    alt: 'navarasa',
    tags: ['Navarasa', 'Dessert tea', ' Japan'],
  },
  {
    name: 'Whittard / CHRISTMAS TEA',
    href: 'https://www.whittard.co.uk',
    src: `${process.env.PUBLIC_URL}/images/whittard.jpg`,
    alt: 'whittard',
    tags: ['Whittard', 'Christmas Tea', ' British'],
  },
  {
    name: 'NEWBY / EARL GREY',
    href: 'https://newby-j.jimdo.com/products/',
    src: `${process.env.PUBLIC_URL}/images/newby.jpg`,
    alt: 'newby',
    tags: ['NEWBY', 'Earl Grey', 'British'],
  },
]
