import HeroTile from '@/app/components/common/hero/hero-tile';
import { festivalLinupes } from '@/app/lib/mock/data';
import { Carousel, Hero } from '@components/common';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Hero> = {
  title: 'COMMON/Hero',
  argTypes: { isCarousel: { control: 'boolean' } },
  component: Hero,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Hero>
        <div>test</div>
      </Hero>
    );
  },
};

export const Hero_Tile: Story = {
  args: {},
  render: () => {
    return (
      <Hero>
        <HeroTile {...festivalLinupes[0]} />
      </Hero>
    );
  },
};

export const Hero_Carousel: Story = {
  args: {},
  render: () => {
    return (
      <Hero>
        <Carousel hasIndicator>
          {festivalLinupes.map((fetsival) => (
            <HeroTile key={fetsival.name} {...fetsival} />
          ))}
        </Carousel>
      </Hero>
    );
  },
};
