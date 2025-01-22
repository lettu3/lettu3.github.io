import i18next from "i18next";


type ArticlePrevType = {
    id: number | string;
    name: string;
    prev : string;
    imgsrc? : string;
}

type ArticlePrevProps = {
    articleprev : ArticlePrevType;
}



function ArticlePrev ({articleprev} : ArticlePrevProps) {
    return (
        <div className="article">
            <h1>{name}</h1>
            <p>{body}</p>
        </div>
    );
}

export default ArticlePrev;