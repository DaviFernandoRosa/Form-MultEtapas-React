import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import  { useEffect } from 'react';

export const FormStepFinal = () => {
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        
    }, []);


    return (
        <Theme>
            <C.Container>
                <p>Finalizado!</p>
                <h1>😎Legal {state.name}, você acaba de se cadastrar em nosso sistema!!!</h1>
                <p>Embreve entraremos em contato! Boa sorte.🚀</p>

                <hr/>

                <h3>✅ Dados cadastrados:</h3>
                <p> <strong>Nome:</strong> {state.name}</p>
                <p><strong>E-mail:</strong> {state.email}</p>
                <p><strong>GitHub:</strong> {state.github}</p>

                <hr/>

                
            </C.Container>
        </Theme>
    );
}