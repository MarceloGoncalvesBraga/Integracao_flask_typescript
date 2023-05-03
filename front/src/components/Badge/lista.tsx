import { Badge, Card } from 'antd';

const data = [
  { text: 'Hippies', color: 'black' },
  { text: 'Rockers', color: 'red' },
  { text: 'Punks', color: 'green' },
  { text: 'Mods', color: 'blue' },
];

const RibbonCards = () => {
  return (
    <div>
      {data.map((item, index) => (
        <Badge.Ribbon key={index} text={item.text} color={item.color}>
          <Card title="Pushes open the window" size="small">
            and raises the spyglass.
          </Card>
        </Badge.Ribbon>
      ))}
    </div>
  );
};
export default RibbonCards;