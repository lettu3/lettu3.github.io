type Article = {
    id : number;
    title : string;
}

function Article ({}) {
    return (
        <div className="article">
            <h1>{name}</h1>
            <p>{body}</p>
        </div>
    );
}