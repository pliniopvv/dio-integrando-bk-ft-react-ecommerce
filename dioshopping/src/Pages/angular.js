import { makeStyles } from "@material-ui/core";
import { Fragment } from "react";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         marginTop: '5px',
//     },
//     paper: {
//         padding: '5px',
//     }
// }));

const AngularFramework = () => {
    return (
        <Fragment>
            <div style={{width: '50vw', margin: 'auto'}}>
                <p>Angular é melhor!</p>
                <p>Baixe-o executando o comando: <span style={{padding: '3px', backgroundColor: 'gray'}}>npm install -g @angular/cli</span></p>
            </div>
        </Fragment>
    );
}

export default AngularFramework;
