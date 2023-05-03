import React from 'react';
import * as S from './styles';

import { Badge, Card } from 'antd';

interface Data {
  text?: string;
  color?: string;
}

interface Props {
  data: Data[];
}

const data = [
  { text: 'Hippies', color: 'black' },
  { text: 'Rockers', color: 'red' },
  { text: 'Punks', color: 'green' },
  { text: 'Mods', color: 'blue' },
];

const Lista: React.FC<Props> = ({ data }: Props) => {
  return (
    <S.CustomSpace direction="vertical" size="middle" style={{ width: '100%' }}>
      {data.map((item, index) => (
        <Badge.Ribbon key={index} text={item.text} color={item.color}>
          <Card title="Pushes open the window 2" size="small">
            and raises the spyglass.2
          </Card>
        </Badge.Ribbon>
      ))}
    </S.CustomSpace>
  );
};

export default Lista;