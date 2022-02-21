import TrUniversidad from './TrUniversidad';

const ListaUniversidades = (props) => {

    console.log(props.tipoUniversidad)

    return (
        <div className="flex flex-col mx-auto mt-6 max-w-7xl">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <h2 className="w-full mb-6 text-3xl font-medium text-center"><span>{props.tipoUniversidad}</span>s</h2>
                    <TrUniversidad tipoUniversidad={props.tipoUniversidad} />
                </div>
            </div>
        </div>
    );
}

export default ListaUniversidades;