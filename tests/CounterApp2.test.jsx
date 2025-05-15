import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Testing al componente de Counter App', () => {
        test('Probando el snapshot', () => {
            const {container} = render( <CounterApp value={ 20 }/> );
            expect(container).toMatchSnapshot();
        });
        
        test('Comprobar que se muestra el Value', () => {
            render( <CounterApp value={100}/> );
            expect(screen.getByText(100)).toBeTruthy();
        });
        
});
