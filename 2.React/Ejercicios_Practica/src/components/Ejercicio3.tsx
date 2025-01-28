type Props = {
  contador: number;
};
const Contador = ({ contador }: Props) => {
  return <div>Contador: {contador}</div>;
};

export default Contador;
