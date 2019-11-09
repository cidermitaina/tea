import { Tea } from '../../types/application'

export const teaCup: Tea[] = [
  {
    name: 'Burleigh / Burgess Chintz',
    href: 'https://tasman-inter.net/?mode=cate&cbid=990417&csid=4',
    src: `${process.env.PUBLIC_URL}/images/burgess_chintz.jpg
           `,
    alt: 'burgesschintz',
  },
  {
    name: 'Burleigh / Red Calico',
    href: 'https://tasman-inter.net/?mode=cate&cbid=990417&csid=1',
    src: `${process.env.PUBLIC_URL}/images/red_calico.jpg`,
    alt: 'redcalico',
  },
]
