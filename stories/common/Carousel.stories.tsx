'use client';

import { Carousel } from '@components/common';
import TileComponent from '@components/common/carousel/tile';
import { type FestivalInfo } from '@/app/[locale]/(back-nav)/festival/actions';
import type { Meta, StoryObj } from '@storybook/react';

const festivals: FestivalInfo[] = [
  {
    subId: "1",
    name: "Danfesta 2024",
    addr: "단국대 죽전캠퍼스",
    startDate: "2024-05-22",
    endDate: "2024-05-23",
    festivalStatus: "BEFORE",
    description: "단국대학교 축제 Orbit",
    url: "https://www.instagram.com/p/C6aPtvXBs16/?img_index=1",
    festivalFiles: [
      {
        originalFileName: "image",
        mimeType: "image/jpeg",
        file: "https://scontent.cdninstagram.com/v/t39.30808-6/441254653_18323237617127956_1374219647061733025_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=iYQNJUVmoAEQ7kNvgHM1K4_&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM1ODA2NTU3NTk5MzAwMTk2Mw%3D%3D.2-ccb7-5&oh=00_AYDAcqDcGs8oZCPIBhUSQvzy4OXSRHwIKKAPuH12o3IJNA&oe=664775DA&_nc_sid=10d13b",
        type: "POSTER"
      }
    ],
  },
  {
    subId: "4",
    name: "RACHIOS : 파도",
    addr: "한양대학교",
    startDate: "2024-05-22",
    endDate: "2024-05-24",
    festivalStatus: "BEFORE",
    description: "푸른 물결 모여 일으킬 힘찬 파도",
    url: "https://www.instagram.com/hy_stu/",
    festivalFiles: [
      {
        originalFileName: "image",
        mimeType: "image/jpeg",
        file: "https://scontent.cdninstagram.com/v/t39.30808-6/440351699_18057761641583580_1177360644249057283_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDc5eDEwNzkuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=AoNygNe19OgQ7kNvgHHtHb_&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM2Mjc2NTM0NjUxMDM5NjI1OQ%3D%3D.2-ccb7-5&oh=00_AYDHKZSv6STTlAkYSgTvSEtbDRtG8bR7spUe_TXcdy-_9g&oe=66459275&_nc_sid=10d13b",
        type: "POSTER"
      }
    ],
  },
];

const meta: Meta<typeof Carousel> = {
  title: 'COMMON/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    festivals: festivals,
  },
};

export const Tile: Story = {
  args: {
    festivals: festivals,
  },
  render: (args) => {
    return <TileComponent {...args.festivals[0]} />;
  },
};
