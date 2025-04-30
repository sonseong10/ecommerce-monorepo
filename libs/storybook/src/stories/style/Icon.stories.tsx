import type { Meta, StoryObj } from '@storybook/react';
import styled from "styled-components";
import SVG from "../../commons/styles/svgIcon"

const ICon = styled.div<{name?: string}>`
  width: 40px;
  height: 40px;
  background: ${props =>
    props.name && props.color
      ? `url(${SVG[props.name](props.color)}) no-repeat center`
      : ""};
  background-size: 20px;
`;

const meta = {
  title: 'Style/ICons',
  component: ICon,
  argTypes: {
    name: {
      description: "아이콘 명",
      table: {
        defaultValue: {
          summary: "normal",
        },
      },
      options: Object.keys(SVG),
      control: { type: "select" },
    }
  }
} satisfies Meta<typeof ICon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {args:{color: "#1d1d1d", name: 'Delete'}};