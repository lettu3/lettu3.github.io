type Item = {
    id: string | number;
    title: string;
    desc: string;
    imgsrc? : string;
  };
  
  type FlsdmfrProps = {
    whatever?: Item[];
  };

function Flsdmfr ({ whatever = [] }: FlsdmfrProps) {
    return (
        <div>
            {whatever.map( (item: any) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default Flsdmfr;