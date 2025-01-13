export default function PaginaConvite(props: any) {
    console.log("PaginaConvite", props);
    return(
        <div>
            <span className="text-white">{props.params.alias}</span>
        </div>
    )
}