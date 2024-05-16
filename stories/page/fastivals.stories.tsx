import Page from '@/app/[locale]/(root-nav)/festivals/page';
import RootNavLayout from '@/app/[locale]/(root-nav)/layout';
import LocaleLayout from '@/app/[locale]/layout';
import { Meta, StoryObj } from '@storybook/react';
import * as NextIntlServer from 'next-intl/server';
import { createMock } from 'storybook-addon-module-mock';

const meta: Meta<typeof Page> = {
  title: 'PAGE/festivals',
  component: Page,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {},
  parameters: {
    moduleMock: {
      mock: () => {
        const getTranslationsMock = createMock(
          NextIntlServer,
          'getTranslations',
        );
        getTranslationsMock.mockReturnValue(
          Promise.resolve<any>((link: string) => link),
        );
        return [getTranslationsMock];
      },
    },
  },
  render: () => {
    return (
      <LocaleLayout>
        <RootNavLayout>
          <Page />
        </RootNavLayout>
      </LocaleLayout>
    );
  },
};
