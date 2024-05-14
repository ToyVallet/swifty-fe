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
    subId: "2",
    name: "아우름제",
    addr: "가톨릭대학교",
    startDate: "2024-05-22",
    endDate: "2024-05-23",
    festivalStatus: "BEFORE",
    description: "아우름의 순간, 푸른 빛으로 물든 우리의 계절",
    url: "https://www.instagram.com/p/C63wvEhvy38/?img_index=1",
    festivalFiles: [
      {
        originalFileName: "image",
        mimeType: "image/jpeg",
        file: "https://scontent.cdninstagram.com/v/t51.29350-15/436208642_8387365184610271_2793759708685565882_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44NjR4MTA4MC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=aIEQxgYgoKkQ7kNvgGV9PBr&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzM2NjM3MzU4MzAwNDUzODI2OQ%3D%3D.2-ccb7-5&oh=00_AYAh-yefU4iTrDPQImBDsxpd81KvUYcSNqzNb-H8zJOJoQ&oe=66479375&_nc_sid=10d13b",
        type: "POSTER"
      }
    ]
  },
  {
    subId: "3",
    name: "청림축제",
    addr: "한남대학교",
    startDate: "2024-05-22",
    endDate: "2024-05-24",
    festivalStatus: "BEFORE",
    description: "파도처럼 일렁이는 오월의 대향연!",
    url: "https://www.instagram.com/p/C65gjyhPHGW/?img_index=1",
    festivalFiles: [
      {
        originalFileName: "image",
        mimeType: "image/jpeg",
        file: "https://scontent.cdninstagram.com/v/t51.29350-15/436379720_1165467521548630_5565556788729911802_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=GEFaB_IHuV8Q7kNvgE-UIkY&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzM2Njg2NTM4ODA0MTA2Nzk4Ng%3D%3D.2-ccb7-5&oh=00_AYD8LeY6h_2Bx-uKEckMVYNRhXzDmYIsYmf3lNiWd7OqVw&oe=66479FE3&_nc_sid=10d13b",
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
  {
    subId: "5",
    name: "2024 GRACIA",
    addr: "조선대학교",
    startDate: "2024-05-27",
    endDate: "2024-05-29",
    festivalStatus: "BEFORE",
    description: "",
    url: "https://www.instagram.com/chosun_37th/",
    festivalFiles: [
      {
        originalFileName: "image",
        mimeType: "image/jpeg",
        file: "https://scontent.cdninstagram.com/v/t51.29350-15/436293792_1115473106392984_7449032109582140290_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=xUuaOBIlufQQ7kNvgH3wfME&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzM2Njc5MTE0Mzc5NDI4MDQwMw%3D%3D.2-ccb7-5&oh=00_AYCIgrCXo44I2p59C5kcuTLJoQmVxFcpPFFOE9AUYlxQzA&oe=6646039D&_nc_sid=10d13b",
        type: "POSTER"
      }
    ],
  },
  {
    subId: "6",
    name: "백상대동제",
    addr: "동국대학교",
    startDate: "2024-05-28",
    endDate: "2024-05-30",
    festivalStatus: "BEFORE",
    description: "봄 대동제 : 無我之境",
    url: "https://www.instagram.com/donggukstuco/",
    festivalFiles: [
      {
        originalFileName: "image",
        mimeType: "image/jpeg",
        file: "https://scontent.cdninstagram.com/v/t51.29350-15/434278821_1095433795006344_7895294653426061124_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=8Df5XyVfcacQ7kNvgGJea8m&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMyOTg2MDc4OTQ3NzI2NTcwOA%3D%3D.2-ccb7-5&oh=00_AYAt9ZHVgDqOb-dj7jRqse56Kb8nKzEtI7VJ8CE1YsSYnQ&oe=66479635&_nc_sid=10d13b",
        type: "POSTER"
      }
    ],
  }
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
